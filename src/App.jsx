import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function App() {

  //Hook de react para mantener estado:
  const [categories, setCategories] = useState(['Friends']);

  const OnAddCategory = (newCategory) => {
    //validar si la categoria ya existe:
    if(categories.includes(newCategory)) return;
    //Agregar la nueva categoria
    setCategories([newCategory, ...categories ]);
  };

  return (
    <>

      <h1>Gif App</h1>

      <AddCategory onNewCategory = { OnAddCategory }/>

      {
        categories.map(( category ) => (
          <GifGrid key={ category } category={ category }/>
        ))
      }      
    </>
  )
}

