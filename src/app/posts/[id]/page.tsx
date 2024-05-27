import PostData from "@/components/post-data";
import { Suspense } from "react";

export default async function Post({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(id);
  return (
    <main className="text-center px-7 pt-24">
      <Suspense fallback="Loading data..">
        <PostData id={params.id} />
      </Suspense>
    </main>
  );
}
