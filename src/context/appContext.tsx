import { createContext, FC, useState, useEffect, useContext } from 'react';
import React from 'react';

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type ContextState = {
  cocktails: Cocktail[];
  setSearchInput: (term: string) => void;
  searchInput: string;
  error: boolean;
};

const AppContext = createContext<ContextState | null>(null);

export const ContextProvider: FC<React.ReactNode> = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
            searchInput || 'a'
          }`
        );
        const { drinks } = await res.json();
        if (drinks) {
          setCocktails(drinks);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };
    fetchCocktails();
  }, [searchInput]);

  console.log(cocktails);

  return (
    <AppContext.Provider
      value={{
        setSearchInput,
        cocktails,
        searchInput,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
