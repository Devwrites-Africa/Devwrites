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
import { Box } from '@mui/system';

const theme = createTheme();

theme.typography.body2 = {
    fontSize: '18px',
    fontFamily: 'Futura Bk BT',
}

const styles = {
    box: {
        width: '335px',
        background: 'linear-gradient(90deg, #2DB68F 0%, #A5DFBC 80.17%)',
        textAlign: 'center',
        paddingBlock: '10px',
        margin: '0px auto 0 auto',
        borderRadius: '10px'
    },
    card: {
        maxWidth: '335px',
        borderRadius: '10px',
        background: '#D9D9D9'
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardHeaderTitle: {
        variant: 'h5',
        fontWeight: '600',
        fontFamily: 'Inter'
    },
    subHeaderTitle: {
        variant: 'body1',
        fontFamily: 'Inter',
    }
}

const Contributors = ()=> {
    return (
        <div style={{padding: '20px'}}>
            <Box sx={styles.box}>
                <Typography variant='h5' color='white'>Contributors</Typography>
            </Box>
            <Grid container spacing={3} sx={{paddingBlock: '20px'}} align='center'>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Card sx={styles.card} elevation={0}>
                        <CardHeader sx={styles.cardHeader}
                            avatar={
                                <Avatar
                                    alt="Devwrites Africa"
                                    src=""
                                    sx={{ width: 80, height: 80, marginBottom: '10px', background: '#2DB68F' }}
                                />
                            }
                            titleTypographyProps={styles.cardHeaderTitle}
                            title='Devwrites Africa'

                            subheaderTypographyProps={styles.subHeaderTitle}
                            subheader='Software Developer'
                        />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography 
                                    variant='body2'
                                    align='center'
                                >
                                    Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, vel, eligendi veniam esse qui quasi voluptas 
                                </Typography>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Card sx={styles.card} elevation={0}>
                        <CardHeader sx={styles.cardHeader}
                            avatar={
                                <Avatar
                                    alt="Devwrites Africa"
                                    src=""
                                    sx={{ width: 80, height: 80, marginBottom: '10px', background: '#2DB68F' }}
                                />
                            }
                            titleTypographyProps={styles.cardHeaderTitle}
                            title='Devwrites Africa'

                            subheaderTypographyProps={styles.subHeaderTitle}
                            subheader='Software Developer'
                        />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography 
                                    variant='body2'
                                    align='center'
                                >
                                    Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, vel, eligendi veniam esse qui quasi voluptas 
                                </Typography>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Card sx={styles.card} elevation={0}>
                        <CardHeader sx={styles.cardHeader}
                            avatar={
                                <Avatar
                                    alt="Devwrites Africa"
                                    src=""
                                    sx={{ width: 80, height: 80, marginBottom: '10px', background: '#2DB68F' }}
                                />
                            }
                            titleTypographyProps={styles.cardHeaderTitle}
                            title='Devwrites Africa'

                            subheaderTypographyProps={styles.subHeaderTitle}
                            subheader='Software Developer'
                        />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography 
                                    variant='body2'
                                    align='justify'
                                >
                                    Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, vel, eligendi veniam esse qui quasi voluptas 
                                </Typography>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Card sx={styles.card} elevation={0}>
                        <CardHeader sx={styles.cardHeader}
                            avatar={
                                <Avatar
                                    alt="Devwrites Africa"
                                    src=""
                                    sx={{ width: 80, height: 80, marginBottom: '10px', background: '#2DB68F' }}
                                />
                            }
                            titleTypographyProps={styles.cardHeaderTitle}
                            title='Devwrites Africa'

                            subheaderTypographyProps={styles.subHeaderTitle}
                            subheader='Software Developer'
                        />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography 
                                    variant='body2'
                                    align='center'
                                >
                                    Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, vel, eligendi veniam esse qui quasi voluptas 
                                </Typography>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Card sx={styles.card} elevation={0}>
                        <CardHeader sx={styles.cardHeader}
                            avatar={
                                <Avatar
                                    alt="Devwrites Africa"
                                    src=""
                                    sx={{ width: 80, height: 80, marginBottom: '10px', background: '#2DB68F' }}
                                />
                            }
                            titleTypographyProps={styles.cardHeaderTitle}
                            title='Devwrites Africa'

                            subheaderTypographyProps={styles.subHeaderTitle}
                            subheader='Software Developer'
                        />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography 
                                    variant='body2'
                                    align='center'
                                >
                                    Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, vel, eligendi veniam esse qui quasi voluptas 
                                </Typography>
                            </ThemeProvider>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <Card sx={styles.card} elevation={0}>
                        <CardHeader sx={styles.cardHeader}
                            avatar={
                                <Avatar
                                    alt="Devwrites Africa"
                                    src=""
                                    sx={{ width: 80, height: 80, marginBottom: '10px', background: '#2DB68F' }}
                                />
                            }
                            titleTypographyProps={styles.cardHeaderTitle}
                            title='Devwrites Africa'

                            subheaderTypographyProps={styles.subHeaderTitle}
                            subheader='Software Developer'
                        />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography 
                                    variant='body2'
                                    align='center'
                                >
                                    Nihil, aperiam, ad molestiae ut enim reprehenderit rem repudiandae ducimus dolorum obcaecati rerum accusamus provident atque eos cum. Reiciendis, modi, sint, vel, eligendi veniam esse qui quasi voluptas 
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