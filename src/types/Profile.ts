export type ProfileType = {
  id: number;
  created_at: string;
  phone: number;
  roles: {
    id: number;
    created_at: string;
    deleted_at: string | null;
    description: string;
    title: string;
    is_active: number;
  }[];
};