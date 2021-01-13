import { SET_USERS } from '../../actions/usersActions';

const usersReducer = (state = { data:[] , loading:true }, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, data: action.payload , loading : false};
        default:
            return {...state};
    }
};

export default usersReducer;