export const authInitailState = {
    isAuthenticated: false,
    user: null,
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true, 
                user: action.payload,
            };
        case "LOGOUT":
            return {
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};