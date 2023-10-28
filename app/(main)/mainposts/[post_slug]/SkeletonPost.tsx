import React, { Suspense } from "react";
import { SinglePostType } from "../PostList";
import Link from "next/link";

const SkeletonPost = ({ post }: { post: SinglePostType }) => {
  return (
    <Suspense
      fallback={
        <li className="skeleton-loading border-[1px] border-gray-100 rounded-lg px-3 drop-shadow-2xl py-5"></li>
      }
    >
      <li className="min-w-full border-[1px] border-gray-100 rounded-lg px-3 drop-shadow-2xl py-5">
        <article className="min-w-full min-h-full   flex items-start justify-between gap-3  flex-col">
          <h2 className="font-bold capitalize">{post.title}</h2>
          <p>{post.body}</p>
          <p>
            <Link
              className="px-3 py-2 rounded-lg bg-gray-900 text-white capitalize hover:scale-105  "
              href={`/mainposts/${post.id}`}
            >
              view details
            </Link>
          </p>
        </article>
      </li>
    </Suspense>
  );
};

export default SkeletonPost;
