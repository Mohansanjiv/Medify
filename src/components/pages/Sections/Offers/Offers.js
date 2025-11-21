import { Box, Container, Card, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import offer1 from "../../../../assets/offer1.png";
import offer2 from "../../../../assets/offer2.png";

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth="xl">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        767: { slidesPerView: 3 },
                    }}
                >
                    {[offer1, offer2, offer1, offer2, offer1, offer2].map(
                        (img, index) => (
                            <SwiperSlide key={index}>
                                <Card
                                    sx={{
                                        width: "100%",
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        overflow: "hidden",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={img}
                                        sx={{
                                            height: 180,
                                            objectFit: "cover",
                                        }}
                                    />
                                </Card>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </Container>
        </Box>
    );
}
