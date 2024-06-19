import * as React from 'react';
import * as S from "../stylesheets/check";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Filter() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>필터</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.filterbox>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            필터
          </Typography>
          <S.filterlist />
        </S.filterbox>
      </Modal>
    </div>
  );
}

// mt == 글과 글 사이에 세로 간격