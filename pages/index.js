import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import useSWR from "swr";
import base64 from "base-64";
import axios from "axios";
export default function Index({ event }) {
  // if (!course.data) return <h1>Loading...</h1>;
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        {event.map((d, i) => (
          <a
            key={i}
            className="block mb-3 ml-3"
            href={`posts/${d.webEvent.slug}`}
          >
            {d.webEvent.title}
          </a>
        ))}
        {/* <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
      </Layout>
    </>
  );
}
export async function getServerSideProps(context) {
  try {
    let fetch = await axios.get(
      `https://api.onegml.com/v1/event/intro/0/0/6/1`,
      {
        auth: {
          username: "onegmlapi",
          password: "O1n6e0G4M7L",
        },
        //   httpsAgent:agent
      }
    );

    return { props: { event: fetch.data } };
  } catch (error) {
    return { props: {} };
  }
}
export const fetcher = (url) =>
  fetch("https://api.onegml.com/v1" + url, {
    headers: new Headers({
      Authorization: `Basic ${base64.encode(`onegmlapi:O1n6e0G4M7L`)}`,
    }),
  }).then((r) => r.json());
