import { Product } from "~/domain/models";

export default {
    actions: {
        incrementCartItem(ctx: any, product: Product) {
            ctx.commit("cart/incrementCartProduct", product)
        },
        decrementCartItem(ctx: any, product: Product) {
            ctx.commit("cart/decrementCartProduct", product)
        },
        setPhonePrefix(ctx: any, phonePrefix: String) {
            console.log("from index: " + phonePrefix);
            ctx.commit("cart/setPhonePrefix", phonePrefix)
        },
        setPhoneNumber(ctx: any, phoneNumber: String) {
            console.log("eeeeeeeeeeee");
            ctx.commit("cart/setPhoneNumber", phoneNumber)
        }
    }
};