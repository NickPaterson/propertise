import { Layout } from "~/components/layout"
import { FormField } from "~/components/form-field"
import { faAt, faLock } from "@fortawesome/pro-regular-svg-icons"
import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData( form => ({
            ...form, 
            [field]: event.target.value
        }))
    }

    return (
        <Layout>
            <h2>Login</h2>
            {
                JSON.stringify(formData)
            }

            <form className="login-form">
                <FormField 
                    htmlFor="email"
                    label="Email"
                    value={formData.email}
                    icon={faAt}
                    onChange={e => handleInputChange(e, 'email')}
                />
                <FormField 
                    htmlFor="password"
                    label="Password"
                    type="password"
                    value={formData.password}
                    icon={faLock}
                    onChange={e => handleInputChange(e, 'password')}
                />

            

                <button type="submit">
                    Login
                </button>
            </form>
        </Layout>
    );
}