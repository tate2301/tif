import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './models/product.entity';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create.input';
import { UpdateProductInput } from './dto/update.input';
import { generateUniqueId } from 'src/common/utils';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async getProducts(merchant_id: string): Promise<Product[]> {
    return this.productRepository.find({ where: { merchant_id } });
  }

  async getProduct(id: string, merchant_id: string): Promise<Product> {
    return this.productRepository.findOne({ where: { id, merchant_id } });
  }

  async createProduct(
    merchant_id: string,
    product: CreateProductInput,
  ): Promise<Product> {
    return this.productRepository.save({
      ...product,
      merchant_id,
      id: generateUniqueId(16, 'product_'),
    });
  }

  async updateProduct(
    id: string,
    merchant_id: string,
    product: UpdateProductInput,
  ): Promise<Product> {
    const _product = await this.productRepository.findOne({
      where: { id, merchant_id },
    });
    if (!_product) {
      throw new NotFoundException('Product not found');
    }

    await this.productRepository.update(id, product);
    return this.productRepository.findOne({ where: { id } });
  }

  async deleteProduct(id: string, merchant_id: string): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id, merchant_id },
    });
    if (!product) throw new NotFoundException('Product not found');
    await this.productRepository.delete(id);
    return product;
  }
}
