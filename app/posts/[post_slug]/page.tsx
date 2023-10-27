import React from "react";
import { fetchSinglePost } from "@/common/posts/FetchSinglePost";
import { notFound } from "next/navigation";
import { SinglePostType } from "../PostList";

const SinglePost = async ({ params }: { params: any }) => {
  const { postData } = await fetchSinglePost(params.post_slug);
  if (!postData?.id) notFound();
  return (
    <div className="min-w-full flex flex-col items-start justify-start gap-3 p-6">
      <h1 className="font-bold capitalize ">{postData!.title}</h1>
      <p>{postData!.body}</p>
      <p>user id: {postData!.userId}</p>
      <p>post id: {postData!.id}</p>
    </div>
  );
};

export default SinglePost;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: SinglePostType[] = await res.json();

  return posts.slice(0, 10).map((post) => ({
    slug: String(post.id),
  }));
}
