import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
const About = () => {
  return (
    <>
      <Meta
        title="About page | Next Example"
        description="This is About page using router of Next"
        keywords="About, Next, Router"
      />
      <h1>Hello from About Page</h1>
      <Link href="/">
        <a className={styles.linkStyle}>Inicio</a>
      </Link>
    </>
  );
};

export default About;
