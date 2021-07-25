import contact from "./../styles/contact.module.css"
import { alpha, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '22ch',
        marginTop: '10ch',
        // marginLeft: '6ch',
        borderRadius: 6,
        backgroundColor: '#fcfcfb',
        borderColor: 'green',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
           '&:hover': {
        backgroundColor: 'lightgray',
             },
          '&$focused': {
              backgroundColor: '#fff',
              boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
              borderColor: theme.palette.primary.main,
          },
      },
    },

    margin: {
        margin: theme.spacing(1),
        color:"#000" ,
        backgroundColor: "#F7B538" ,

      },

  }));


const Contant = () => {
    const classes = useStyles();
    return (  
        <div className = {contact.box }>
            <Grid container>
                <Grid items xs={12} sm={6}>
                     <div className ={contact.textL}>
                       <h1 className = {contact.leftContainer}>We are avaliable</h1>
                        <div className = {contact.timeInfo} >
                            <p>Mon to Fri: 9 am to 5 pm</p>
                            <p>Sat: On special appointment</p>
                        </div>
                     </div>
                   
                </Grid>
            
            <Grid items xs={12}  sm={6}>
                <form className={classes.root} noValidate autoComplete="off" >
                     
                     <TextField  id="outlined-basic" label="First Name" variant="filled" color= "#fff" />
                     <TextField  id="filled-basic" label="Middle Name" variant="filled" />
                     <TextField  id="filled-basic" label="Last Name" variant="filled" />
                     <TextField style={{ marginLeft:0, marginTop: 20, width:705}}  id="filled-basic" label="Email address" variant="filled" />
                     <TextField style={{ marginLeft:0, marginTop: 20, width:705}}  id="filled-basic" label="Write your message" 
                        variant="filled" 
                        multiline
                        rows={5}
                        rowsMax= {7}
                        />

                        
                        <Button 
                        onClick= {()=> console.log('you clickeddd') }
                        type =  "submit"
                        variant="contained" 
                        
                        className={classes.margin}>
                             Submit
                           </Button>
                           
                 </form>
                    
            </Grid>
            </Grid>

           
             
        </div>
    );
}
 
export default Contant;