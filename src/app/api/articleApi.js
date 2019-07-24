// @flow

import { api } from "../helpers/apiHelper";
import { Endpoints } from "../utils/apiConst";

/**
 * Get articles
 */
export const getArticles = (search: Object) => {
  const url = Endpoints.ARTICLES_SEARCH;

  return api
    .get(url, {
      params: {
        ...search
      }
    })
    .then(resp => resp.data.response);
};
