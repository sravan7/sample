import React from 'react';
import {Card,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        width:'100%',
        display: 'flex',
        flexWrap: 'wrap',
    }
}))
export default function AppContainer(props) {
    const  classes = useStyles()
    return (
       <Paper className={classes.container}>
           {props.children}
       </Paper>
    )
}