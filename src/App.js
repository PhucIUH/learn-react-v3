import Header from 'components/Header';
import ProductFeature from 'features/product';

import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import CartFeature from './features/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={CounterFeature} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/news" component={AlbumFeature}></Route>
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/cart" component={CartFeature}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
