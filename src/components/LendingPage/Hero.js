import { Box, Typography, useTheme } from '@mui/material'

import Button from '../../ui-lib/Button/Button';
import Search from '../../ui-lib/Search/Search';


const Hero = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",

            }}
        >
            <Box sx={{ width: "50%", padding: "20px 0px", margin: "100px 0px" }}>
                <Typography component="p" sx={{ fontSize: "31px" }}>Skip the travel! Find Online
                </Typography>
                <Box><Typography component="span" sx={{ fontSize: "56px", color: "#000", fontWeight: "bold" }}>Medical</Typography><Typography component="span" sx={{ fontSize: "56px", color: theme.palette.primary.main, fontWeight: "bold", marginLeft: "10px" }}>Centers</Typography></Box>
                <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
                    Connect instantly with a 24x7 specialist or choose to <br /> video visit a particular doctor
                </Typography>
                <Button label="Find Centers" padding="10px 20px" />
            </Box>
            <Box sx={{ width: "40%", height: "100%", }}>
                <img
                    src="/hero_image.png"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt=""
                />
            </Box>
            <Search value=""
                onChange={() => { }}
                onSearch={(val) => console.log("Search:", val)} />
        </Box>
    );
};

export default Hero;
