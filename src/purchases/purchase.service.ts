import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
@Injectable()
export class PurchaseService {
  findAll() {
    const path = fs.readFileSync('data/purchases.json', 'utf8');
    const purchases = JSON.parse(path) as Purchase[];
    return purchases;
  }
  findOne(id: string) {
    const users = this.findAll();
    const user = users.find((u) => String(u.id) === id);

    if (!user) {
      return null;
    }

    return user;
  }
}
