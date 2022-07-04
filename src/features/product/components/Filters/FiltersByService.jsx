import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  list: {
    padding: 0,
    listStyleType: 'none',

    '& > li': {
      margin: 0,
    },
  },
}));

FiltersByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FiltersByService({ filters = {}, onChange }) {
  const classes = useStyle();
  //   const [values, setValues] = useState({
  //     isPromotion: Boolean(filters.isPromotion),
  //     isFreeShip: Boolean(filters.isFreeShip),
  //   });

  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    // setValues((prevValues) => ({
    //   ...prevValues,
    //   [name]: checked,
    // }));
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Dịch Vụ</Typography>
      <ul className={classes.list}>
        {[
          { value: 'isPromotion', label: 'Có khuyến mãi' },
          { value: 'isFreeShip', label: 'Có FreeShip' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="secondary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FiltersByService;
