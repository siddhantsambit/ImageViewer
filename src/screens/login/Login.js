import React, {Component} from 'react';
import Header from '../../common/header/Header.js';
import './Login.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import indigo from '@material-ui/core/colors/indigo';


const styles = theme => ({
    card: {
        maxWidth: '25%',
        margin: 'auto',
        marginTop: 20,
        padding: 40,
    },
    loginForm: {
        width: '100%',
        marginTop: 20,
    },
    inputLabel: {
        '&$inputFocused': {
            color: indigo[500],
        },
    },
    inputFocused: {},
    inputUnderline: {
        '&:after': {
            borderBottomColor: indigo[500],
        },
    },
    
  });

  

class Login extends Component{
    constructor() {
        super();
        this.state = {
            userName: '',
            usernameRequired: false,
            userPassword: '',
            userpasswordRequired: false,
            incorrectCredentials: false,
        }
    }

    usernameChangeHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    passwordChangeHandler = (event) => {
        this.setState({ userPassword: event.target.value });
    }

    loginClickHandler = () => {
        this.state.userName === '' ? this.setState({ usernameRequired: true, incorrectCredentials: false }) : this.setState({ usernameRequired: false });
        this.state.userPassword === '' ? this.setState({ userpasswordRequired: true, incorrectCredentials: false }) : this.setState({ userpasswordRequired: false });

        if (this.state.userName && this.state.userPassword) {
            // initialize with username and password for log in
            let username = 'usr';
            let password = 'pwd';
            let accessToken = '8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784';
            if (username === this.state.userName && password === this.state.userPassword) {
                sessionStorage.setItem('access-token', accessToken);
                this.props.history.push('/home');
            } else {
                this.setState({ incorrectCredentials: true })
            }
        }
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                {/* rendering Header component from common */}
                <Header />

            <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                LOGIN
              </Typography>
              <FormControl required className={classes.loginForm}>
                  {/* username field */}
                            <InputLabel
                                htmlFor='userName'
                                classes={{
                                    root: classes.inputLabel,
                                    focused: classes.inputFocused,
                                }}
                            >
                                Username
                            </InputLabel>
                            <Input
                                id='userName'
                                type='text'
                                username={this.state.userName}
                                classes={{
                                    underline: classes.inputUnderline,
                                }}
                                onChange={this.usernameChangeHandler}
                            />
                            {this.state.usernameRequired ?
                                <FormHelperText error={true}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                                : ''
                            }
                        </FormControl>

                        <form>
                            <FormControl required className={classes.loginForm}>
                                {/* user password field */}
                                <InputLabel
                                    htmlFor='loginPassword'
                                    classes={{
                                        root: classes.inputLabel,
                                        focused: classes.inputFocused,
                                    }}
                                >
                                    Password
                            </InputLabel>
                                <Input
                                    autoComplete='off'
                                    id='loginPassword'
                                    type='password'
                                    userpassword={this.state.userPassword}
                                    classes={{
                                        underline: classes.inputUnderline,
                                    }}
                                    onChange={this.passwordChangeHandler}
                                />
                                {this.state.userpasswordRequired ?
                                    <FormHelperText error={true}>
                                        <span className='red'>required</span>
                                    </FormHelperText>
                                    : ''
                                }
                            </FormControl>
                        </form>
                        {/* display error message if credentials are wrong*/}
                        {this.state.incorrectCredentials ?
                            <FormControl>
                                <FormHelperText error={true}>
                                    <span className='red'>Incorrect username and/or password</span>
                                </FormHelperText>
                            </FormControl>
                            : ''
                        }
                        <br /><br />
                        {/* Login button */}
                        
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={this.loginClickHandler}
                        >
                            LOGIN
                        </Button>
              
            </CardContent>
            
          </Card>
          </div>
        )
    }
}

export default withStyles(styles)(Login);