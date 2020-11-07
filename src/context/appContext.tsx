// Watch homies video on TS to get your context right here

import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

type AppContextType = {
  cocktails: State;
  searchTerm: string;
  setSearchTerm: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type State = {
  drinks: Cocktail[];
};

const AppProvider: FC = ({ children }) => {
  const [cocktails, setCocktails] = useState<Cocktail[] | []>([]);
  const [searchTerm, setSearchTerm] = useState('a');

  useEffect(() => {
    const fetchCocktails = async () => {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`
      );
      const { drinks } = (await res.json()) as State;
      setCocktails(drinks);
    };
    fetchCocktails();
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
