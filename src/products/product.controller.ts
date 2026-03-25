import { Body, Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProduct() {
    return {
      success: true,
      data: this.productService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
