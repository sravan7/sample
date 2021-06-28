import React from 'react';
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    wrapper:{
        width:'100%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&>*':{
            marginRight: theme.spacing(1)
        }
    }
}))
export default function Login(props) {
    const  classes = useStyles()
    return (
        <div className={classes.wrapper}>
           <div style={{height:'1208px'}}>
               
           </div>
        </div>
    )
}