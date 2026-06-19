export type CategoryType = {
  id: number;
  title: string;
  descriptions: string;
  created_at: string;
};

export type SendCategoryType = {
  title: string;
  descriptions: string;
  parent_id: string;
  is_active: boolean;
  show_in_menu: boolean;
  image?: File | null;
};
