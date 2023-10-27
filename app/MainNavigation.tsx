import Link from "next/link";

const MainNavigation = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="min-w-full flex items-center justify-center gap-2 px-5 py-3 [&>li]:border-[1px] [&>li]:border-sky-800 [&>li]:p-2 [&>li]:rounded-lg ">
            <li>
              <Link href={"/"}>home</Link>
            </li>
            <li>
              <Link href={"/posts"}>posts</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;
