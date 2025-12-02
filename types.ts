export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  date: string;
  content: string;
}