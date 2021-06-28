import React from 'react';
import {Card,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        width:'156px',
        height:'calc(100vh - 56px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightblue',
        border:'1px solid blue'
    }
}))
export default function SideBar(props) {
    const  classes = useStyles()
    return (
       <Paper className={classes.container}>

       </Paper>
    )
}