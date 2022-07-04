import { Box } from '@material-ui/core';
import AlbumList from './components/albumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'iPhone 12 vs iPhone 13: Nên mua điện thoại nào trong năm 2022?',
      thumbnailUrl:
        'https://images.fpt.shop/unsafe/fit-in/275x183/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/13/637854830187081820_iphone-12-vs-iphone-13-cover.jpg',
    },
    {
      id: 2,
      name: 'Cùng tầm giá, mua iPhone 12 hay iPhone 13 mini hợp lý hơn?',
      thumbnailUrl:
        'https://images.fpt.shop/unsafe/fit-in/275x183/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/20/637809852703955040_cover.png',
    },
    {
      id: 3,
      name: 'Có trên dưới 20 triệu, mua Samsung Galaxy S22 hay iPhone 12 hợp lý hơn?',
      thumbnailUrl:
        'https://images.fpt.shop/unsafe/fit-in/275x183/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/14/637804754920499259_cover.jpg',
    },
    {
      id: 4,
      name: 'Sắm iPhone chơi Tết, đâu là lựa chọn phù hợp với bạn',
      thumbnailUrl:
        'https://images.fpt.shop/unsafe/fit-in/275x183/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637787901876331876_iphone-13-va-iphone-13-mini-01.jpeg',
    },
    {
      id: 5,
      name: '7 mẫu iPhone chính hãng đang giảm giá tại FPT Shop sau khi iPhone 13 ra mắt',
      thumbnailUrl:
        'https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/2/637714741924634262_7-mau-iphone-chinh-hang-giam-gia-tai-fpt-shop-sau-khi-iphone-13-ra-mat-0.jpg',
    },
    {
      id: 6,
      name: 'So sánh iPhone 12 series và iPhone 13 series dựa trên những thông tin rò rỉ',
      thumbnailUrl:
        'https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/23/637626576258094804_gsmarena_002.jpg',
    },
  ];
  return (
    <Box pt={12}>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList}></AlbumList>
    </Box>
  );
}

export default AlbumFeature;
