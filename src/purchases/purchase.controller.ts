import { Controller, Get, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  getProduct() {
    return {
      success: true,
      data: this.purchaseService.findAll(),
      message: 'Fetched purchases successfully',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (this.purchaseService.findOne(id)) {
      return {
        success: true,
        data: this.purchaseService.findOne(id),
        message: 'Fetched purchases successfully',
      };
    } else {
      return {
        success: false,
        data: null,
        message: `Purchase with id ${id} not found`,
      };
    }
  }
}
