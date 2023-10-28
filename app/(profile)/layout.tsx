import React, { ReactNode } from "react";
import PostList from "./posts/PostList";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-w-full max-h-screen min-h-screen grid grid-cols-12 grid-rows-6 gap-3">
      <section className="col-span-9 min-h-screen text-black  capitalize max-h-screen overflow-auto bg-gray-400 flex items-center justify-center">
        {children}
      </section>
      <section className="col-span-3  min-h-screen max-h-screen overflow-auto bg-gray-900 flex items-center justify-center">
        <PostList />
      </section>
    </div>
  );
};

export default Layout;
