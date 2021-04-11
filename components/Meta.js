import Head from 'next/head';

const Meta = ({ description, keywords, title }) => {
  return (
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  description: 'Webstite example using Next JS Framework',
  title: 'Next Example',
  keywords: 'Next, Javacript, React',
};
export default Meta;
