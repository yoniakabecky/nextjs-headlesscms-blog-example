export const getBlogPaths = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.X_API_KEY },
  };

  const data = await fetch("https://yoniakabecky.microcms.io/api/v1/blog", key);
  const { contents } = await data.json();

  return contents.map((content: any) => {
    return {
      params: {
        id: content.id,
      },
    };
  });
};

export const getBlogData = async (id: string | undefined) => {
  const key: any = {
    headers: { "X-API-KEY": process.env.X_API_KEY },
  };

  const data = await fetch(
    `https://yoniakabecky.microcms.io/api/v1/blog/${id}`,
    key
  );

  return await data.json();
};

export const getAllBlogData = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.X_API_KEY },
  };

  const data = await fetch("https://yoniakabecky.microcms.io/api/v1/blog", key);

  return await data.json();
};

export const getBlogTop = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.X_API_KEY },
  };

  const data = await fetch(
    "https://yoniakabecky.microcms.io/api/v1/blogs",
    key
  );

  return await data.json();
};
