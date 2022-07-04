import { Box, Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Product from './Product';

ProductList.propTypes = {
  data: PropTypes.array,
};
ProductList.defaultProps = {
  data: [],
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ProductList({ data }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
