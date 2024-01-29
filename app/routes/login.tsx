import FormField from "~/components/form-field"
import { faAt, faLock, faUser } from "@fortawesome/pro-regular-svg-icons"
import { useState, useEffect, useRef } from "react";
import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { validateEmail, validateName, validatePassword } from "~/utils/validators.server";
import { login, register, getUser } from '~/utils/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
    return await getUser(request) ? redirect("/") : null
}

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const action = form.get("_action");
    const email = form.get("email");
    const password = form.get("password");
    let firstName = form.get("firstName");
    let lastName = form.get("lastName");

    if (
        typeof action !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
    ) {
        return json({ error: 'Invalid Form Data', form: action }, { status: 400 });
    }

    if (action === "register" && (
        typeof firstName !== "string" ||
        typeof lastName !== "string"
    )) {
        return json({ error: 'Invalid Form Data', form: action }, { status: 400 });
    }

    const errors = {
        email: validateEmail(email),
        password: validatePassword(password),
        ... (action === 'register' ? {
            firstName: validateName(firstName as string || ''),
            lastName: validateName(lastName as string || ''),
        } : {})
    };

    if (Object.values(errors).some(Boolean))
        return json({ errors, fields: { email, password, firstName, lastName }, form: action }, { status: 400 });


    switch (action) {
        case "login":
            return await login({ email, password });
        case "register":
            firstName = firstName as string
            lastName = lastName as string
            return await register({ email, password, firstName, lastName });
        default:
            return json({ error: 'Invalid Form Data' }, { status: 400 });
    }
};

export default function Login() {
    const actionData = useActionData();
    const firstLoad = useRef(true);
    const [errors, setErrors] = useState(actionData?.errors || {});
    const [formError, setFormError] = useState(actionData?.error || '');
    const [action, setAction] = useState('login');
    const [formData, setFormData] = useState({
        email: actionData?.fields?.email || '',
        password: actionData?.fields?.password || '',
        firstName: actionData?.fields?.lastName || '',
        lastName: actionData?.fields?.firstName || '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({
            ...form,
            [field]: event.target.value
        }))
    };

    // Clear form fields if the form is changed
    useEffect(() => {
        if (!firstLoad.current) {
            const newState = {
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            }
            setErrors(newState)
            setFormError('')
            setFormData(newState)
        }
    }, [action]);

    useEffect(() => {
        if (!firstLoad.current) {
            setFormError('')
        }
    }, [formData]);

    // Don't reset errors on page load 
    useEffect(() => {
        firstLoad.current = false
    }, []);

    return <>
        <form method="post" className="login-form">
            <h2>{action === 'login' ? 'Login' : 'Register'}</h2>
            <div className="form-error-msg">
                {formError}
            </div>
            <FormField
                htmlFor="email"
                label="Email"
                placeholder="hello@example.com"
                value={formData.email}
                icon={faAt}
                onChange={e => handleInputChange(e, 'email')}
                error={errors?.email}
            />
            <FormField
                htmlFor="password"
                label="Password"
                type="password"
                placeholder=""
                value={formData.password}
                icon={faLock}
                onChange={e => handleInputChange(e, 'password')}
                error={errors?.password}
            />
            {
                action !== 'login' ? <>
                    <FormField
                        htmlFor="firstName"
                        label="First Name"
                        type="text"
                        placeholder=""
                        value={formData.firstName}
                        icon={faUser}
                        onChange={e => handleInputChange(e, 'firstName')}
                        error={errors?.firstName}
                    />
                    <FormField
                        htmlFor="lastName"
                        label="Last Name"
                        type="text"
                        placeholder=""
                        value={formData.lastName}
                        icon={faUser}
                        onChange={e => handleInputChange(e, 'lastName')}
                        error={errors?.lastName}
                    />
                </> : null
            }

            <button
                type="submit"
                className="accent-btn"
                name="_action"
                value={action}
            >
                {action === 'login' ? 'Login' : 'Register'}
            </button>

        </form>
        <button
            className="btnLink"
            onClick={() => setAction(action === 'login' ? 'register' : 'login')}
        >
            {action === 'login' ? 'Not Registered?' : 'Registered? Login'}
        </button>

    </>;
}