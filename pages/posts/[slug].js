// import { useRouter } from "next/router";
// import ErrorPage from "next/error";
// import Container from "../../components/container";
// import PostBody from "../../components/post-body";
// import Header from "../../components/header";
import PostHeader from "../../components/post-header";
// import Layout from "../../components/layout";
// import { getPostBySlug, getAllPosts } from "../../lib/api";
// import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
// import markdownToHtml from "../../lib/markdownToHtml";
import axios from "axios";
export default function Post({ event }) {
  // const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    // <Layout preview={preview}>
    //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article className="mb-32">
    //           <Head>
    //             <title>
    //               {post.title} | Next.js Blog Example with {CMS_NAME}
    //             </title>
    //             <meta property="og:image" content={post.ogImage.url} />
    //           </Head>
    //           <PostHeader title={post.title} />
    //           body
    //         </article>
    //       </>
    //     )}
    //   </Container>
    // </Layout>
    <article className="mb-32">
      <Head>
        <title>
          {event.event.metaTitle} | Next.js Blog Example with {CMS_NAME}
        </title>
      </Head>
      <PostHeader title={event.event.metaTitle} />
      body
    </article>
  );
}
export async function getServerSideProps(context) {
  try {
    let fetch = await axios.get(
      `https://api.onegml.com/v1/event/slug/${context.query.slug}`,
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
// export async function getStaticProps({ params }) {
//   const post = getPostBySlug(params.slug, [
//     "title",
//     "date",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//   ]);
//   const content = await markdownToHtml(post.content || "");

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = getAllPosts(["slug"]);

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
