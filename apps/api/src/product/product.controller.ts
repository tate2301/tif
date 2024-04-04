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
import { ApiKeyGuard } from 'src/auth/guard/apikey-auth.guard';
import { UpdateProductInput } from './dto/update.input';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProducts(@Req() req: RequestWithAuth): Promise<Product[]> {
    return this.productService.getProducts(req.user.id);
  }

  @UseGuards(ApiKeyGuard)
  @Get(':id')
  async getProduct(
    @Req() req: RequestWithAuth,
    @Param() id: string,
  ): Promise<Product> {
    return this.productService.getProduct(id, req.user.id);
  }

  @UseGuards(ApiKeyGuard)
  @Post()
  async createProduct(
    @Req() req: RequestWithAuth,
    @Body() body: CreateProductInput,
  ): Promise<Product> {
    return this.productService.createProduct(req.user.id, body);
  }

  @UseGuards(ApiKeyGuard)
  @Patch(':id')
  async updateProduct(
    @Req() req: RequestWithAuth,
    @Param() id: string,
    @Body() body: UpdateProductInput,
  ): Promise<Product> {
    return this.productService.updateProduct(id, req.user.id, body);
  }

  @UseGuards(ApiKeyGuard)
  @Delete(':id')
  async deleteProduct(
    @Req() req: RequestWithAuth,
    @Param() id: string,
  ): Promise<Product> {
    return this.productService.deleteProduct(id, req.user.id);
  }
}
