import { CartItem } from "@/domain/models";

export default {
    onCartChanged: (cartBefore: CartItem[], cartAfter: CartItem[]): void => {
        console.log("cart was changed!");
        console.log("From");
        console.log(cartBefore)
        console.log("TO");
        console.log(cartAfter)
    }
};