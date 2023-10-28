import { ReactNode } from "react";
import PostList from "./mainposts/PostList";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 gap-2 grid-rows-6 p-4">
      <section className="col-span-3 min-h-screen row-span-full max-h-screen overflow-auto rounded-lg p-2 scroll-m-4 bg-gray-700">
        <PostList />
      </section>
      <section className="row-span-full  col-span-9 max-h-screen overflow-auto bg-gray-700 rounded-lg p-2  scroll-m-4 flex items-start justify-start py-3">
        {children}
      </section>
    </div>
  );
};

export default layout;
