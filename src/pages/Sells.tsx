import BasicTable from '@/components/BasicTable';
import { Link } from 'react-router-dom';

const Sells = () => {
  return (
    <div className="block align-center justify-center text-center m-auto w-1/2">
      <div className="flex justify-between m-auto align-center">
        <h1 className="text-2xl">Vendas Realizadas</h1>
        <Link to={'/sell-creation'}>
          <button className="bg-custom-green mb-4 text-white border rounded py-2 px-4 w-44 mx-2">
            Inserir Nova Venda
          </button>
        </Link>
      </div>
      <BasicTable />
    </div>
  );
};

export default Sells;
