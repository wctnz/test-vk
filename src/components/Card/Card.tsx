import { Button, Card } from 'antd';
import { Item } from "../../types/types"
import cl from "./Card.module.css"
import { useAppDispatch } from '../../hooks/reduxHooks';
import { shopSlice } from '../../store/reducers/shop.slice';
import { MdDelete } from "react-icons/md";

const { Meta } = Card;
interface CardProps {
  item: Item;
}
const CardComponent = ({ item }: CardProps) => {
  const dispatch = useAppDispatch()
  const handlePlusCartItem = (item: Item) => {
    dispatch(shopSlice.actions.plusCartItem(item))
  }
  const handleMinusCartItem = (item: Item) => {
    dispatch(shopSlice.actions.minusCartItem(item))
  }
  const handleRemoveItem = (id: number) => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(shopSlice.actions.removeItem(id))
    }
  }
  return (
    <>
      <div className={cl.mainContainer}>

        <Card
          className={cl.cardContainer}
          cover={
            <img
              alt={item.title}
              src={item.image}
            />
          }>
          <div >
            <div className={cl.topSection}>
              <Meta
                title={item.title}
                description={item.description}
              />
            </div>
            <div className={cl.buttomSection}>
            
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
              
              <div className={cl.totalPrice}>
                <h3>Стоимость - {item.price} $</h3>
                {item.count > 1 ? <h3>Общая стоимость - {item.totalPrice} $</h3> : ""}
              </div>
              <div className={cl.removeSection}>
                <Button
                  className={cl.buttonRemove}
                  onClick={() => handleRemoveItem(item.id)}
                  type="primary"><MdDelete className={cl.iconRemove} /></Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
};

export default CardComponent;