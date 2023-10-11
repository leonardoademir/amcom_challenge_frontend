import { useState, useEffect, useContext } from 'react';
import { AxiosResponse } from 'axios';
import { deleteSell, getClients, getProducts, getSellers, getSells, postSell } from '@/services';
import { toast } from 'react-toastify';
import { SellsContext } from '@/context/sellContext';
import { Product, Client, Seller } from '@/interface';

const useSells = () => {
  const { sells, setSells, selectedProducts, setSelectedProducts, totalValue } = useContext(SellsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[] | []>([]);
  const [clients, setClients] = useState<Client[] | []>([]);
  const [sellers, setSellers] = useState<Seller[] | []>([]);
  const [dateTime, setDateTime] = useState<Date>();
  const [selectedClient, setSelectedClient] = useState<Client>();
  const [selectedSeller, setSelectedSeller] = useState<Seller>();

  const fetchSellsData = async () => {
    setIsLoading(true);
    await getSells()
      .then((data: AxiosResponse) => {
        setSells(data.data);
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
        console.error('Error calling deleteSell:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchProductsData = async () => {
    setIsLoading(true);
    await getProducts()
      .then((data: AxiosResponse) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.error('Error calling getProducts:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchClientsData = async () => {
    setIsLoading(true);
    await getClients()
      .then((data: AxiosResponse) => {
        setClients(data.data);
      })
      .catch((error) => {
        console.error('Error calling getClients:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchSellersData = async () => {
    setIsLoading(true);
    await getSellers()
      .then((data: AxiosResponse) => {
        setSellers(data.data);
      })
      .catch((error) => {
        console.error('Error calling getSellers:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClickAddProduct = (selectedProduct: Product) => {
    let foundObject = null;

    for (const key in selectedProducts) {
      if (selectedProducts[key].product?.id === selectedProduct.id) {
        foundObject = selectedProducts[key];
        toast.info('Produto já adicionado.');
        return false; // Exit the loop when a match is found
      }
    }
    toast.success('Produto adicionado.');
    return true;
  };

  const handleClickRemoveProduct = (selectedProduct: Product) => {
    let index = null;
    let newProducts = [...selectedProducts];

    for (const key in selectedProducts) {
      if (selectedProducts[key].product?.id === selectedProduct.id) {
        index = key;
        newProducts.splice(index, 1);
        setSelectedProducts(newProducts);
        toast.success('Produto removido.');
      }
    }
  };

  const isValidData = () => {
    if (selectedProducts?.length == 0) {
      toast.error('Necessário ao menos um produto.');
      return false;
    }
    if (dateTime == undefined || dateTime == null) {
      toast.error('Necessário preencher a data.');
      return false;
    }
    if (selectedSeller == undefined) {
      toast.error('Necessário escolher um vendedor.');
      return false;
    }
    if (selectedClient == undefined) {
      toast.error('Necessário escolher um cliente.');
      return false;
    }
    return true;
  };

  function generateInvoice() {
    const length = 10;
    let result = '';
    const characters = '0123456789';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  const handleAddSell = async () => {
    if (isValidData()) {
      const payload = {
        client: selectedClient?.id,
        seller: selectedSeller?.id,
        invoice: generateInvoice(),
        sell_date: dateTime,
        deleted: false,
        products: selectedProducts.map((p) => {
          return { product_id: p.product.id, quantity: p.quantity };
        }),
      };
      await postSell(payload).then(() => {
        toast.success('Venda criada com sucesso.');
        setSelectedProducts([]);
      });
    }
  };
  useEffect(() => {
    fetchProductsData();
  }, []);

  useEffect(() => {
    fetchClientsData();
  }, []);

  useEffect(() => {
    fetchSellersData();
  }, []);

  return {
    sells,
    handleDelete,
    isLoading,
    products,
    selectedProducts,
    setSelectedProducts,
    handleClickAddProduct,
    dateTime,
    setDateTime,
    clients,
    sellers,
    selectedClient,
    setSelectedClient,
    selectedSeller,
    setSelectedSeller,
    handleClickRemoveProduct,
    totalValue,
    handleAddSell,
  };
};

export default useSells;
