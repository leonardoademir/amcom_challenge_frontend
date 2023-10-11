import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useComissions from '@/hooks/useComissions';
import { ToastContainer } from 'react-toastify';
import ComissionsTable from '@/components/ComissionsTable';

const Comissions = () => {
  const { startDate, endDate, setStartDate, setEndDate, handleSearchComissions, comissions } = useComissions();
  return (
    <div className="block align-center justify-center text-center m-auto w-3/4">
      <div className="flex justify-between">
        <h1 className="text-2xl">Relatório de Comissões</h1>

        <div className="flex gap-3">
          <p className="my-3">Período de Início</p>
          <input
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            type="date"
            placeholder="Período de Início"
            className="w-60 h-12 p-3 rounded-sm border"
          />

          <p className="my-3">Período de Fim</p>
          <input
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
            type="date"
            className="w-60 h-12 p-3 rounded-sm border"
          />

          <button onClick={() => handleSearchComissions()} className="bg-custom-green text-white w-12 rounded-md">
            <SearchIcon />
          </button>
        </div>
      </div>
      {comissions?.length > 0 ? (
        <ComissionsTable />
      ) : (
        <div className="m-16 p-48">
          <p>Para visualizar o relatório, selecione um período nos campos acima.</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Comissions;
