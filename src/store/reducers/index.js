import updateProductsList from './products-list';
import updateMoneyList from './money-list';

const reducer = (state, action) => {
    return {
        productsList: updateProductsList(state, action),
        moneyList: updateMoneyList(state, action)
    };
};


export default reducer;
