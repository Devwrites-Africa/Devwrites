import React from 'react';
import { 
    createTheme,
    ThemeProvider,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Avatar,
 } from "@mui/material";

const theme = createTheme();

theme.typography.body2 = {
    fontSize: '18px',
    fontFamily: 'Futura Bk BT',
    maxWidth: '500px',
    margin: '0 auto',

}

theme.typography.h4 = {
    fontSize: '2rem',
    marginBottom: '50px',
    fontFamily: 'Inter',
    color: '#0D3767',
    fontWeight: '700',

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
        margin: '0 auto',
        background: '#f5f5f5',
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardHeaderTitle: {
        variant: 'h5',
        fontWeight: '600',
        fontFamily: 'Inter',
        textAlign: 'center'
    },
    subHeaderTitle: {
        variant: 'body1',
        fontFamily: 'Inter',
        textAlign: 'center'
    },
    avatar: {
        width: '80px',
        height: '80px',
        marginBottom: '10px',
        background: '#0D3767',
    }
}

const Testimonial = ()=> {
    return (
        <section className="contributors">
            <ThemeProvider theme={theme}>
                <Typography variant='h4' align='center'>Testimonials</Typography>
            </ThemeProvider>
            <Card sx={styles.card} elevation={0}>
                <CardHeader sx={styles.cardHeader}
                    avatar={
                        <Avatar
                            alt="Devwrites Africa"
                            src=""
                            sx={styles.avatar}
                        />
                        }
                    titleTypographyProps={styles.cardHeaderTitle}
                    title='Devwrites Africa'
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
        </section>
    )
}

export default Testimonial