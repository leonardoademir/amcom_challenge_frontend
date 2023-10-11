import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatCurrency, formatDate } from '@/utils';
import DeleteModal from './DeleteModal';
import useSells from '@/hooks/useSells';
import { Sell } from '@/interface';

const BasicTable = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idSelected, setIdSelected] = useState(0);
  const { sells, isLoading } = useSells();

  return (
    <>
      {isLoading ? (
        <h1 className="text-5xl">Carregando...</h1>
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 650, border: 0 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nota Fiscal</TableCell>
                <TableCell align="left">Cliente</TableCell>
                <TableCell align="left">Vendedor</TableCell>
                <TableCell align="center">Data da Venda</TableCell>
                <TableCell align="center">Valor Total</TableCell>
                <TableCell align="center">Opções</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sells?.map((row: Sell) => (
                <TableRow key={row.invoice} sx={{ fontWeight: 'thin' }}>
                  <TableCell component="th" scope="row">
                    {row.invoice}
                  </TableCell>
                  <TableCell align="left">{row.client.id_person.name}</TableCell>
                  <TableCell align="left">{row.seller.id_person.name}</TableCell>
                  <TableCell align="center">{formatDate(row.sell_date)}</TableCell>
                  <TableCell align="center">{formatCurrency(row.products[0].unit_value)}</TableCell>
                  <TableCell align="center">
                    <EditNoteIcon className="text-custom-green cursor-pointer" />
                    <Button
                      onClick={() => {
                        setOpenDeleteModal(true);
                        setIdSelected(row.id);
                      }}
                    >
                      <DeleteIcon className="text-custom-red cursor-pointer" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <DeleteModal open={openDeleteModal} handleClose={() => setOpenDeleteModal(false)} idSell={idSelected} />
    </>
  );
};

export default BasicTable;
