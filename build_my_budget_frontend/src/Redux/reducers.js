import Types from "./types.js"

const initialEntriesState = {
    entries: [],
    loading:false
};

const entryReducer = (state = initialEntriesState, action) => {
    switch(action.type) {
        case Types.ENTRIES_LOADING: {
            console.log("create_entry")
            return {...state, loading: action.payload}
        }

        case Types.GET_ENTRIES: {
            return {...state, entries: action.payload}
        }

        case Types.DELETE_ENTRY: {
            return {...state, entries: state.entries.filter(entry => entry.id !== action.payload)}
        }
        default:
            return state;
    }
}

const initialCategoriesState = {
    categories: [],
    loading:false
}

const categoryReducer = (state = initialCategoriesState, action) => {
    switch(action.type) {
        case Types.CATEGORIES_LOADING: {
            console.log("create_category")
            return {...state, loading: action.payload}
        }

        case Types.GET_CATEGORIES: {
            return {...state, categories: action.payload}
        }

        case Types.DELETE_CATEGORY: {
            // TODO: Handle deletion of parent category
            return {...state, categories: state.categories.filter(category => category.id !== action.payload)}
        }
        default:
            return state;
    }
}

export { entryReducer, categoryReducer }
