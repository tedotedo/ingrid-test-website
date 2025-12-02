import { Project, NavItem, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Profile', href: '#profile' },
  { label: 'News', href: '#news' },
  { label: 'Sculpture', href: '#sculpture' },
  { label: 'Painting', href: '#painting' },
  { label: 'Archive', href: '#archive' },
  { label: 'Contact', href: '#contact' },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: '2023.1.10',
    content: '展覧会のお知らせを追加しました。',
  },
  {
    date: '2022.8.26',
    content: 'Sculpture に新しい作品を載せました。',
  },
  {
    date: '2022.8.24',
    content: 'Sculpture に新しい作品を載せました。',
  },
  {
    date: '2022.8.18',
    content: 'Ekaruta に新しい作品を載せました。',
  },
  {
    date: '2022.1.5',
    content: '明けましておめでとうございます。本年もよろしくお願いいたします。',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Elephant & Bear',
    category: 'Sculpture',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1554188248-986adbb73be0?q=80&w=2070&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: '2',
    title: 'Wooden Form',
    category: 'Sculpture',
    year: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1549813069-f95e44d7f498?q=80&w=2070&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: '3',
    title: 'Abstract Paint',
    category: 'Painting',
    year: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1972&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: '4',
    title: 'Bronze Cast',
    category: 'Sculpture',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2018&auto=format&fit=crop',
    size: 'small',
  },
];