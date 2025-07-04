export interface ProductWithVariant {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  stock: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  description: string;
  created: string;
  selectedAttributes?: {
    [key: string]: string;
  };
}
