export interface AddCategoriesType {
  id?: string;
  title: string;
  description: string;
  icon?: string;
  userId: string;
  createdAt: string;
}

export interface CategoriesItemType extends AddCategoriesType {
  id: string;
  icon: string;

}
