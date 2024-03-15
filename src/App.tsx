import { Row } from 'antd';
import { useEffect } from 'react';
import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { fetchItems } from './store/reducers/ActionCreators';


function App() {

  const dispatch = useAppDispatch()
  const { items, loading, error } = useAppSelector(state => state.shop)

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <div>
      {loading ? <h1 className="serviceMessage">Идет загрузка...</h1> :
        error ? <h1 className="serviceMessage">Что-то пошло не так.</h1> :
          <Row>
            <LeftColumn items={items} />
            <RightColumn items={items} />
          </Row>
      }
    </div >
  );
}

export default App;