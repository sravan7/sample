import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles((theme) => ({
    formControl: {
        // padding: theme.spacing(1),
    },
    inputRoot:{
        marginTop:'24px !important',
    },
    input: {
        marginTop: '4px',
        border: '1px solid #bdbdbd',
        borderRadius: '4px',
        padding: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
        '&:disabled':{
            backgroundColor:'#ddd',
      },
    },
    label: {
        color: '#222',
        fontWeight:'600'
    },
    asterisk:{
        color: 'red',
        marginLeft:'16px',
    }
}))

export default function CustomInput(props) {
    const classes = useStyles()
    const {
        value,
        handleChange,
        required,
        id,
        label = '',
        type = 'text',
        placeholder ='',
        disabled=false
    } = props
    return (
        <FormControl fullWidth className={classes.formControl}>
            {label ? (
                <InputLabel
                    classes={{ root: classes.label,asterisk:classes.asterisk }}
                    htmlFor={id}
                    shrink={true}
                    variant="standard"
                    required={required}
                >
                    {label}
                </InputLabel>
            ) : null}
            <Input
                id={id}
                disableUnderline={true}
                classes={{root:classes.inputRoot,input: classes.input }}
                size="small"
                margin="dense"
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
            />
        </FormControl>
    )
}
