import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../pages/HeroSlider/HeroSlider";
import SearchHospital from "../pages/SearchHospital/SearchHospital";
import FAQs from "../pages/Sections/FAQs/FAQs";
import OurFamilies from "../pages/Sections/OurFamilies/OurFamilies";
import Blogs from "../pages/Sections/Blogs/Blogs";
import PatientCaring from "../pages/Sections/PatientCaring/PatientCaring";
import Specialists from "../pages/Sections/Specialists/Specialists";
import Specialization from "../pages/Sections/Specialization/Specialization";
import Offers from "../pages/Sections/Offers/Offers";
import NavBar from "../pages/NavBar/NavBar";
import HeroServices from "../pages/IconLayout/HeroServices";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />

      <FAQs />
    </Box>
  );
}

export default Home;