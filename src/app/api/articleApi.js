// @flow

import { api } from "../helpers/apiHelper";
import { Endpoints } from "../utils/apiConst";

/**
 * Get articles
 */
export const getArticles = (search: Object) => {
  const url = Endpoints.ARTICLES_SEARCH;
  //TODO:: Move key to env
  return api
    .get(url, {
      params: {
        ...search,
        "api-key": "16fI9yvA6UWGIfq4gzAyDSS36XSOIuGA"
      }
    })
    .then(resp => resp.data.response);
};
