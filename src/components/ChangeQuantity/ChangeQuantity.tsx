
import { Button } from 'antd';
import React from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { shopSlice } from '../../store/reducers/shop.slice';
import { Item } from '../../types/types';
import cl from "./ChangeQuantity.module.css"

interface ChangeQuantity {
    item: Item;
  }

const ChangeQuantity = ({ item }: ChangeQuantity) => {

    const dispatch = useAppDispatch()
    const handlePlusCartItem = (item: Item) => {
      dispatch(shopSlice.actions.plusCartItem(item))
    }
    const handleMinusCartItem = (item: Item) => {
      dispatch(shopSlice.actions.minusCartItem(item))
    }

    return (
        <div className={cl.middleSection}>
                <Button
                  className={cl.buttonMinus}
                  disabled={item.count === 1}
                  onClick={() => handleMinusCartItem(item)}
                  type="primary">-</Button>
                <h1>{item.count}</h1>
                <Button
                  className={cl.buttonPlus}
                  disabled={item.count === 10}
                  onClick={() => handlePlusCartItem(item)}
                  type="primary">+</Button>
              </div>
    );
};

export default ChangeQuantity;