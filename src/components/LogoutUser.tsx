"use client";

import { Button } from "@/components/ui/button";
import { logoutUser } from "@/lib/action/logout-user";
import { User } from "@/payload-types";
import { useRouter } from "next/navigation";

export const LogoutUser = ({ user }: { user: User }) => {
  const router = useRouter();

  return (
    <>
      <p>{user.email}</p>
      <Button
        onClick={async () => {
          await logoutUser();
          router.replace("/");
        }}
      >
        Log Out
      </Button>
    </>
  );
};
