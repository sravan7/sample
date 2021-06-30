import React from 'react';
import {Card,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import MenuItem from './MenuItem';
import {Drawer} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
    container:{
        width:'240px',
        height:'calc(100vh - 56px)',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        backgroundColor:'#202035',
        padding: theme.spacing(2,0)
    },
    drawer:{
        top:'56px !important'
    }
   
}))
export default function SideBar(props) {
    const  classes = useStyles()
    const {open,isDownSM}=props
    return (    
        <Drawer ModalProps={{BackdropProps:{classes:{root:classes.drawer}}}} classes={{paper:classes.drawer,modal:classes.drawer}} open={isDownSM?open:true} variant={isDownSM?'temporary':'permanent'}>
                <Paper className={classes.container} square>
            <MenuItem text={'Name Card'} handleClick={()=>{console.log('clicked')}} />
            <MenuItem text={'Login And Passsword'} active={''} handleClick={()=>{console.log('clicked')}} />
            <MenuItem text={'Profile'} active={'active'} handleClick={()=>{console.log('clicked')}} />
                </Paper>
          </Drawer>
       
    )
}