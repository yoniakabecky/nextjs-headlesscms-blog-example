export interface INews {
  title: string;
  slug: string;
  sys: {
    publishedAt: string;
  };
  mainMedia?: {
    url: string;
  };
  body: {
    json: JSON;
  };
}
