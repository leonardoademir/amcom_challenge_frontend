import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatCurrency } from '@/utils';
import { SelectedProduct } from '@/interface';
import { useContext } from 'react';
import { SellsContext } from '@/context/sellContext';
import useSells from '@/hooks/useSells';

const ProductsTable = () => {
  const { selectedProducts } = useContext(SellsContext);
  const { handleClickRemoveProduct } = useSells();
  console.log(selectedProducts);
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650, border: 0 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Produtos/Serviço</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="center">Preço Unitário</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedProducts?.map((row: SelectedProduct) => (
              <TableRow key={row.product.id} sx={{ fontWeight: 'thin' }}>
                <TableCell component="th" scope="row">
                  {row.product.code} - {row.product.description}
                </TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{formatCurrency(row.product.unit_value)}</TableCell>
                <TableCell align="center">
                  {formatCurrency(row.quantity * row.product.unit_value)}
                  <Button>
                    <DeleteIcon
                      onClick={() => handleClickRemoveProduct(row.product)}
                      className="text-custom-red cursor-pointer"
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsTable;
