// @flow

import { api } from "../helpers/apiHelper";
import { Endpoints } from "../utils/apiConst";
import { API_KEY } from "../utils/const";
import { SortType } from "../utils/sortConst";

export type ArticlePayload = {
  page: number,
  sort: $Values<typeof SortType>,
  q: string
};

/**
 * Get articles
 */
export const getArticles = (search: ArticlePayload) => {
  const url = Endpoints.ARTICLES_SEARCH;

  if (search.q === "") delete search["q"];

  return api
    .get(url, {
      params: {
        ...search,
        "api-key": API_KEY
      }
    })
    .then(resp => resp.data.response);
};
