import { useState, useEffect, useContext } from 'react';
import { AxiosResponse } from 'axios';
import { deleteSell, getSells } from '@/services';
import { toast } from 'react-toastify';
import { SellsContext } from '@/context/sellContext';

const useSells = () => {
  const { sells, setSells } = useContext(SellsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchSellsData = async () => {
    setIsLoading(true);
    await getSells()
      .then((data: AxiosResponse) => {
        setSells(data.data);
        console.log('getSells function completed successfully.');
      })
      .catch((error) => {
        console.error('Error calling getSells:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchSellsData();
  }, []);

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    await deleteSell(id)
      .then(() => {
        setTimeout(() => {
          fetchSellsData();
          toast.success('Venda Eliminada.');
        }, 1000);
      })
      .catch((error) => {
        console.error('Error calling getSells:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    sells,
    handleDelete,
    isLoading,
  };
};

export default useSells;
