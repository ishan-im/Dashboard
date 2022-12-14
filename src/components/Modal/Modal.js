import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import { useFetch } from "../../lib/useFetch";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({user,children}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

const {data, error, status} = useFetch(`https://jsonplaceholder.typicode.com/photos/${user.id}`)

  return (
    <div>
      <Button onClick={handleClickOpen}>
        {children}
      </Button>
         
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {user.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {status === 'error' && <div>{error}</div>}
          {status === 'fetching' && <div>Loading...</div>}
          {status === 'fetched' && <img src={data.url} alt='avatar__image' style={{width:'50px', height:'50px'}}/ >}
          
          <Typography gutterBottom>
            Address: {user.address.city}, Street: {user.address.street}, zip: {user.address.zipcode} ,Phone No: {user.phone}
          </Typography>
          <Typography gutterBottom>
            Website: {user.website}, Company: {user.company.name}
          </Typography>
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
}


 