import React from 'react'; 
import { FormGroup, TextField, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import '../style/styles.css';
import image from '../images/logo.png';

const Login = () => {
    
    return (
      <FormGroup id="form-login">
        <Grid container direction="column" alignItems="center">
          <Grid container item xs={3}>
            <img src={image} id="logo"/>
          </Grid> 
        </Grid> <br/>
        <div id="form">
          <Grid container direction="column" alignItems="center">
            <Grid container item xs={5}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid> 
          </Grid> <br/>
          <Grid container direction="column" alignItems="center">
            <Grid container item xs={5}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Senha"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Grid container item xs={5}>
                <Button id="entrar"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Acessar
                </Button>
              </Grid>
                <Link id="link" to="/register">Ainda não tem cadastro? Cadastre</Link>
            </Grid>
          </Grid>
        </div>
      </FormGroup>
    )
}

export default Login;