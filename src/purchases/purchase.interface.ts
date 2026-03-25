export interface Purchase {
  id: string;
  customerName: string;
  purchasesDate: string;
  items : PurchaseItem[];
  totalPrice : number;
}
export interface PurchaseItem {
    productID : number,
    quantity : number,
    price : number
}
