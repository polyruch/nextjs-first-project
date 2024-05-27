import React from "react";
import prisma from "../lib/db";
import Link from "next/link";
import Form from "./form";
export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-5">
            <Link href={`/posts/${post.id}`} className="text-1xl font-bold">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
