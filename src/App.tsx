import React from 'react';
import './App.css';
import useFetch from './components/useFetch';
import Card, { CardProps } from './components/card';




function App() {

  const { data, loaded } = useFetch("https://fakestoreapi.com/products?limit=5")
  return (
    <div className="App">
      {
        loaded && data ? (
          data.map((product: CardProps) => <Card key={product.id} {...product} />)
        ) : (
          <h1>Loading...</h1>

        )
        // if(data instanceof Array) {
        //   loaded && data ? (
        //   data.map((product:CardProps) => <Card key={product.id} {...product} />)
        //   )
        //   : (
        //   <h1>Loading...</h1>
        //   )
        // } else {
        //   <h1>Loading...</h1>
        // }
      }
    </div>
  );
}

export default App;

