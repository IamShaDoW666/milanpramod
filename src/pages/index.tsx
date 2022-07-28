import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import type { NextPage } from "next";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Milan Pramod - Fullstack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <main></main>      
    </div>
  );
};

export default Home;
