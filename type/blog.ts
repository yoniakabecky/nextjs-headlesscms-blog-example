export interface IBlog {
  id: string;
  title: string;
  image: IBlogImage;
  body?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface IBlogImage {
  width: number;
  height: number;
  url: string;
}

export interface IBlogTop {
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
