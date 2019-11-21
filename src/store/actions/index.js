
const productsRequested = () => {
    return {
        type: 'FETCH_PRODUCTS_REQUEST'
    }
};

const productsLoaded = (newProducts) => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: newProducts
    };
};

const productsError = (error) => {
    return {
        type: 'FETCH_PRODUCTS_FAILURE',
        payload: error
    };
};


const moneyRequested = () => {
    return {
        type: 'FETCH_MONEY_REQUEST'
    }
};

const moneyLoaded = (newMoney) => {
    return {
        type: 'FETCH_MONEY_SUCCESS',
        payload: newMoney
    };
};

const moneyError = (error) => {
    return {
        type: 'FETCH_MONEY_FAILURE',
        payload: error
    };
};




const fetchProducts = (productsService, dispatch) => () => {
    dispatch(productsRequested());
    productsService.getProducts()
        .then((data) => dispatch(productsLoaded(data)))
        .catch((err) => dispatch(productsError(err)));
};

const fetchMoney = (productsService, dispatch) => () => {
    dispatch(moneyRequested());
    productsService.getMoney()
        .then((data) => dispatch(moneyLoaded(data)))
        .catch((err) => dispatch(moneyError(err)));
};

export {
    fetchProducts, fetchMoney
};
