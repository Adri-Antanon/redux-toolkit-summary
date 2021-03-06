import { selectCartIsVisible } from './features/ui/uiSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useGetPokemonsQuery } from './api';
import { useState } from 'react';

const PAGE_LIMIT = 5;

function App() {
  const showCart = useAppSelector(selectCartIsVisible);
  const [page, setPage] = useState(0);

  const { data, error, isLoading } = useGetPokemonsQuery(page);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + PAGE_LIMIT);
  };

  const handlePreviousPage = () => {
    if (page === 0) return;
    setPage((prevPage) => prevPage - PAGE_LIMIT);
  };

  return (
    <Layout>
      {showCart && <Cart />}
      {error && <div>Error fetching pokemons...</div>}
      {isLoading && <p className="text--centered">Loading...</p>}
      {data && (
        <Products
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
          products={data.results}
        />
      )}
    </Layout>
  );
}

export default App;
