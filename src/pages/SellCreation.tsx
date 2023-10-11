import ProductsTable from '@/components/ProductsTable';
import useSells from '@/hooks/useSells';
import { Client, Product, Seller } from '@/interface';
import { ChangeEvent, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/utils';

const SellCreation = () => {
  const {
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
    totalValue,
    handleAddSell,
  } = useSells();
  const [qtd, setQtd] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const onChangeSelectedProduct = (event: ChangeEvent<HTMLInputElement>) => {
    const findProduct = Object.entries(products).find(([key, p]) => p.id === parseInt(event.currentTarget.value));
    if (findProduct != undefined) {
      const newProduct: Product = findProduct[1];
      setSelectedProduct(newProduct);
    }
  };

  const onChangeSelectClient = (event: ChangeEvent<HTMLInputElement>) => {
    const findClient = Object.entries(clients).find(([key, p]) => p.id === parseInt(event.currentTarget.value));
    if (findClient != undefined) {
      const newClient: Client = findClient[1];
      setSelectedClient(newClient);
    }
  };

  const onChangeSelectedSeller = (event: ChangeEvent<HTMLInputElement>) => {
    const findSeller = Object.entries(sellers).find(([key, p]) => p.id === parseInt(event.currentTarget.value));
    if (findSeller != undefined) {
      const newSeller: Seller = findSeller[1];
      setSelectedSeller(newSeller);
    }
  };

  return (
    <div className="m-auto w-full">
      <div className="flex gap-4">
        <div className="w-3/5 p-12">
          <h1 className="font-light text-2xl text-black ml-8">Produtos</h1>
          <div className="flex gap-4">
            <div className="w-2/4 p-4 m-4 gap-3">
              <p>Buscar pelo código de barras ou descrição</p>
              <select className="w-full h-12 p-3 rounded-sm border" onChange={onChangeSelectedProduct}>
                <option value="">Selecione</option>
                {Object.entries(products).map(([key, value]) => {
                  return (
                    <option key={key} value={value.id} selected={value.id == selectedProduct?.id}>
                      {value.description}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-80 p-4 m-4 gap-3">
              <p>Quantidade de itens</p>
              <input
                type="number"
                onChange={(e) => setQtd(parseInt(e.target.value))}
                value={qtd}
                className="w-full h-12 p-3 rounded-sm border"
                placeholder="0"
                min={0}
              />
            </div>
            <div className="w-1/5 p-4">
              <button
                className="bg-custom-green mt-9 text-white border rounded py-3 px-4 w-44"
                onClick={() => {
                  handleClickAddProduct(selectedProduct) &&
                    setSelectedProducts([...selectedProducts, { product: selectedProduct, quantity: qtd }]);
                }}
              >
                Adicionar
              </button>
            </div>
          </div>
          <ProductsTable />
        </div>

        <div className="border-r border-gray-400 w-1"></div>

        <div className="w-2/5 p-4 mt-8">
          <h1 className="font-light text-2xl text-black ml-8">Dados da Venda</h1>
          <div className="p-4 m-4 gap-3">
            <p>Date e Hora da Venda</p>
            <input
              type="datetime-local"
              onChange={(e) => setDateTime(e.target.value)}
              value={dateTime}
              className="w-full h-12 p-3 rounded-sm border"
              placeholder="0"
              min={0}
            />
          </div>
          <div className="p-4 m-4 gap-3">
            <p>Escolha um Vendedor</p>
            <select className="w-full h-12 p-3 rounded-sm border" onChange={onChangeSelectedSeller}>
              <option value="">Selecione</option>
              {Object.entries(sellers).map(([key, value]) => {
                return (
                  <option key={key} value={value.id} selected={value.id == selectedSeller?.id}>
                    {value?.id_person?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="p-4 m-4 gap-3">
            <p>Escolha um Cliente</p>
            <select className="w-full h-12 p-3 rounded-sm border" onChange={onChangeSelectClient}>
              <option value="">Selecione</option>
              {Object.entries(clients).map(([key, value]) => {
                return (
                  <option key={key} value={value.id} selected={value.id == selectedClient?.id}>
                    {value?.id_person?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="justify-between flex p-4 mt-12">
            <h1 className="font-light text-xl text-black">Valor total da Venda</h1>
            <h1 className="font-light text-xl text-black">{formatCurrency(totalValue)}</h1>
          </div>
          <div className="justify-between flex p-4 mt-12">
            <Link to="/">
              <button className="bg-custom-green mt-9 text-white border rounded py-3 px-4 w-44">Cancelar</button>
            </Link>
            <button
              className="bg-custom-light-green mt-9 text-white border rounded py-3 px-4 w-44"
              onClick={() => handleAddSell()}
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SellCreation;
