import React, { Children } from "react";

export default function Container({ children }: { children: any }) {
  return (
    <div className="max-w-[1100px] mx-auto min-h-screen bg-white flex flex-col border-l border-r">
      {children}
    </div>
  );
}
