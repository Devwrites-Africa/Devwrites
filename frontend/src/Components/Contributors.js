import React from 'react';
import { 
        Grid, 
        Card, 
        CardHeader,
        CardContent, 
        Avatar, 
        Typography 
} from '@mui/material';

const Contributors = ()=> {
    return (
        <div style={{
            height: '100vh',
        }} className='contribute'>
            <Grid container >
                <Grid item xs={2}>
                    <Card sx={{ maxWidth: '700px'}}>
                        <CardHeader sx={{
                            display:'flex',
                            flexDirection: 'column',
                        }} 
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 80, height: 80, marginBottom: '10px' }}
                                />
                            }
                            titleTypographyProps={{
                                variant: 'h5', 
                                textAlign: 'center',
                                fontWeight: '600'
                            }}
                            title='Chosen Vincent'

                            subheaderTypographyProps={{variant: 'h6', textAlign: 'center'}}
                            subheader='Web Developer'
                        />
                        <CardContent>
                            
                            <Typography 
                                variant='body'
                                align='justify'
                            >
                                Let’s add a button to our component and update state whenever the button is clicked. 
                                To achieve this, we will add an onClick event to 
                                the button and use the state setter function to update the 
                                state when the button is clicked.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contributors