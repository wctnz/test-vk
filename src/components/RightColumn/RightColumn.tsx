import { Col } from 'antd';
import { Item } from '../../types/types';
import cl from "./RightColumn.module.css"

interface LeftColumnProps {
    items: Item[]
}

const RightColumn = ({ items }: LeftColumnProps) => {

    const totalPrice = items.reduce((acc, el) => {
        return acc + el.price * el.count
    }, 0)
    return (
        <Col
            className={ cl.container }
            style={{ backgroundColor: "lightGrey" }}
            span={6}><h1>Итого {totalPrice.toFixed(2)}$</h1></Col>
    );
};

export default RightColumn;