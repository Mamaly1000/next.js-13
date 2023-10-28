import React from "react";
import { CircleLoader } from "react-spinners";
const Loading = () => {
  return (
    <article className="min-w-full flex flex-col items-center justify-center min-h-[400px] gap-3">
      <CircleLoader
        loading={true}
        color="#36d7b7"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h3>please wait for your selected post to be load</h3>
    </article>
  );
};

export default Loading;
