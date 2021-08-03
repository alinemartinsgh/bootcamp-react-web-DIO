import React from 'react'
import PetShop from './PetShop';

function App() {
  const handleClick = () => {
    console.log('banho')
  }

  return (
    <PetShop
      dogs={2}
      customerName="Aline Martins"
      onclick={handleClick}
    />
  );
}

export default App;
