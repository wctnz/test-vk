import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types/types";

interface ShopState {
    items: Item[];
    loading: boolean;
    error: string;
}

const initialState: ShopState = {
    items: [],
    loading: false,
    error: "",
}

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        itemsFetching(state) {
            state.loading = true
        },
        itemsFetchingSuccess(state, action: PayloadAction<Item[]>) {
            state.loading = false
            state.error = ""
            state.items = action.payload
        },
        itemsFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        plusCartItem(state, action: PayloadAction<Item>) {
            state.items.map(item => {
                if (item.id === action.payload.id && item.count <= 9) {
                    item.count++
                    item.totalPrice = item.price * item.count
                }
                return item
            })
        },
        fetchItemsFromLocaleStorage(state, action: PayloadAction<Item[]>) {
            state.items = action.payload
        },
        minusCartItem(state, action: PayloadAction<Item>) {
            state.items.map(item => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--
                    item.totalPrice = item.price * item.count
                }
                return item
            })
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})