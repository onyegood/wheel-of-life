import {
    ADD_PERMISSION_REQUEST,
    ADD_PERMISSION_SUCCESS,
    FETCH_PERMISSIONS_REQUEST,
    FETCH_PERMISSIONS_SUCCESS,
    UPDATE_PERMISSION_REQUEST,
    UPDATE_PERMISSION_SUCCESS,
    DELETE_PERMISSION_REQUEST,
    DELETE_PERMISSION_SUCCESS
} from "../types/permissions";

const initialState = {
    isLoading: false,
    msg: false,
    errors: null,
    permissions: []
}
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PERMISSION_REQUEST:
        case FETCH_PERMISSIONS_REQUEST:
        case UPDATE_PERMISSION_REQUEST:
        case DELETE_PERMISSION_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_PERMISSIONS_SUCCESS:
            return {
                ...state,
                permissions: action.permissions,
                isLoading: false
            };

        case ADD_PERMISSION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                permissions: [...state.permissions, 
                    Object.assign({}, action.permission)
                ]
            };
        case UPDATE_PERMISSION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                msg: true,
                permissions: [
                    ...state.permissions.filter(permission => permission._id !== action.permission._id),
                    Object.assign({}, action.permission)
                ]
            }

        case DELETE_PERMISSION_SUCCESS:
            return {
                isLoading: false,
                permissions: [...state.permissions.filter(permission => permission.id !== action._id)]
            }
        default:
            return state;
    }
}
