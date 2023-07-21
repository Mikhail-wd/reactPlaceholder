import { createStore } from "redux";

const initialState = {
    pages: 0,
    currenPage: 1,
    search: null
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "amountOfPages":
            return { ...state, pages: action.payload };
        case "activePage":
            return { ...state, currenPage: action.payload };
        case "nextPage":
            return { ...state, currenPage: state.currenPage + 1 };
        case "prevPage":
            return { ...state, currenPage: state.currenPage - 1 };
        case "search":
            return { ...state, search: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducers);

export default store;