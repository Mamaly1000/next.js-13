import localFont from "next/font/local";
const Playpen = localFont({
  src: [
    {
      path: "./static/PlaypenSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "./static/PlaypenSans-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./static/PlaypenSans-Light.ttf",
      weight: "300",
    },
    {
      path: "./static/PlaypenSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "./static/PlaypenSans-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "./static/PlaypenSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "./static/PlaypenSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./static/PlaypenSans-Thin.ttf",
      weight: "100",
    },
  ],
  style: "normal",
});
export default Playpen;
