import { Button, Card } from 'antd';
import { Item } from "../../types/types"
import cl from "./Card.module.css"
import { useAppDispatch } from '../../hooks/reduxHooks';
import { shopSlice } from '../../store/reducers/shop.slice';
import { MdDelete } from "react-icons/md";
import ChangeQuantity from '../ChangeQuantity/ChangeQuantity';
import PriceInfo from '../PriceInfo/PriceInfo';

const { Meta } = Card;
interface CardProps {
  item: Item;
}
const CardComponent = ({ item }: CardProps) => {
  const dispatch = useAppDispatch()
  
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
            
              <ChangeQuantity item={ item }/>
              <PriceInfo item={ item }/>

                <Button
                  className={cl.buttonRemove}
                  onClick={() => handleRemoveItem(item.id)}
                  type="primary"><MdDelete className={cl.iconRemove} /></Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
};

export default CardComponent;