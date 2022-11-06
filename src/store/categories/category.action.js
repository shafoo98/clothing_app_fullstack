import { createAction } from "../../utils/reducers/reducers.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
