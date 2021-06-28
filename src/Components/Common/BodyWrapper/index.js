import React from 'react';
import {Card,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        width:'calc(100% - 156px)',
        height:'calc(100vh - 56px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightblue',
        border:'1px solid yellow',
        overflowY:'scroll'
    }
}))
export default function SideBar(props) {
    const  classes = useStyles()
    return (
       <div className={classes.container}>
            {props.children}
       </div>
    )
}