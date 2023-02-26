import styles from "@/pages/index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roman Numeral Calculator`</title>
        <meta
          name="description"
          content="App for convert number into roman numeral."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        
      </main>
    </>
  );
}
