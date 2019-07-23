// @flow

import ArticlesContainerScreen from "../ArticleCardsContainerScreen/ArticleCardsContainerScreen";
import ArticleDetailsScreen from "../ArticleDetailsScreen/ArticleDetailsScreen";
import NotFoundScreen from "../NotFoundScreen/NotFoundScreen";
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

/** Screen: Not Found Screen */
const NOT_FOUND: MenuItemType = {
  path: "/not-found",
  component: NotFoundScreen
};

/** All paths */
export const ROUTES = { ARTICLES_CONTAINER, ARTICLE_DETAILS, NOT_FOUND };
