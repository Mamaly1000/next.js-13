import Link from "next/link";

export type SinglePostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
    <ul className="min-w-full flex flex-wrap items-start justify-start gap-2 p-2">
      {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <li
              className="min-w-full border-[1px] border-orange-500 rounded-lg px-3 drop-shadow-2xl py-5"
              key={post.id}
            >
              <article className="min-w-full min-h-full   flex items-start justify-between gap-3  flex-col">
                <h2 className="font-bold capitalize">{post.title}</h2>
                <p>{post.body}</p>
                <p>
                  <Link
                    className="px-3 py-2 rounded-lg bg-blue-900 text-white capitalize hover:scale-105  "
                    href={`/mainposts/${post.id}`}
                  >
                    view details
                  </Link>
                </p>
              </article>
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;
