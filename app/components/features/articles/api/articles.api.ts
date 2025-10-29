import type { ArticleResponse } from '../model/types';

export function articlesAPI(appFetch: typeof $fetch) {
  return {
    getOne(slug: string) {
      return appFetch<ArticleResponse>(`/page/${slug}`);
    },
    getListByCategory(cat: string) {
      return appFetch<ArticleResponse>(`/page/categories/${cat}`);
    },
  };
}
