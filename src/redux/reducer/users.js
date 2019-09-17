import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    MSG_RESET,
    UPDATE_CENTRE_ADMIN_REQUEST,
    UPDATE_CENTRE_ADMIN_SUCCESS,
    CREATE_NEW_USER_REQUEST,
    CREATE_NEW_USER_SUCCESS,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    CREATE_NEW_CENTRE_ADMIN_REQUEST,
    CREATE_NEW_CENTRE_ADMIN_SUCCESS
} from "../types/users";

const initialState = {
    isLoading: false,
    errors: null,
    users: [],
    user: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER_REQUEST:
        case FETCH_USERS_REQUEST:
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
        case UPDATE_CENTRE_ADMIN_REQUEST:
        case CREATE_NEW_USER_REQUEST:
        case FETCH_USER_REQUEST:
        case CREATE_NEW_CENTRE_ADMIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                isLoading: false
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            };

        case CREATE_NEW_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [
                    ...state.users,
                    Object.assign({}, action.payload)
                ]
            };


        // case ADD_USER_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         users: [
        //             ...state.users, 
        //             Object.assign({}, action.user)
        //         ]
        //     };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [
                    ...state.users.filter(user => user._id !== action.user._id),
                    Object.assign({}, action.user)
                ]
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [...state.users.filter(user => user.id !== action._id)]
            }
        case MSG_RESET:
            return {
                ...state,
                isLoading: false,
                message: action.message
            }
        case UPDATE_CENTRE_ADMIN_SUCCESS:
            return {
                ...state,
                admin: action.payload,
                isLoading: false,
                message: action.message
            }
        case CREATE_NEW_CENTRE_ADMIN_SUCCESS:
            return {
                ...state,
                admin: action.payload,
                isLoading: false,
                message: action.message
            }
        default:
            return state;
    }
}
