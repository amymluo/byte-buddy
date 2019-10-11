import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function createRadios(props) {
    const selected = props.selected;
    return(
        <FormControlLabel
        control={<Checkbox checked={props.val[selected]} onChange={props.handleChange(selected)} value={selected} />}
        label={selected}
      />
    );
}

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const values = props.values;

    const selectedMap = values.reduce(function(obj, v) {
      obj[v] = false;
      return obj;
    }, {})

  const [state, setState] = React.useState({
    val: selectedMap,
    title : props.title
  });
  

  const handleChange = name => event => {
      const currVal = state.val[name]
      state.val[name] = !currVal

    setState({ ...state, 
    });

    props.callbackFromParent(state);
  };


const questions = values.map(p => createRadios({handleChange: handleChange, val: state.val, selected: p}));

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{props.title}</FormLabel>
        <FormGroup>

            {questions}


        </FormGroup>
      </FormControl>

    </div>
  );
}
