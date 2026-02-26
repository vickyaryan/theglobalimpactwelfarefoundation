import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | The Global Impact Welfare Foundation</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;