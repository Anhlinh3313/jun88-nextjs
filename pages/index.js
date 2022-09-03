import Head from "next/head";
import HomeIndex from "../app/pages";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [chromeWidth, setChromeWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setChromeWidth(window.innerWidth);
    });
    import("bootstrap/dist/js/bootstrap");
  }, [typeof window !== "undefined" && window]);

  return (
    <div className="body">
      <Head>
        <title>jun88s</title>
        <meta
          name="description"
          content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nasm"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeIndex />
     {chromeWidth < 1005 ?
        <style>{`
          .body {
            height: 100%;
            background-image: url(https://jun88.vin/images/bg.jpg);
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            width: max-content;
          }
        `}</style>:
        <style>{`
          .body {
            height: 100%;
            background-image: url(https://jun88.vin/images/bg.jpg);
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
          }
        `}</style>
      } 
    </div>
  );
}
