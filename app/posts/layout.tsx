import { ReactNode } from "react";
import PostList from "./PostList";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 gap-2 grid-rows-6">
      <section className="col-span-3 min-h-screen row-span-full max-h-screen overflow-auto bg-blue-700">
        <PostList />
      </section>
      <section className="row-span-full  col-span-9 max-h-screen overflow-auto bg-sky-700  flex items-start justify-start py-3">
        {children}
      </section>
    </div>
  );
};

export default layout;
