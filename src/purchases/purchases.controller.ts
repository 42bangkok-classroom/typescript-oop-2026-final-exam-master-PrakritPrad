import { Body, Controller, Get } from '@nestjs/common';
import { PurchasesService } from './purchases.service';

@Controller('Purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get()
  getProduct() {
    return this.purchasesService.findAll();
  }
}
