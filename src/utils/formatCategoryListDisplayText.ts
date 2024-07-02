import { formatArticleCategory } from "./formatArticleCategory";

export function formatCategoryListDisplayText(categoryList: string[]): string {
  let categoryDisplayText = "";
  for (let i = 0; i < categoryList.length; i++) {
    const currentCategory = categoryList[i];
    const shouldAddComma = i !== categoryList.length - 1;
    categoryDisplayText += formatArticleCategory(currentCategory);
    if (shouldAddComma) {
      categoryDisplayText += ", ";
    }
  }
  return categoryDisplayText;
}
