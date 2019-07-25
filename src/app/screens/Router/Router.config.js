// @flow

import ArticlesContainerScreen from "../ArticlesContainerScreen/ArticlesContainerScreen";
import ArticleDetailsScreen from "../ArticleDetailsScreen/ArticleDetailsScreen";
import { RouterParameters } from "../../utils/routerConst";
import { type MenuItemType } from "../../types/routerType";

/** Screen: Article Cards Container Screen */
const ARTICLES_CONTAINER: MenuItemType = {
  path: "/articles",
  component: ArticlesContainerScreen
};

/** Screen: Article Details Screen */
const ARTICLE_DETAILS: MenuItemType = {
  path: ARTICLES_CONTAINER.path + `/${RouterParameters.ARTICLE_ID}`,
  component: ArticleDetailsScreen
};

/** All paths */
export const ROUTES = { ARTICLES_CONTAINER, ARTICLE_DETAILS };
