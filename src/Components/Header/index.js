import React from 'react';
import {Card,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        width:'100%',
        height:'56px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'lightblue',
        
    }
}))
export default function Header(props) {
    const  classes = useStyles()
    return (
       <Paper elevation={1} square className={classes.container}>
                {[...Array(3).keys()].map((value, index) => (
                <div key={`unique${index}`} className={classes.box}>
                    {index}
                </div>
            ))}
       </Paper>
    )
}