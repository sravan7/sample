import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: theme.spacing(2),
        color: '#ffffff',
        '&>*': {
            marginRight: theme.spacing(1),
        },
    },
    box: {
        width: '300px',
        padding: theme.spacing(2),
        margin: theme.spacing(1, 2),
        backgroundColor: '#2196f3',
    },
}))
export default function Home(props) {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            {[...Array(100).keys()].map((value, index) => (
                <div key={`unique${index}`} className={classes.box}>
                    {index}
                </div>
            ))}
        </div>
    )
}
