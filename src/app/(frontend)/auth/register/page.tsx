import RegistrationForm from "@/components/RegistrationForm";
import { authorizeUser } from "@/lib/action/authorize-user";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await authorizeUser();
  if (user) {
    redirect("/");
  } else {
    return <RegistrationForm />;
  }
}
