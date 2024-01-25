import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/layout"
import { requireUserId } from "~/utils/auth.server";
import { LoaderFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Propertise" },
    { name: "description", content: "Welcome to Propertise!" },
  ];
};

// if the user is not logged in this will redirect them to the login page
export const loader: LoaderFunction = async ({request}) => {
  await requireUserId(request);
  return null;
}


export default function Index() {
  return (
    <Layout>
      <h1>Propertise</h1>
    </Layout>
  );
}
