/* eslint-disable import/no-unresolved */
import { createContext, useState } from 'react';
import { Sell, SelectedProduct } from '@/interface';

interface SellsContext {
  sells: Sell[];
  setSells: (sells: Sell) => void;
  selectedProducts: SelectedProduct[];
  setSelectedProducts: (selectedProducts: SelectedProduct[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const sellsContextDefaultValue: SellsContext = {
  sells: [],
  setSells: () => {},
  selectedProducts: [],
  setSelectedProducts: () => {},
  isLoading: false,
  setIsLoading: () => {},
};

interface Props {
  children: React.ReactNode;
}

export const SellsContext = createContext<SellsContext>(sellsContextDefaultValue);

export const SellsContextProvider = ({ children }: Props) => {
  const [sells, setSells] = useState<Sell[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const totalValue = selectedProducts.reduce((total, product) => {
    const productValue = product.product.unit_value * product.quantity;
    return total + productValue;
  }, 0);

  const value = {
    sells,
    setSells,
    isLoading,
    selectedProducts,
    setSelectedProducts,
    setIsLoading,
    totalValue,
  };

  return <SellsContext.Provider value={value}>{children}</SellsContext.Provider>;
};
