import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import blurCyanImage from "../public/blur-cyan.png";
import blurIndigoImage from "../public/blur-indigo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zhaomian Zhao</title>
        <meta name="description" content="Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link
            href="https://medium.com/@zhaomianzhao/the-business-of-experience-c1af1c20bc69"
            className={`underline font-extralight tracking-wide flex justify-center items-center gap-2 underline-offset-4 decoration-0 italic`}
          >
            &#8220; We all think time is all we have, whilst time is not
            represented in our memory.&#8221;
          </Link>

          <div>
            <h1
              className={`${styles.vercelogo} text-6xl tracking-tighter font-extralight`}
            >
              {" "}
              Zhaomian Zhao
            </h1>
          </div>
        </div>

        <div className="my-10">
          <p className="font-extralight leading-10 tracking-wider">
            I studied{" "}
            <Link
              className="underline underline-offset-4 decoration-1"
              href="https://www.must.edu.mo/en/fhtm"
            >
              hotel management in Macau
            </Link>
            , the Asia Las Vegas at the beginning. I hated casinmo mathematic at
            that time yet slowly realising the treasure they have gave me.
            <br />
            <br />
            First worked in Las Vegas Sands, Macau&lsquo;s first smart casino
            project, I worked with data scientists from Stanford, Monash, LSE to{" "}
            <Link
              href="https://www.thinkwithgoogle.com/intl/en-apac/future-of-marketing/creativity/sands-china-embraces-machine-learning-focus-high-value-consumers/"
              className="underline underline-offset-4 decoration-1"
            >
              convert high value customers using Tensorflow.
            </Link>
            <br />
            <br />
            <Link
              href="https://www.page.com/home-page"
              className="underline underline-offset-4 decoration-1"
            >
              Page group
            </Link>{" "}
            was where I hunted CMOs for Nike, Swaroski and alike, learnt sales
            and some fundamentals of recruiting.
          </p>
        </div>

        <div className={styles.grid}>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]"></div>
            <div className="relative">
              <Image
                className="absolute -top-64 -right-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 hover:inset-1 rounded-2xl bg-gradient-to-tr rotate-180 from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 hue-rotate-180 rotate-180 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
              <div className="relative  rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
                <div className="absolute -bottom-px rotate-180 left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0 " />
                <div className="pl-4 pt-4 hover:from-blue-400/30 hover:via-blue-600 hover:to-blue-400/60">
                  {" "}
                  <Link
                    href="https://medium.com/@zhaomianzhao"
                    className=""
                    target="_blank"
                    rel="Zhaomian Zhao Public Blog"
                  >
                    <h2 className={`${inter.className} font-bold text-lg mb-1`}>
                      Medium <span></span>
                    </h2>
                    <p
                      className={`${inter.className} font-sm  font-extralight`}
                    >
                      Blog about a bunch of random things related to my work and
                      sports. Marketing-ish.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
