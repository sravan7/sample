import React from 'react';
import {Card,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        width:'calc(100% - 240px)',
        height:'calc(100vh - 56px - 16px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY:'scroll',
        marginTop:theme.spacing(2),
        position: 'absolute',
        left:'240px',
        top:'56px',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            left:'0'
        }
    },
    content:{
        position: 'absolute',
        top:'0px',
        width:'100%',
    }
}))
export default function SideBar(props) {
    const  classes = useStyles()
    return (
       <div className={classes.container}>
           <div className={classes.content}>
           {props.children}
           </div>
       </div>
    )
}