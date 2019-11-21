const updateMoneyList = (state, action) => {

    if (state === undefined) {
        return {
            money: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_MONEY_REQUEST':
            return {
                money: [],
                loading: true,
                error: null
            };

        case 'FETCH_MONEY_SUCCESS':
            return {
                money: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_MONEY_FAILURE':
            return {
                money: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.productsList;
    }
};

export default updateMoneyList;
