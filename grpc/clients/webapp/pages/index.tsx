import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import { GetCommentsRequest } from '../src/proto/service_pb';
import { liveCommentsClient } from '../src/proto/ServiceServiceClientPb';

const client = new liveCommentsClient('http://localhost:9901');

const Home: NextPage = () => {
  const [threadId, SetThreadId] = useState()
  const [message, SetMessage] = useState()
  const getStats = () => {
    // Create our EmptyRequest that we will use to start the stream;
    const request = new GetCommentsRequest();
    // Dont worry about the empty Metadata for now, thats covered in another article :)
    var stream = client.getComments(request, {});
    // Start listening on the data event, this is the event that is used to notify that new data arrives
    stream.on('data', function (response) {
      // Convert Response to Object
      var stats = response.toObject();
      // Set our variable values
      // @ts-ignore
      SetThreadId(stats.threadId);
      // @ts-ignore
      SetMessage(stats.message);
    });
  }
  // useEffect will make this trigger on component start
  useEffect(() => {
    getStats();
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>{threadId} &rarr;</h2>
            <p>{message}</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
