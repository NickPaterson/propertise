import { LoaderFunction, json } from "@remix-run/node";
import { requireUserId, getUser } from "~/utils/auth.server";
import { UserInfo } from "~/components/user-info";
import { useLoaderData } from "@remix-run/react";

// User must be logged in to access this route
export const loader: LoaderFunction = async ({ request }) => {
    await requireUserId(request);
    const user = await getUser(request);
    return json({ user });
}

export default function Dashboard() {
    const { user } = useLoaderData<typeof loader>();
    return <>

        <UserInfo profile={user.profile} />
        <form method="post" action="/logout">
            <button 
                className="btn btn-accent"
                type="submit"
            >Logout</button>
        </form>
    </>;
}
