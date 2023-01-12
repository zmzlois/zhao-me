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
            className={`md:text-md text-sm underline font-extralight tracking-wide flex justify-center items-center gap-2 underline-offset-4 decoration-0 italic`}
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
            , the Asia Las Vegas at the beginning. I hated casino mathematic at
            that time yet slowly realising the treasure they had given me.
            <br />
            <br />
            First worked in Las Vegas Sands, Macau&lsquo;s first smart casino
            project, I assisted data scientists from Stanford, Monash, LSE to{" "}
            <Link
              href="https://www.thinkwithgoogle.com/intl/en-apac/future-of-marketing/creativity/sands-china-embraces-machine-learning-focus-high-value-consumers/"
              className="underline underline-offset-4 decoration-1"
            >
              convert high-value customers using Tensorflow.
            </Link>
            <br />
            <br />
            Prior to my work in{" "}
            <Link
              href="https://www.hvs.com/"
              className="underline underline-offset-4 decoration-1"
            >
              HVS China
            </Link>{" "}
            to write hospitality industry publications covering China and US
            market for Chinese government and state-own companies, I worked in{" "}
            <Link
              href="https://www.page.com/home-page"
              className="underline underline-offset-4 decoration-1"
            >
              Page group
            </Link>{" "}
            , learnt sales and fundamentals of recruiting by headhunting CMOs
            for Nike, Swaroski and many other companies' operation in China.
            Later on I joined{" "}
            <Link
              href="https://www.knightfrank.com.cn/en/about-us"
              className="underline underline-offset-4 decoration-1"
            >
              Knight Frank South China Office
            </Link>{" "}
            as the 6th employee, given the responsibility to handle office
            transactions and commercial real estate. Because I hadn't graduated
            at that time, they called me "Head of Intern".
            <br />
            <br />I was fortunate to study Python and a light chunk of ML for
            building financial portfolio in{" "}
            <Link
              href="https://www.henley.ac.uk/"
              className="underline underline-offset-4 decoration-1"
            >
              Henley Business School
            </Link>
            . Other than those, I learnt everything else on my own.
          </p>
        </div>

        <div className={styles.grid}>
          <div className="relative ">
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
            </div>
          </div>
          <div className="md:flex flex-auto">
            <div className="m-5">
              <Card
                href="https://www.linkedin.com/in/loiszhao/"
                title="LinkedIn"
                description=""
                rel=""
              />
            </div>
            <div className="m-5">
              <Card
                href="https://medium.com/@zhaomianzhao"
                title="Medium"
                description=""
                rel="Zhaomian Zhao Personal Blog"
              />
            </div>
            <div className="m-5">
              <Card
                href="https://twitter.com/LoisZhao01"
                title="Twitter"
                description=""
                rel="Zhaomian Zhao's Twitter"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const Card = ({
  title,
  description,
  href,
  rel,
}: {
  title: string;
  description: string;
  href: string;
  rel: string;
}) => {
  return (
    <>
      <div className="w-full border-2 border-cyan-600/30 rounded-lg hover:shadow-md hover:shadow-sky-400/40">
        <div className="p-2 md:p-4 hover:from-blue-400/30 hover:via-blue-600 hover:to-blue-400/60">
          {" "}
          <Link href={href} className="" target="_blank" rel={rel}>
            <h2
              className={`self-center justify-self-center font-bold text-lg mb-1`}
            >
              {title} <span></span>
            </h2>
            <p className={`justify-self-center font-sm  font-extralight`}>
              {description}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
