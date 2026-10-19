import { apiFetch } from "./client";
import type { ProductResponseDto, ProductRequestDto } from "../types/product";

export function getProducts() {
  return apiFetch<ProductResponseDto[]>("/api/products");
}

export function getProductBySlug(slug: string) {
  return apiFetch<ProductResponseDto>(`/api/products/${slug}`);
}

export function createProduct(data: ProductRequestDto) {
  return apiFetch<ProductResponseDto>("/api/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
}