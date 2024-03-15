import { Item } from "../../types/types";

interface PriceInfo {
    item: Item;
  }

const PriceInfo = ({ item }: PriceInfo) => {
    return (
        <div>
            <h2>{item.price} $</h2>
            {item.count > 1 ? <h2>Общая стоимость {item.totalPrice} $</h2> : ""}
        </div>
    );
};

export default PriceInfo;