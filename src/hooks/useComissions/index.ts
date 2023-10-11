import { ComissionsContext } from '@/context/comissionContext';
import { getComission } from '@/services';
import { formatDate } from '@/utils';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';

const useComissions = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const { comissions, setComissions } = useContext(ComissionsContext);

  const handleSearchComissions = async () => {
    if (startDate == undefined || startDate == null) {
      toast.error('Necessário preencher a data de início.');
      return false;
    }
    if (endDate == undefined || endDate == null) {
      toast.error('Necessário preencher a data de fim.');
      return false;
    }
    if (startDate > endDate) {
      toast.error('Data de Início não pode ser maior do que a Data Final.');
      return false;
    }

    await getComission(formatDate(startDate), formatDate(endDate)).then((data) => {
      setComissions(data.data.data);
      return true;
    });
  };

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    handleSearchComissions,
    comissions,
  };
};

export default useComissions;
