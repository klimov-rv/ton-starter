export type ArticleResponse = Article[];
export interface Article {
  id: number;
  name: string;
  content: string;
  categories: string;
  order: any;
  slug: string;
  image: any;
  file: any;
}

export type ArticleCategories = ArticleCategory[];

export type ArticleCategory = 'know' | 'support' | 'footer';
