import { createPost } from "@/actions/actions";
import React from "react";

export default function Form() {
  return (
    <form
      action={createPost}
      className="h-10 space-x-2 mt-10 flex flex-col max-w-[400px] mx-auto gap-2"
    >
      <input
        type="text"
        className="ml-2 py-2 h-10 text-lg border-2 border-gray-200 rounded-sm pl-2 w-full"
        placeholder="Title for new post"
        name="title"
      />
      <textarea
        name="body"
        placeholder="body context for a new post"
        className="border rounded pl-2 w-full"
        rows={6}
        required
      ></textarea>
      <button className="text-white bg-blue-500 px-3 py-2 rounded-lg mt-2 ml-4">
        Submit
      </button>
    </form>
  );
}
