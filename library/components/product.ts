import { tProduct } from "../templates/tProduct";

export class product extends tProduct{

    public name: string = 'samsung';
    public price: number=32000.33;
    public qty: number=2;
    public stock: boolean=true;
    
    public total(): number {
        return this.price*this.qty;
    }
    public print(): void {
        console.log(`name: ${this.name} price: ${this.price} stock: ${this.stock} total: ${this.total()}`)    
    }
}