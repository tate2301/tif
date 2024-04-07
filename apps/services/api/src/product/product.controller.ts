import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateProductInput } from './dto/create.input';
import { ProductService } from './product.service';
import { Product } from './models/product.entity';
import { RequestWithAuth } from 'src/common/types/user.type';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { UpdateProductInput } from './dto/update.input';
import { SecretKeyGuard } from 'src/auth/guard/api-key/secret.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProducts(@Req() req: RequestWithAuth): Promise<Product[]> {
    return this.productService.getProducts(req.user.id);
  }

  @UseGuards(SecretKeyGuard)
  @Get(':id')
  async getProduct(
    @Req() req: RequestWithAuth,
    @Param() id: string,
  ): Promise<Product> {
    return this.productService.getProduct(id, req.user.id);
  }

  @UseGuards(SecretKeyGuard)
  @Post()
  async createProduct(
    @Req() req: RequestWithAuth,
    @Body() body: CreateProductInput,
  ): Promise<Product> {
    return this.productService.createProduct(req.user.id, body);
  }

  @UseGuards(SecretKeyGuard)
  @Patch(':id')
  async updateProduct(
    @Req() req: RequestWithAuth,
    @Param() id: string,
    @Body() body: UpdateProductInput,
  ): Promise<Product> {
    return this.productService.updateProduct(id, req.user.id, body);
  }

  @UseGuards(SecretKeyGuard)
  @Delete(':id')
  async deleteProduct(
    @Req() req: RequestWithAuth,
    @Param() id: string,
  ): Promise<Product> {
    return this.productService.deleteProduct(id, req.user.id);
  }
}
