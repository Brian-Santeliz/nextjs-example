// import { useRouter } from "next/router";
// import useSWR from "swr";
import Meta from "../../components/Meta";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const url = `https://jsonplaceholder.typicode.com/posts/`;
const postDetails = ({ data }) => {
  //   const { query } = useRouter();
  //   const fetcher = (...args) => fetch(...args).then((res) => res.json());
  //   const { data, error } = useSWR(`${url}/${query.id}`, fetcher);
  //   if (!data) return <p>Loading...</p>;
  //   if (error) return <p>error...</p>;
  const { title, body, userId } = data;
  return (
    <>
      <Meta title={`Post details | ${title}`} />
      <section>
        <h1>Title: {title}</h1>
        <h3>By userId: {userId}</h3>
        <p>Body: {body}</p>
      </section>
      <Link href="/">
        <a className={styles.linkStyle}>Go back</a>
      </Link>
    </>
  );
};
export async function getServerSideProps(context) {
  const res = await fetch(`${url}/${context.query.id}`);
  const data = await res.json();
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { data },
  };
}
export default postDetails;
