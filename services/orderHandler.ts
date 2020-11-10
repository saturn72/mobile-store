import firebase from '@/Firebase'
import { CartItem } from '~/domain/models';
import $store from '~/store'

export default {
    placeOrder: async (cartItems: CartItem[]): Promise<any> => {
        console.log("this is store:")
        console.log($store);
        console.log("this is cart ITems");
        console.log(cartItems);
        console.log("placeOrder2");
        console.log("placeOrder3");

        // const order = { name: "this is init order" };
        // const id = await firebase.add('orders', order)

    }
};