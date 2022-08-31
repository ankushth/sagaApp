import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Service } from '../Services/Service';
import { UserList } from './Actions/action';


function* fetchUser(action) {
    try {
        console.log(action)
        const users = yield call(Service, action.payload);
        console.log(users.slice(0,10))
        // yield put (UserList(users))
        yield put({type:'USER_FETCH_SUCCEEDED', message:users});

    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 function* mySaga() {
    yield takeEvery("USER_PROFILE_DATA", fetchUser);
}
function* rootSaga () {
    yield all([
        mySaga(),
        // mysagatwo   // this is second dispatch function
    ])
}

export default rootSaga;

