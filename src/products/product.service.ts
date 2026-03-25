import { Injectable } from '@nestjs/common';
import { IProduct } from './product.interface';
import * as fs from 'fs';
@Injectable()
export class ProductService {
  findAll() {
    const path = fs.readFileSync('data/products.json', 'utf8');
    const product = JSON.parse(path) as IProduct[];
    return product;
  }
}
