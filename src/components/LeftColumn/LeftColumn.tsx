import { Col } from 'antd';
import { Item } from '../../types/types';
import CardComponent from '../Card/Card';
import cl from "./LeftColumn.module.css"

interface LeftColumnProps {
    items: Item[]
}

const LeftColumn = ({ items }: LeftColumnProps) => {

    return (
        <Col
            span={16}>
            <div className={ cl.cardsContainer }>
                {items.map(item => (
                    <div
                        key={item.id}
                        className="Card">
                        <CardComponent item={item} />
                    </div>
                ))}
            </div>
        </Col>
    )
}

export default LeftColumn;