import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Collapse from '@mui/material/Collapse/Collapse';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatCurrency, formatDate } from '@/utils';
import DeleteModal from './DeleteModal';
import useSells from '@/hooks/useSells';
import { Product, Sell } from '@/interface';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';

const SellsTable = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openCollide, setOpenCollide] = useState('');
  const [idSelected, setIdSelected] = useState(0);
  const { sells, isLoading } = useSells();
  console.log(sells);
  return (
    <>
      {isLoading ? (
        <h1 className="text-5xl">Carregando...</h1>
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 650, border: 0 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
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
                <>
                  <TableRow key={row.invoice} sx={{ fontWeight: 'thin' }}>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenCollide(openCollide === row.invoice ? '' : row.invoice)}
                      >
                        {openCollide == row.invoice ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
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
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                      <Collapse in={openCollide == row.invoice} timeout="auto" unmountOnExit>
                        <Table size="small" aria-label="products">
                          <TableHead>
                            <TableRow>
                              <TableCell align="left"></TableCell>
                              <TableCell align="left">Produtos/Serviço</TableCell>
                              <TableCell>Quantidade</TableCell>
                              <TableCell align="center">Preço unitário</TableCell>
                              <TableCell align="center">Total do Produto</TableCell>
                              <TableCell align="center">% de Comissão</TableCell>
                              <TableCell align="center">Comissão</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {row?.products?.map((p) => {
                              return (
                                <TableRow key={p.code} sx={{ fontWeight: 'thin' }}>
                                  <TableCell align="left"></TableCell>
                                  <TableCell align="left" className="w-80">
                                    {p.code} - {p.description}
                                  </TableCell>
                                  <TableCell>{p.quantity}</TableCell>
                                  <TableCell align="center">{formatCurrency(p.unit_value)}</TableCell>
                                  <TableCell align="center">{formatCurrency(p.unit_value * p.quantity)}</TableCell>
                                  <TableCell align="center">{p.comis_percentage}</TableCell>
                                  <TableCell align="center">
                                    {formatCurrency(p.unit_value * p.quantity * p.comis_percentage * 0.01)}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <DeleteModal open={openDeleteModal} handleClose={() => setOpenDeleteModal(false)} idSell={idSelected} />
    </>
  );
};

export default SellsTable;
