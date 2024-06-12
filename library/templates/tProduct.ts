import { iProduct } from "../contracts/cProduct";

export abstract class tProduct implements iProduct{

    public name: string = '';
    public price: number=0;
    public qty:number=0;
    public stock: boolean=false;
    public abstract total():number;
    public abstract print(): void;
}
