import React from "react";
import { PageProps } from "@/.next/types/app/posts/[post_slug]/page";
import { fetchSinglePost } from "@/common/posts/FetchSinglePost";

const SinglePost = async ({ params }: PageProps) => {
  const { postData } = await fetchSinglePost(params.post_slug);

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
