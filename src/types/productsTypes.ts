export type TProduct = {
  _id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  stock: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TTestimonial = {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
};

export type TBreadcrumbProps = {
  category: string;
  productName: string;
};

export type TProductQueryParams = {
  searchTerm?: string;
  categories?: string;
  page?: number;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  limit?: number;
};

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  image: string;
}
