import React from 'react'; 
import { FormGroup, TextField, Grid, Button, Link } from '@material-ui/core';

import '../style/styles.css';
import image from '../images/logo.png';

const Register = () => {

    return (
    <FormGroup id="form-cadastro">
        <Grid container direction="column" alignItems="center">
          <Grid container item xs={3}>
            <h1>Cadastro de usuário</h1>
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
                id="name"
                label="Nome"
                name="name"
                autoComplete="name"
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
                  Cadastrar
                </Button>
              </Grid>
                
            </Grid>
          </Grid>
        </div>
      </FormGroup>
        
    );
}

export default Register;