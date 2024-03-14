import { AppDispatch } from './../index';
import { shopSlice } from './shop.slice';
import { Item } from "../../types/types"

export const fetchItems = () => (dispatch: AppDispatch) => {
    try {
        dispatch(shopSlice.actions.itemsFetching())
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                const modifiedData = data.map((item: Item) => {
                   item.count = 1
                   item.totalPrice = item.price*item.count
                    return item
                })

               return dispatch(shopSlice.actions.itemsFetchingSuccess(modifiedData))
            })
    } catch (e) {
        dispatch(shopSlice.actions.itemsFetchingError("Что то пошло не так"))
    }
}