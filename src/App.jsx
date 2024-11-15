import useProducts from './ReactQuery';

const App = () => {
  const { data, isPending, isError, error } = useProducts();

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isPending) {
    return <div>pending....</div>;
  }

  return (
    <div style={styles.productsContainer}>
      {data.map((product) => {
        return (
          <div style={styles.container} key={product.id}>
            <img src={product.image} style={styles.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly', 
    gap: '10px', 
  },
  container: {
    border: '2px solid red',
    padding: '6px',
    width: '160px', 
  },
  image: {
    height: '100px',
    width: '100px',
    objectFit: 'cover', 
  },
};

export default App;
