import React from "react";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function PostData({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1 className="text-5xl text-center text-bold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </>
  );
}
