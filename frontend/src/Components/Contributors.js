import React from 'react';
import { 
        Grid, 
        Card, 
        CardHeader,
        CardContent, 
        Avatar, 
        Typography,
        createTheme,
        ThemeProvider
} from '@mui/material';

const theme = createTheme();

theme.typography.body2 = {
    fontSize: '18px',
    fontFamily: 'Inter',
}

const styles = {
    card: {
        maxWidth: '335px',
        borderRadius: '10px',
        background: '#f5f5f5'
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardHeaderTitle: {
        variant: 'h5',
        fontWeight: '600',
        fontFamily: 'Inter'
    }
}

const Contributors = ()=> {
    return (
        <div>
            <Grid container spacing={3} sx={{paddingBlock: '20px'}} align='center'>
                <Grid item xs={12} md={4} xl={3}>
                    <Card sx={styles.card} elevation={0}>
                        <CardHeader sx={styles.cardHeader}
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 80, height: 80, marginBottom: '10px' }}
                                />
                            }
                            titleTypographyProps={styles.cardHeaderTitle}
                            title='Chosen Vincent'

                            subheaderTypographyProps={{
                                variant: 'h6', 
                                textAlign: 'center'
                            }}
                            subheader='Web Developer'
                        />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography 
                                    variant='body2'
                                    align='justify'
                                >
                                    Let’s add a button to our component and update state whenever the button is clicked. To achieve this, we will add an onClick event to the button and use the state setter function to update the state when the button is clicked.
                                </Typography>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contributors