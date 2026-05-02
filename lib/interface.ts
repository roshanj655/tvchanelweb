export interface Channel {
  id: string;
  name: string;
  code: string;
  category: string;
  link: string;
  logo: string;
  status: string;
  created_date: string;
  updated_date: string;
  user_created: string;
  user_updated: string;
}

export interface Category {
  id: string;
  name: string;
  status: string;
}