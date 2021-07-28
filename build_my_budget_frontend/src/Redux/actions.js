import Types from "./types";
import axios from "axios";

export const getEntries = (catId) => {
    return dispatch => {
        dispatch({type:Types.ENTRIES_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/entries/${catId}/`)
            .then(response => {
                    dispatch({type:Types.GET_ENTRIES, payload:response.data})
                }
            )
            .catch(err => {
                    // TODO: Remove logging from PROD
                    console.log(err)
                    dispatch({type:Types.ENTRIES_LOADING, payload:false})
                }
            );
    }
}

export const getCategories = () => {
    return dispatch => {
        dispatch({type:Types.CATEGORIES_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/categories`)
            .then(response => {
                    dispatch({type:Types.GET_CATEGORIES, payload:response.data})
                }
            )
            .catch(err => {
                    // TODO: Remove logging from PROD
                    console.log(err)
                    dispatch({type:Types.CATEGORIES_LOADING, payload:false})
                }
            );
    }
}

export const deleteEntry = (id,cb) => {
    return dispatch => {
        dispatch({type:Types.ENTRIES_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/entries/${id}/`)
            .then(response => {
                    dispatch({type:Types.DELETE_ENTRY, payload:id});
                cb();
                }
            )
            .catch(err => {
                    // TODO: Remove logging from PROD
                    console.log(err)
                }
            );
    }
}

export const deleteCategory = (catId,cb) => {
    return dispatch => {
        dispatch({type:Types.CATEGORIES_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/categories/${catId}/`)
            .then(response => {
                    dispatch({type:Types.DELETE_CATEGORY, payload:catId});
                cb();
                }
            )
            .catch(err => {
                    // TODO: Remove logging from PROD
                    console.log(err)
                }
            );
    }
}

export const createEntry = (data,cb) => {
    return dispatch => {
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/entries/`, data)
            .then(response => {
                console.log(response)
                    dispatch({type:Types.CREATE_ENTRY, payload:response.data});
                    cb()
                }
            )
            .catch(err => {
                    // TODO: Remove logging from PROD
                    console.log(err)
                    dispatch({type:Types.ENTRIES_LOADING, payload:false})
                }
            );
    }
}

export const createCategory = (data, cb) => {
    return dispatch => {
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/categories/`, data)
            .then(response => {
                console.log(response)
                    dispatch({type:Types.CREATE_CATEGORY, payload:response.data});
                    cb()
                }
            )
            .catch(err => {
                    // TODO: Remove logging from PROD
                    console.log(err)
                    dispatch({type:Types.CATEGORIES_LOADING, payload:false})
                }
            );
    }
}
