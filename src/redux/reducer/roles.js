import {
    ADD_ROLE_REQUEST,
    ADD_ROLE_SUCCESS,
    FETCH_ROLES_REQUEST,
    FETCH_ROLES_SUCCESS,
    UPDATE_ROLE_REQUEST,
    UPDATE_ROLE_SUCCESS,
    DELETE_ROLE_REQUEST,
    DELETE_ROLE_SUCCESS
} from "../types/roles";

const initialState = {
    isLoading: false,
    msg: false,
    errors: null,
    roles: []
}
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ROLE_REQUEST:
        case FETCH_ROLES_REQUEST:
        case UPDATE_ROLE_REQUEST:
        case DELETE_ROLE_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_ROLES_SUCCESS:
            return {
                ...state,
                roles: action.roles,
                isLoading: false
            };

        case ADD_ROLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                roles: [...state.roles, 
                    Object.assign({}, action.role)
                ]
            };
        case UPDATE_ROLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                msg: true,
                roles: [
                    ...state.roles.filter(role => role._id !== action.role._id),
                    Object.assign({}, action.role)
                ]
            }

        case DELETE_ROLE_SUCCESS:
            return {
                isLoading: false,
                roles: [...state.roles.filter(role => role.id !== action._id)]
            }

        default:
            return state;
    }
}
