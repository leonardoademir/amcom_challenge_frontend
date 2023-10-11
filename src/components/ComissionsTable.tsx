import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { formatCurrency } from '@/utils';
import useComissions from '@/hooks/useComissions';

const ComissionsTable = () => {
  const { comissions } = useComissions();
  console.log(comissions);
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650, border: 0 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cod.</TableCell>
              <TableCell align="center">Vendedor</TableCell>
              <TableCell align="center">Total de Vendas</TableCell>
              <TableCell align="center">Total de Comissões</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(comissions).map(([key, value]) => {
              return (
                <TableRow key={key} sx={{ fontWeight: 'thin' }}>
                  <TableCell component="th" scope="row">
                    0{key + 1}
                  </TableCell>
                  <TableCell align="center">{value?.seller?.name}</TableCell>
                  <TableCell align="center">{value?.total_sells}</TableCell>
                  <TableCell align="center">{formatCurrency(parseFloat(value?.total_comission))}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComissionsTable;
