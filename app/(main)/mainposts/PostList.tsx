import { Suspense } from "react";
import SkeletonPostList from "./[post_slug]/SkeletonPostList";
import SkeletonPost from "./[post_slug]/SkeletonPost";

export type SinglePostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchPosts = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 100;
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  });
  const posts: SinglePostType[] = await res.json();
  const err = res.status;
  return {
    err,
    posts,
  };
};

const PostList = async () => {
  const { posts } = await fetchPosts();
  return (
    <Suspense fallback={<SkeletonPostList />}>
      <ul className="min-w-full flex flex-wrap items-start justify-start gap-2 p-2">
        {posts &&
          posts.length > 0 &&
          posts.map((post) => {
            return <SkeletonPost post={post} key={post.id} />;
          })}
      </ul>
    </Suspense>
  );
};

export default PostList;
