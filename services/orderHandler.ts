import fb from '@/firebaseAdapter'
import { Cart, Order, OrderProcutRecord } from '~/domain/models';
import dateTimeUtil from '~/utilities/dateTimeUtil';

const cartToOrder = (cart: Cart): Order => {
    const prs: OrderProcutRecord[] = [];
    cart.cartItems.forEach(ci => prs.push({
        quantity: ci.quantity,
        productId: ci.product.id
    }));

    return {
        id: null,
        productRecords: prs,
        userId: "get current user from JWT",
        createdOnUtc: dateTimeUtil.currentUtc(),
        phonePrefix: cart.phonePrefix,
        phoneNumber: cart.phoneNumber,
        comment: cart.comment
    }
}
export default {
    placeOrder: async (cart: Cart): Promise<any> => {
        const order = cartToOrder(cart);
        const id = await fb.add('orders', order)
        console.log("this is the order id: " + id)
    }
};