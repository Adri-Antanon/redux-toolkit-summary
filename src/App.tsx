import { selectCartIsVisible } from './features/ui/uiSlice';
import { useAppSelector } from './app/hooks';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useGetPokemonsQuery } from './api';

function App() {
  const showCart = useAppSelector(selectCartIsVisible);

  const { data, error, isLoading } = useGetPokemonsQuery([]);

  return (
    <Layout>
      {showCart && <Cart />}
      {error && <div>Error fetching pokemons...</div>}
      {isLoading && (
        <p
          style={{
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            color: '#fff',
          }}
        >
          Loading...
        </p>
      )}
      {data && <Products products={data.results} />}
    </Layout>
  );
}

export default App;
