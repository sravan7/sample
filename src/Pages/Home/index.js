import React,{useState} from 'react'
import { Box,Typography,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CustomInput from "../../Components/CustomInput"
const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        padding: theme.spacing(2),
        '&>*': {
            marginRight: theme.spacing(1),
        },
    },
    subheader:{
        color:'#ff8a00',
        padding: theme.spacing(0.5,0)
    },
    content:{
        height:'100%',
        backgroundColor:'#fffcf8',
        padding: theme.spacing(3,1),
        display: 'flex',
        flexDirection: 'column',
        flexWrap:'wrap',
    },
    profileSection:{
        padding: theme.spacing(0,3),
        display: 'flex',
        flexWrap:'wrap',
        position:"relative"
    },
    profile:{
        marginTop: theme.spacing(3),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button:{
        backgroundColor:'#ffbe00',
        color:'#ffbe00',
        borderRadius:'20px',
        width:'200px',
        height:'40px',
        color:'#000000',
        padding: theme.spacing(0,2),
        "&:hover":{
            backgroundColor:'#ffbe00',
        }
    },
    btnWrapper:{
       display:'flex',
       alignItems: 'center',
       justifyContent: 'center',
       marginLeft:'32px',
       flexDirection:'column',
       [theme.breakpoints.down('xs')]:{
        marginLeft:'0',
        margin: theme.spacing(2,0)
       }

    },
    inputparent:{
        marginRight:theme.spacing(2),
        marginBottom:theme.spacing(2),
        width:'300px',
        [theme.breakpoints.down('sm')]:{
            width:'200px',
        }
    },
    aboutMe:{
        borderRadius:'4px',
        border:'1px solid #bdbdbd',
        padding: theme.spacing(2,1),
    }
}))
export default function Home(props) {
    const classes = useStyles()
    const [name,setName] = useState('')
    const handleChange = (event)=>{
        setName(event.target.value)
    }
    return (
        <div className={classes.wrapper}>
            <Box className={classes.subheader}>BontoPlus Doctors Profile</Box>
            <Box className={classes.subheader}>Profile</Box>
            <Box className={classes.content}>
                    <Box className={classes.profileSection}>
                            <Box style={{position:'absolute',color:'red',right:'24px',}}>Note: To change Emial Addres rais ticke to support</Box>
                            <Box className={classes.profile}>
                                    <img src={'http://via.placeholder.com/140x180'} alt={'user name'} />
                                    <Box className={classes.btnWrapper}>
                                        <Button
                                        variant="contained"
                                        className={classes.button}
                                        startIcon={<CloudUploadIcon />}
                                        >Upload Image</Button>
                                    <Typography style={{color: 'grey',padding:'4px 0'}}>Allowed JPG, Gif, png</Typography>
                                    </Box>
                            </Box>
                            <Box style={{paddingTop:'16px',display: 'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                                        <Box className={classes.inputparent}>
                                                <CustomInput id="fullName" label={'Username'} handleChange={handleChange} value={name} required={true} />
                                        </Box> 
                                        <Box className={classes.inputparent}>
                                                <CustomInput id="fullName" label={'Username'} handleChange={handleChange} value={name} required={true} />
                                        </Box> 
                                        <Box className={classes.inputparent}>
                                                <CustomInput id="fullName" label={'Username'} handleChange={handleChange} value={name} required={true} />
                                        </Box> 
                                        <Box className={classes.inputparent}>
                                                <CustomInput disabled={true} id="fullName" label={'Username'} handleChange={handleChange} value={name} required={true} />
                                        </Box>                               
                            </Box>
                    </Box>
                    <Box className={classes.aboutMe}>
                        <Typography variant='h6'>About Me</Typography>
                    </Box>
            </Box>
        </div>
    )
}
