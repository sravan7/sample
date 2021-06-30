import React from 'react';
import {Box,Paper,IconButton, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme)=>({
    container:{
        position: 'absolute',
        zIndex:theme.zIndex.drawer+1,
        width:'100%',
        height:'56px',
        display: 'grid',
        gridTemplateColumns:'auto auto',
        justifyContent: 'space-between',
        alignItems: 'center',    
        padding: theme.spacing(0,3),
        overflowX:'scroll',    
    },
    menuIcon:{
        display: 'none',
        [theme.breakpoints.down('sm')]:{
            display: 'block',
            margin:'0 8px',
        }
    },
    pageName:{
        padding:theme.spacing(0,2),
        color:'grey',
    }
}))

export default function Header(props) {
    const  classes = useStyles()
    const {handleClick,}=props
    const TextItem = ({text})=>{
        return <Typography className={classes.pageName}>{text}</Typography>
    }
    return (
       <Paper elevation={2} square className={classes.container}>
           <Box style={{display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
               <IconButton className={classes.menuIcon} disableRipple={true} onClick={handleClick}  >
                    <MenuIcon style={{color:'#000000'}} />
               </IconButton>
                <img src={'http://via.placeholder.com/180x36'} alt="bornto logo" />
                <TextItem text="Dashboard" />
           </Box>
           <Box style={{display:'flex',alignItems: 'center',justifyContent: 'space-between'}}>
           <TextItem text="Support" />
           <TextItem text="Help" />
                <Box style={{display:'flex',alignItems: 'center',justifyContent:'space-between',paddingLeft:'16px'}}>
                    <AccountCircleIcon />
                    <Typography style={{paddingLeft:'8px'}}>Admin</Typography>
                    <ExpandMoreIcon />
                </Box>
           </Box>
       </Paper>
    )
}