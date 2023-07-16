import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import styles from "./Header.module.css"
export default function Header(){
    return (
        <header className="font-zpix bg-headerColor text-white">
            <Head>
                <title>Mdmoji</title>
                <meta name="description" content="This is my Mdmoji Page" />
            </Head>
            <div className="fixed right-0">
                <button aria-label="Open navigation menu" className="p-3">
                    <svg className={"text-btnColor"}  xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor">
                        <path  d="M6 12H42V16.032H6V12ZM6 25.968V22.03H42V25.968H6ZM6 36V31.968H42V36H6Z"></path>
                    </svg>
                </button>
            </div >
            <div  className="text-center px-4 py-24 flex justify-center items-center flex-col">
                <Image src="../images/Logo.svg"   alt="SVG Image"  width={510} height={300}/>
                <p className="font-zpix text-4xl py-10">为你的markdown笔记添加更加丰富的表情吧</p>
                <div>
                    <Link className={styles.button} href="https://github.com/">
                        GitHub
                    </Link>
                    <Link className={styles.button} href="https://www.bibooo.cn/">
                        Blog
                    </Link>
                </div>
            </div>

        </header>
    )
}