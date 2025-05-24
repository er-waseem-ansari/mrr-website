// services/productService.ts
import { prisma } from '@/lib/prisma';

export async function getAllProducts() {
  return await prisma.product.findMany();
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findUnique({
    where: { slug },
  });
}