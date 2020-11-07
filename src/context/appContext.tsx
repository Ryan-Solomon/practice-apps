import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

const AppContext = createContext({});

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type State = {
  drinks: Cocktail[];
};

const AppProvider: FC = ({ children }) => {
  const [cocktails, setCocktails] = useState<State | []>([]);
  const [searchTerm, setSearchTerm] = useState('a');

  useEffect(() => {
    const fetchCocktails = async () => {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`
      );
      const data = (await res.json()) as State;
      setCocktails(data);
    };
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        cocktails,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
