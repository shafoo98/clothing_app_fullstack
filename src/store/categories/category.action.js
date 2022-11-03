import { createAction } from "../../utils/reducers/reducers.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEORIES, categoriesArray);
