"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  // export async function deletePost({ id }: { id: string }) {
  //   await prisma.post.delete({
  //     where: {
  //       id: parseInt(id),
  //     },
  //   });

  // revalidate
  revalidatePath("/posts");
}
