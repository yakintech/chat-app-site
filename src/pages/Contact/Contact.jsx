import React from 'react'



import { CardContent, FormControl, Button,TextField, Typography,Card,Grid } from '@mui/material';
function Contact() {
  return (
    <div>
      <Typography gutterBottom variant='h3' align='center'>
        React-App
      </Typography>
      <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
     
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
           
        
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField label="First Name" placeholder='Enter first name' variant='outlined' fullWidth/>
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth/>
            </Grid>

            <Grid xs={12}  item>
              <TextField type="email" label="Email" placeholder='Enter email' variant='outlined' fullWidth/>
            </Grid>

            <Grid xs={12} item>
              <TextField type="phone" label="Phone" placeholder='Enter your phone number' variant='outlined' fullWidth/>
            </Grid>

            
            <Grid xs={12} item>
              <TextField  label="Message" multiline rows={4} placeholder='Enter your message' variant='outlined' fullWidth/>
            </Grid>

            <Grid xs={12} item>
             <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>


          </Grid>

       
      
      </Card>
      </Grid>
    </div>
  )
}

export default Contact