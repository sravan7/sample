import React from 'react';
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: theme.spacing(2),
        color:'#ffffff',
        fontSize:'0.85rem',
        "&:hover":{
            
        },
        "&.active":{
            color:'#ff8a00',
            '&::before':{
                position: 'absolute',
                left:0,
                content:'""',
                height:'100%',
                border:'2px solid #ff8a00',
                borderRadius: '0 10px 10px 0',
            }
        },
        cursor:'pointer',
        position: 'relative',
        
    }
}))
export default function MenuItem(props) {
    const  classes = useStyles()
    const {text,handleClick,active=''}=props
    return (
       <Box className={`${classes.container} ${active}`} square onClick={handleClick}>
            {text}
       </Box>
    )
}