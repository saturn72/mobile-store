import _ from "lodash";
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
    async add(path: string, data: any): Promise<any> {
        const collection = firebase.firestore().collection(path);
        const toAdd = _.toPlainObject(data);
        const added = await collection.add(toAdd);
        return added.id;
    },
}