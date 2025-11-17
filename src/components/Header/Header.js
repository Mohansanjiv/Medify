import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../../ui-lib/Button/Button';

const Header = () => {
    const theme = useTheme();

    return (
        <>
            <section>
                <Typography
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        width: "100%",
                        padding: "10px",
                        color: theme.palette.secondary.main,
                        textAlign: "center"
                    }}
                >
                    The health and well-being of our patients and their health care team
                    will always be our priority, so we follow the best practices for cleanliness.
                </Typography>
            </section>
            <header>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "20px"
                    }}
                >
                    <Typography component="span" sx={{ width: "20%" }}>
                        Logo
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "60%"
                        }}
                    >
                        <Typography component="span">Find Doctors</Typography>
                        <Typography component="span">Hospitals</Typography>
                        <Typography component="span">Medicines</Typography>
                        <Typography component="span">Surgeries</Typography>
                        <Typography component="span">Software for Provider</Typography>
                        <Typography component="span">Facilities</Typography>

                        <Typography component="span">
                            <Button label="My Bookings" padding="10px 20px" />
                        </Typography>
                    </Box>
                </Box>
            </header>

        </>
    );
};

export default Header;
