import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Paper } from '@material-ui/core';
import DOMPurify from 'dompurify';

ProductDescription.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: '#fff',
  },
}));

function ProductDescription({ product = {} }) {
  const classes = useStyles();

  //   render an toan du lieu HTML len UI
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper className={classes.root}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
