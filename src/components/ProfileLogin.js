import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import { 
    TextField,
    Button, 
    Avatar, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText,
    DialogTitle, 
    Dialog, 
    DialogContent,
    Grid,
    Typography,
    IconButton,
    Divider, 
    FormControlLabel,
    Colors,
    Checkbox,
    DialogActions,
} from '@mui/material';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Web3 from 'web3/dist/web3.min.js'
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import axios from 'axios';


const ProfileLogin = (props) => {

    //const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    //const {authenticate, isAuthenticated, isAuthenticating, user, account, logout} = useMoralis();
    let web3 = new Web3();
    const {btnText} = props;
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [open, setOpen] = useState();
    const [btnStatus, setBtnStatus] = useState();
    const [magickey, setMagicKey] = useState(env.MAGIC_LINK_API_KEY);
    const magic = new Magic(magickey, {
        extensions: [new OAuthExtension()]
    });
    const [email, setemail] = useState();
    const [phone, setphone] = useState();

    
    useEffect(() => {
        
    });

    const emailAddress = async (e) => {
        console.log(`By email ${email}`)
        //save email info alread
        axios.get(`${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/users/exist/${email}`)
        .then(response => {
            let exist = response.data
            console.log(`email exist ${exist}`)
            if(!exist) {
                //insert nothing else to do if email already exsit.
                axios({
                    method: 'post',
                    url: `${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/users/save`,
                    data: {
                            "given_name": "",
                            "family_name": "",
                            "phonenumber":"",
                            "nickname": "",
                            "name": "",
                            "picture": "",
                            "locale": "en",
                            "updated_at": "",
                            "email": email,
                            "email_verified": false,
                            "sub": ""
                    }
                })
            }
            return email
        })
        .then( email => {
            magic.auth.loginWithMagicLink({
                email: email,
                showUI: true,
                redirectURI: `${env.BASE_URL}/feeds`
            })
            return email;
        })
        
    }

    const phoneNumber = async (e) => {
        //e.preventDefault();
        console.log(`By phone ${phone}`);
        const DID = await magic.auth.loginWithSMS({
            phoneNumber: `+${phone}`,
            redirectURI: `${env.BASE_URL}/feeds`
        });
    }

    const handleDialogClose = () => {
        setOpen(false);
        /*setTerms(false);
        setChain("");
        setWallet("");*/
        setBtnStatus(true);
    };

    
    /*const login = async () => {
        console.log(`login triggered ${email}`)
        await magic.oauth.loginWithRedirect({
            email: email,
            showUI: true,
            redirectURI: "https://dev.fungeapp.com/profile"
        });
    }*/

        return(
            <>
            {isAuthenticated && btnText === 'Sign-In' ?
                <button className={"btn btn-success"} ></button> :
    
                <button onClick={() => setOpen(true)} className="btn-primary btn">
                    {btnText}
                </button>}
                    <Dialog
                        open={open}
                        width="500px"
                        fullWidth={true}
                        onClose={handleDialogClose}
                    >
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogContent>
                            <List>
                                <ListItem>
                                    <Typography variant="h6" xs={12} color="initial">
                                    Hey! Welcome to Funge. Please login or sign up with your email address or mobile number.
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setemail(e.target.value)}/>
                                </ListItem>
                                <ListItem>
                                    <Grid container alignItems={"center"} spacing={2}>
                                        <Grid item xs={4}>
                                            <Button
                                                aria-label="Email"
                                                className='btn-primary:hover'
                                                onClick={(e) => emailAddress(e)}
                                            >
                                                <img alt={''} src={"./assets/images/email.svg"}/>
                                                
                                            </Button>
                                            <br/>
                                            Login by Email
                                        </Grid>
                                        
                                    </Grid>
                                </ListItem>
                                <br/>
                                <ListItem>
                                    <TextField id="outlined-basic" label="Mobile" variant="outlined" onChange={(e) => setphone(e.target.value)}/>
                                </ListItem>
                                <ListItem>
                                <Grid container alignItems={"center"} spacing={2}>
                                <Grid item xs={4}>
                                            <Button
                                                aria-label="Phone Number"
                                                className='btn-primary:hover'
                                                onClick={(e) => phoneNumber(e)}
                                            >
                                                <img alt={''} src={"./assets/images/wallet_connect.svg"}/>
                                                
                                            </Button>
                                            <br/>
                                           Login by Mobile Number
                                        </Grid>
                                </Grid>
                                </ListItem>
                            </List>
                        </DialogContent>
                        
                    </Dialog>
                </>
        );
    
    
}

export default ProfileLogin;