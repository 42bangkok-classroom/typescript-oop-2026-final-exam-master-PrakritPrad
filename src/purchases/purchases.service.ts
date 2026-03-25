import { Injectable } from '@nestjs/common';
import { Purchase } from './purchases.interface';
import * as fs from 'fs';
@Injectable()
export class PurchasesService {
  findAll() {
    const path = fs.readFileSync('data/purchases.json', 'utf8');
    const purchases = JSON.parse(path) as Purchase[];
    return {
      success: true,
      data: purchases,
      message: 'Fetched purchases successfully',
    };
  }
}
