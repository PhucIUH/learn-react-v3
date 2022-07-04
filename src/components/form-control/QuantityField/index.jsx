import { Box, FormHelperText, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

QuanTityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    maxWidth: '200px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
}));

function QuanTityField(props) {
  const { form, name, label } = props;
  const { control, setValue } = form;

  const classes = useStyles();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, error } }) => (
          <>
            <FormControl error={isTouched && invalid} fullWidth margin="normal" variant="outlined" size="small">
              <Typography>{label}</Typography>
              <Box className={classes.box}>
                <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <OutlinedInput
                  id={name}
                  error={invalid}
                  type="number"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
                <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Box>
            </FormControl>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </>
        )}
      />
    </div>
  );
}

export default QuanTityField;
