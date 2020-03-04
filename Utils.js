import {useDispatch} from 'react-redux'
import {db} from './config'
import { DB_REF } from './constants/todoConstants';
import { updateStoreWithFirbaseData, updateChangedValue } from './actions/Action'

const mapChildValuesToDataValues = (data) => {
    let temp = {
        'id' : data[1],
        'completed' : data[0],
        'task' : data[2]
    }
    return temp;
}

export const fetchFromFirebase = () => {
    const dispatch = useDispatch();
    db.ref(DB_REF).on('child_added', snapshot => {
        let data =  Object.values(snapshot.val());
        data = mapChildValuesToDataValues(data);
        dispatch(updateStoreWithFirbaseData(data));
    });
}

export const listenToChanges = () => {
    const dispatch = useDispatch();
    db.ref(DB_REF).on('child_changed', snapshot => {
        let data = Object.values(snapshot.val());
        data = mapChildValuesToDataValues(data);
        dispatch(updateChangedValue(data['id']))
    })
}