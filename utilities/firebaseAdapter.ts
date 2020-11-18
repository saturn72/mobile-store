import _ from "lodash";

import firebase from 'firebase';
import 'firebase/firestore';

export default {
    async add(path: string, data: any): Promise<any> {
        const db = firebase.firestore()
        const collection = db.collection(path);
        const toAdd = _.toPlainObject(data);
        const added = await collection.add(toAdd);
        return added.id;
    },
    async signout() {
        await firebase.auth().signOut();
    }
}