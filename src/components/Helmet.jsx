import React from 'react';
import { Helmet } from 'react-helmet';
const image =
  'https://i.pinimg.com/564x/0f/99/ca/0f99ca1bbb8b793446a81ce5b1920e76.jpg';

const MetaHead = ({ title, description, url }) => (
  <Helmet>
    <title>{`${title} - Anda Shop`}</title>
    <meta name="description" content={description} />
    <meta
      name="robots"
      content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <link rel="canonical" href={url} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={`${title} - Anda Shop `} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="Anda Shop" />
    <meta property="og:image" content={image} />
    <meta property="og:image:secure_url" content={image} />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="720" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:site"
      content="@SSYBuitrago
"
    />
    <meta
      name="twitter:creator"
      content="@SSYBuitrago
"
    />
    <meta name="twitter:title" content={`${title} - Anda Shop `} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default MetaHead;
