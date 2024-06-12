import { product } from "./library/components/product";

// TV details
const tv = new product()
tv.print()

console.log("shoe details");
const shoe = new product();

shoe.name = 'nike 2.0 sneakers'
shoe.price=2300.00
shoe.qty=5;
shoe.print()
