import styles from "@/pages/index.module.css";
//The ui library (Prime React) related style imports.
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Head from "next/head";
import { ConverterComponent } from "@/components/Converter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roman Numeral Calculator</title>
        <meta
          name="description"
          content="App for convert number into roman numeral."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <ConverterComponent />
        </div>
      </main>
    </>
  );
}
