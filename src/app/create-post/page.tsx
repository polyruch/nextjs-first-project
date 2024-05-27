import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Form from "@/components/form";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  // auth check
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  return (
    <>
      <main className="text-center pt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
        <Form />
      </main>
      <LogoutLink className="text-2xl mx-auto my-[400px]">Log out</LogoutLink>
    </>
  );
}
