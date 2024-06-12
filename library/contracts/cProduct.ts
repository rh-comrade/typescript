export interface iProduct {
    name:string;
    price:number;
    qty:number;
    stock:boolean;
    total():number;
    print():void;
}