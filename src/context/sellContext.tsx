/* eslint-disable import/no-unresolved */
import { createContext, useState } from 'react';
import { Sell } from '@/interface';

interface SellsContext {
  sells: Sell[];
  setSells: (sells: Sell) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const sellsContextDefaultValue: SellsContext = {
  sells: [],
  setSells: () => {},
  isLoading: false,
  setIsLoading: () => {},
};

interface Props {
  children: React.ReactNode;
}

export const SellsContext = createContext<SellsContext>(sellsContextDefaultValue);

export const SellsContextProvider = ({ children }: Props) => {
  const [sells, setSells] = useState<Sell[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const value = {
    sells,
    setSells,
    isLoading,
    setIsLoading,
  };

  return <SellsContext.Provider value={value}>{children}</SellsContext.Provider>;
};
