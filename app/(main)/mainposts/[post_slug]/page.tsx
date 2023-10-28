import React from "react";
import { notFound } from "next/navigation";
import { SinglePostType } from "../PostList";
import ClientComponent from "./ClientComponent";
import { Metadata } from "next";
export const dynamicParams = true;
const fetchSinglePost = async (id: string) => {
  if (+id > 0 && id) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { cache: "force-cache" }
    );
    const postData: SinglePostType = await res.json();
    const status = res.status;
    return {
      postData,
      status,
    };
  } else {
    return {
      postData: null,
      status: 500,
    };
  }
};
const SinglePost = async ({ params }: { params: any }) => {
  const { postData } = await fetchSinglePost(params.post_slug);
  if (!postData?.id) notFound();
  return (
    <div className="min-w-full flex flex-col items-start justify-start gap-3 p-6">
      <h1 className="font-bold capitalize ">{postData!.title}</h1>
      <p>{postData!.body}</p>
      <p>user id: {postData!.userId}</p>
      <p>post id: {postData!.id}</p>
      <ClientComponent />
    </div>
  );
};

export default SinglePost;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: SinglePostType[] = await res.json();

  return posts.slice(0, 3).map((post) => ({
    post_slug: String(post.id),
  }));
}
export async function generateMetadata({ params }: { params: any }) {
  const { postData } = await fetchSinglePost(params.post_slug);
  if (!postData?.id) notFound();
  return {
    title: postData.title,
    description: postData.body,
  };
}
