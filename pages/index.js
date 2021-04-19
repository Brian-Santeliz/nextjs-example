import styles from "../styles/Home.module.css";
import Link from "next/link";
import { persons } from "./data.json";
import Meta from "../components/Meta";
import useSWR from "swr";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);
  if (error) return <p>error...</p>;
  if (!data) return <p>loading data...</p>;
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <h1>Hello World</h1>
        <p className={styles.paragraph}>Mi firt paragraph in next</p>
        <Link href="/about">
          <a className={styles.linkStyle}>About</a>
        </Link>
      </div>
      <div>
        <h1>Post from API</h1>
        {data.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/post/${post.id}`}>
                <h2
                  className="post"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  {post.title}
                </h2>
              </Link>
            </div>
          );
        })}
        {persons.map((e) => {
          return (
            <ul key={e.name}>
              <li>
                <strong>name</strong>:{e.name}
              </li>
              <li>
                <strong>lastname</strong>:{e.lastname}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};
// export async function getStaticProps() {
//   const res = await fetch(url);
//   const data = await res.json();

//   if (!data) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { data },
//   };
// }
export default Home;
