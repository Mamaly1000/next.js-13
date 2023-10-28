import React from "react";

const SkeletonPostList = () => {
  return (
    <ul className="min-w-full flex flex-wrap items-start justify-start gap-2 p-2">
      {"123124423".split("").map((n) => {
        return (
          <li
            className="skeleton-loading min-w-full border-[1px] border-gray-100 rounded-lg px-3 drop-shadow-2xl py-5"
            key={n}
          ></li>
        );
      })}
    </ul>
  );
};

export default SkeletonPostList;
