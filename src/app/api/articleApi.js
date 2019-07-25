// @flow

import { api } from "../helpers/apiHelper";
import { Endpoints } from "../utils/apiConst";
import { API_KEY } from "../utils/const";

/**
 * Get articles
 */
export const getArticles = (search: Object) => {
  const url = Endpoints.ARTICLES_SEARCH;

  return api
    .get(url, {
      params: {
        ...search,
        "api-key": API_KEY
      }
    })
    .then(resp => resp.data.response);
};
