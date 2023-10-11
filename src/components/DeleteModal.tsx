import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer } from 'react-toastify';
import useSells from '@/hooks/useSells';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #000',
  color: '#42474A',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  idSell: number;
}

const DeleteModal: React.FC<Props> = ({ open, handleClose, idSell }) => {
  const { handleDelete } = useSells();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className="border-b gap-5 border-black" variant="h6" component="h2">
            Remover Venda
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            Deseja remover essa venda?
          </Typography>

          <div className="align-bottom justify-end m-auto items-end text-end">
            <button
              onClick={() => handleClose(false)}
              className="bg-white text-custom-green border rounded py-2 px-4 w-20 mx-2"
            >
              Não
            </button>
            <button
              onClick={() => handleDelete(idSell)}
              className="bg-custom-green text-white border rounded py-2 px-4 w-20 mx-2"
            >
              Sim
            </button>
          </div>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default DeleteModal;
