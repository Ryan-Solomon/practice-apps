import React, { FC } from 'react';

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type Props = {
  cocktail: Cocktail;
};

const CocktailCard: FC<Props> = ({ cocktail }) => {
  return (
    <div className='cocktail-card'>
      <div className='card'>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <h1>{cocktail.strDrink}</h1>
      </div>
    </div>
  );
};

export default CocktailCard;
