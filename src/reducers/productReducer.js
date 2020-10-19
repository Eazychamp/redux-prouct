const initialState =  [{
    id:  new Date().getTime(),
    name: "Product1",
    price: 20,
    quantity: 40,
    image: '',
    description: 'This is the very first product',
} ]



const productReducer = (state = initialState, action) => {
    // console.log(state)

    switch (action.type) {
        case 'ADD_PRODUCT':
            return state.concat([action.data])
        case 'SEARCH':
            const value = action.text;
            // console.log(value)
            const works = state.filter((val) => val.includes(value));
            return {...state, value, works};
        default:
            return state;
    }


}
export default productReducer;