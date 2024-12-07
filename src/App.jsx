

// //simple react query
// import useProducts from './ReactQuery';

// const App = () => {
//   const { data, isPending, isError, error } = useProducts();

//   if (isError) {
//     return <div>{error.message}</div>;
//   }

//   if (isPending) {
//     return <div>pending....</div>;
//   }

//   return (
//     <div style={styles.productsContainer}>
//       {data.map((product) => {
//         return (
//           <div style={styles.container} key={product.id}>
//             <img src={product.image} style={styles.image} alt={product.title} />
//             <p>{product.title}</p>
//             <p>{product.price}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const styles = {
//   productsContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly', 
//     gap: '10px', 
//   },
//   container: {
//     border: '2px solid red',
//     padding: '6px',
//     width: '160px', 
//   },
//   image: {
//     height: '100px',
//     width: '100px',
//     objectFit: 'cover', 
//   },
// };

// export default App;


import Home from './components/Home';
import TradionalApiFetching from './components/TraditionalApiFetching';
import FetchApiUsingReactQuery from './components/FetchApiUsingReactQuery';
import PostDetails from './components/PostDetails'
import Navbar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="/post" element={<FetchApiUsingReactQuery />} />
        <Route path="/post/:postid" element={<PostDetails />} />
      </Routes>
    </div>
  )
}

export default App