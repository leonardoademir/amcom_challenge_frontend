/* eslint-disable import/no-unresolved */
import { createContext, useState } from 'react';
import { Comissions } from '@/interface';

interface ComissionsContext {
  comissions: Comissions[];
  setComissions: (comissions: Comissions) => void;
}

const comissionsContextDefaultValue: ComissionsContext = {
  comissions: [],
  setComissions: () => {},
};

interface Props {
  children: React.ReactNode;
}

export const ComissionsContext = createContext<ComissionsContext>(comissionsContextDefaultValue);

export const ComissionsContextProvider = ({ children }: Props) => {
  const [comissions, setComissions] = useState<Comissions[]>([]);

  const value = {
    comissions,
    setComissions,
  };

  return <ComissionsContext.Provider value={value}>{children}</ComissionsContext.Provider>;
};
