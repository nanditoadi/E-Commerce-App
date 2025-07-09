import { LogoutUser } from "@/components/LogoutUser";
import { authorizeUser } from "@/lib/action/authorize-user";
import { redirect } from "next/navigation";
export default async function HomePage() {
  const user = await authorizeUser();

  if (user) {
    return (
      <div className="flex flex-col gap-1">
        <p>Home</p>
        {user && <LogoutUser user={user} />}
      </div>
    );
  } else {
    redirect("/auth/login");
  }
}
