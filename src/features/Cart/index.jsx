import { Box, Container, Typography } from '@material-ui/core';
import { cartItemsCountSelector } from 'features/Cart/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import formatPrice from 'utils/common';
import ListPage from './page/ListPage';
import { cartTotalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  console.log(cartItemsCount);

  return (
    <Box>
      <Container>
        <Typography variant="h5" style={{ marginLeft: '20px' }}>
          Giỏ hàng có {cartItemsCount} sản phẩm
        </Typography>
      </Container>
      <Container>
        <ListPage />
      </Container>
      <Container>
        <Typography variant="h5" style={{ marginLeft: '20px' }}>
          Tổng tiền = {formatPrice(cartTotal)}
        </Typography>
      </Container>
    </Box>
  );
}

export default CartFeature;
