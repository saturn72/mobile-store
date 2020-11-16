import fb from '@/firebaseAdapter'
import { Cart, Order, OrderProcutRecord } from '~/domain/models';
import dateTimeUtil from '~/utilities/dateTimeUtil';

const orderToMessageText = (order: Order): string => `Hi,\nRegard my order: ${order.link ?? ''}`;
const cartToOrder = (cart: Cart): Order => {
    const prs: OrderProcutRecord[] = [];
    cart.cartItems.forEach(ci => prs.push({
        quantity: ci.quantity,
        product: ci.product
    }));

    return {
        id: null,
        productRecords: prs,
        userId: "get current user from JWT",
        createdOnUtc: dateTimeUtil.currentUtc(),
        phonePrefix: cart.phonePrefix,
        phoneNumber: cart.phoneNumber,
        comment: cart.comment,
        link: null
    }
}
export default {
    orderToWhatsappText: (order: Order): string => {
        const txt = orderToMessageText(order);
        return encodeURIComponent(txt);
    },
    placeOrder: async (cart: Cart): Promise<any> => {
        const order = cartToOrder(cart);
        order.id = await fb.add('orders', order)
        return order;
    }
};
