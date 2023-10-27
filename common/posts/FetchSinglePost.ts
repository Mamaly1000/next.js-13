import { SinglePostType } from "@/app/posts/PostList";

export const fetchSinglePost = async (id: string) => {
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
