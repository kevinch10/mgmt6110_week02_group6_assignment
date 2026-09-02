export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'men' | 'women' | 'kids' | 'unisex';
  subcategory: 'footwear' | 'clothing' | 'accessories';
  price: number;
  originalPrice?: number;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  description: string;
  features?: string[];
  sizes: string[];
  color: string;
  sku: string;
  rating?: number;
  reviewsCount?: number;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  content: string[];
  tags: string[];
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  hours: string;
  phone: string;
  mrt: string;
  features: string[];
}
