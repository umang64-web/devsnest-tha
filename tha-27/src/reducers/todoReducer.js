const todoReducer = (state = ['item1', 'item2', 'item3'], action) => {
    switch(action.type) {
        case "ADD_ITEM": return [...state, action.payload];
        case "DELETE_ITEM": return state.filter((item, index) => index!==action.payload);
        case "CLEAR": return state=[];
        default: return state;
    }
}

export default todoReducer;