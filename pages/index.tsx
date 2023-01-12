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
            that time yet slowly realising the treasure it had given me.
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
            , writing hospitality industry publications covering China and US
            market for Chinese government and state-own companies, I worked in{" "}
            <Link
              href="https://www.page.com/home-page"
              className="underline underline-offset-4 decoration-1"
            >
              Page group
            </Link>{" "}
            , learnt sales and fundamentals of recruiting by headhunting CMOs
            for Nike, Swaroski and many other companies&apos; operations in
            China. Later on I joined{" "}
            <Link
              href="https://www.knightfrank.com.cn/en/about-us"
              className="underline underline-offset-4 decoration-1"
            >
              Knight Frank South China Office
            </Link>{" "}
            as the 6th employee, given the responsibility to handle office
            transactions and commercial real estate. Because I hadn&apos;t
            graduated at that time, they called me &quot;Head of Intern&quot;.
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
            , with my friends. My work was around visualising word embedding
            methods, tokenising, attention mechanism and transformer
            architecture. I am also the core team of{" "}
            <Link
              href="https://zenstack.dev"
              className="underline underline-offset-4 decoration-1"
            >
              ZenStack.dev
            </Link>
            .
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
            My friends would describe me: The 45 years old live in a 26 years
            old body. I think it might be true.
          </p>
        </div>

        <div className={styles.grid}>
          <div className=" ">
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
          <div className="flex content-center">
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
          className={`self-center justify-self-center font-bold text-lg mb-1 tracking-wider underline-offset-4 underline`}
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
