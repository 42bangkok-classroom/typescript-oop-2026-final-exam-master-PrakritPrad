
import { Injectable, NotFoundException } from "@nestjs/common";
import { IProduct } from "./product.interface";
import * as fs from "fs";
@Injectable()
export class ProductService {
    findAll() {
        const data = fs.readFileSync("data/missions.json", "utf8");
        const missions = JSON.parse(data) as IProduct[];
        return {
            success: true,
            data: missions,
            message: 'Fetched products successfully',
          };
      }
}
