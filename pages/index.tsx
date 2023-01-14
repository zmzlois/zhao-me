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
            className={`text-sm font-extralight tracking-wide flex justify-center items-center `}
          >
            <p className="underline-offset-4 decoration-0 italic underline ml-2">
              &#8220; We all think time is all we have, whilst time is not
              represented in our memory.&#8221; <br />
            </p>
          </Link>

          <div>
            <h1
              className={`${styles.vercelogo} md:m-10 w-auto md:text-6xl text-3xl tracking-tighter font-extralight`}
            >
              {" "}
              Zhaomian Zhao
            </h1>
          </div>
        </div>

        <div className="my-10 ">
          <p className="font-extralight leading-10 tracking-wider">
            I studied{" "}
            <Link
              className="underline underline-offset-4 decoration-1"
              href="https://www.must.edu.mo/en/fhtm"
            >
              hotel management in Macau
            </Link>
            , the Asia Las Vegas at the beginning. I hated casino mathematic at
            that time yet slowly realising the treasure it had given me.
            &quot;Study&quot; to be a waitress was cool.
            <br />
            <br />
            First worked in Sheraton China as a housekeeper cleaning toilets,
            then as a waitress in a French restaurant. I soon entered Las Vegas
            Sands to build Macau&lsquo;s first smart casino project, which I
            assisted data scientists from Stanford, Monash, LSE to{" "}
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
            , writing hospitality industry publications covering China and US
            market for Chinese government and state-own companies, I worked in{" "}
            <Link
              href="https://www.page.com/home-page"
              className="underline underline-offset-4 decoration-1"
            >
              Page group
            </Link>{" "}
            , learnt sales and fundamentals of recruiting by headhunting
            high-level executives for Nike, Swaroski and many other
            companies&apos; operations in China. Later on I joined{" "}
            <Link
              href="https://www.knightfrank.com.cn/en/about-us"
              className="underline underline-offset-4 decoration-1"
            >
              Knight Frank South China Office
            </Link>{" "}
            as the 6th employee, given the responsibility to handle office
            transactions and commercial real estate. Because I hadn&apos;t
            graduated at that time, they kindly called me &quot;Head of
            Intern&quot;, due to all my effort in recruiting, training and
            supporting new recruits.
            <br />
            <br />I was fortunate to study Python and a light chunk of ML to
            build financial portfolio when I was studying behavioural finance in{" "}
            <Link
              href="https://www.henley.ac.uk/"
              className="underline underline-offset-4 decoration-1"
            >
              Henley Business School
            </Link>
            . Other than those, I learnt everything else on my own.
            <br />
            <br />
            At the moment, I am building{" "}
            <Link
              href="https://projectwaitless.io"
              className="underline underline-offset-4 decoration-1"
            >
              Project Waitless
            </Link>{" "}
            for nightclubs to optimise their operations. I am the technical
            author of the first book written for ChatGPT with specific use case,{" "}
            <Link
              href="https://prompt.mba"
              className="underline underline-offset-4 decoration-1"
            >
              Prompt
            </Link>
            , with two ex-vice presidents from BBC. Within this book, my work
            was around visualising word embedding methods, tokenising, attention
            mechanism and transformer architecture. I am also the core team of
            an open source project{" "}
            <Link
              href="https://zenstack.dev"
              className="underline underline-offset-4 decoration-1"
            >
              ZenStack.dev
            </Link>
            , acting a product manager and helping the project finding its own
            product market fit.
            <br />
            <br />
            Before building Project Waitless, I started two companies with my
            friends, a digital marketing brand for french premium liquors and a
            urban planning consultancy deliver smart city solutions for Chinese
            municipal government.
            <br />
            <br />
            In my free time, I enjoy doing crossfit with my friends, reading
            random things and writing. You can find my blog below.
            <br />
            <br />
            My friends would describe me: The 45 years old living in a 26 years
            old&lsquo; body. I think it might be true.
          </p>
        </div>

        <div className={styles.grid}>
          <div className="w-full flex content-center justify-center items-center">
            <Card
              href="https://medium.com/@zhaomianzhao"
              title="Medium"
              description=""
              rel="Zhaomian Zhao Personal Blog"
            />

            <Card
              href="https://twitter.com/LoisZhao01"
              title="Twitter"
              description=""
              rel="Zhaomian Zhao's Twitter"
            />
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
      <Link
        href={href}
        className={`${styles.card} relative`}
        target="_blank"
        rel={rel}
      >
        <h2
          className={`self-center justify-self-center font-bold md:text-lg underline underline-offset-4 mb-1 tracking-wider `}
        >
          {title}
        </h2>
        <p className={`justify-self-center font-sm  font-extralight`}>
          {description}
        </p>
      </Link>
    </>
  );
};
