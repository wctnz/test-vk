import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { fetchItems } from "./store/reducers/ActionCreators";
import { Col, Row } from 'antd';
import CardComponent from "./components/Card/Card";
import { shopSlice } from "./store/reducers/shop.slice";


function App() {
  const dispatch = useAppDispatch()
  const { items, loading, error } = useAppSelector(state => state.shop)
  const totalPrice = items.reduce((acc, el) => {
    return acc + el.price * el.count
  }, 0)

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

return (
  <div>

    <Row>
      <Col 
      style={{ backgroundColor: "grey" }}
      span={16}>
        <div className="cardsContainer">
          {items.map(item => (
            <div className="Card">
              <CardComponent item={item} />
            </div>
          ))}
        </div>
      </Col>
      <Col 
      style={{ backgroundColor: "lightGrey" }}
      span={8}><h1>Итого {totalPrice.toFixed(2)}$</h1></Col>
    </Row>

  </div >
);
}

export default App;