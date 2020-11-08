import React from 'react';
import { useAppContext } from '../context/appContext';
import CocktailCard from './CocktailCard';

const CocktailList = () => {
  const { cocktails } = useAppContext()!;

  const renderedCocktailCards = cocktails.map((cocktail) => {
    return <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />;
  });

  return <>{renderedCocktailCards}</>;
};

export default CocktailList;
