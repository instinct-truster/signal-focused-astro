export function formatArticleCategory(category: string): string {
  return category in categoryMap ? categoryMap[category] : category;
}

const categoryMap: Record<string, string> = {
  football: "Fantasy Football",
  gaming: "Gaming",
};
