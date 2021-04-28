const GRAPHQL_QUERY = `
title
slug
mainMedia {
  url
}
body {
  json
}
sys {
  publishedAt
}
`;

export const callContentful = async (query: any) => {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const fetchOption = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOption);

    return await data.json();
  } catch (error) {
    throw new Error("Could not fetch data from Contentful");
  }
};

export const getFirstTenNews = async () => {
  const query = `{
    newsCollection(limit: 10) {
      total
      items {
        ${GRAPHQL_QUERY}
      }    	
    }
  }`;

  const response = await callContentful(query);

  return response.data?.newsCollection?.items;
};

export const getSlugs = async () => {
  const query = `{
    newsCollection(where: {slug_exists: true }) {
      items {
        slug
      }    	
    }
  }`;

  const response = await callContentful(query);

  return response.data?.newsCollection?.items;
};

export const getNewsPost = async (slug: string) => {
  const query = `{
    newsCollection(where: {slug: "${slug}"}) {
      items {
        ${GRAPHQL_QUERY}  
      }
    }
  }`;

  const response = await callContentful(query);

  return response.data?.newsCollection?.items;
};
