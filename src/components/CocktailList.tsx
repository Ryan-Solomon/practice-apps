import React from 'react';
import { useAppContext } from '../context/appContext';

const CocktailList = () => {
  const { cocktails } = useAppContext();

  const renderedCocktailCards = cocktails.map((cocktail) => {
    return <CockTailCard key={cocktail.idDrink} cocktail={cocktail} />;
  });

  return <>{renderedCocktailCards}</>;
};
