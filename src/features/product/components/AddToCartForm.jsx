import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import QuanTityField from 'components/form-control/QuantityField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    backgroundColor: '#333333',
    '&:hover': {
      background: '#5c5c5c',
    },
    marginTop: theme.spacing(3),
    maxWidth: '250px',
  },
}));

function AddToCartForm({ onSubmit = null }) {
  const classes = useStyles();

  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, 'Please enter at least 1')
      .required('Please enter quantity')
      .typeError('Please enter a number'),
  });
  const form = useForm({
    defaultValues: {
      quantity: Number(0),
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuanTityField name="quantity" label="Quantity" form={form} />

      <Button
        disabled={isSubmitting}
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="small"
      >
        Buy
      </Button>
    </form>
  );
}

export default AddToCartForm;
