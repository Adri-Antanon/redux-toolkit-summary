import { selectCartIsVisible } from './features/ui/uiSlice';
import { useAppSelector } from './app/hooks';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useAppSelector(selectCartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products products={[{ title: "Test", price: 10, description: "Some description" }]} />
    </Layout>
  );
}

export default App;