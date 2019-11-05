import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LanguageSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Language</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value={'Java'}>Java</option>
          <option value={'Python'}>Python</option>
          <option value={'Python3'}>Python3</option>
          <option value={'C++'}>C++</option>
        </Select>
      </FormControl>
      
    </div>
  );
}
