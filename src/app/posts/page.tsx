import Link from "next/link";
import React, { Suspense } from "react";
import PostsList from "../../components/posts-list";

export default function Posts() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <Suspense fallback="...loading">
        <PostsList />
      </Suspense>
    </main>
  );
}
