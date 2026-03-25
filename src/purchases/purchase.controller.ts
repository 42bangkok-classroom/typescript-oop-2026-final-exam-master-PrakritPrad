import { Body, Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('Purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  getProduct() {
    return this.purchaseService.findAll();
  }
}
