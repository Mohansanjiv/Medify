import next from "../../../../assets/next.png";
import prev from "../../../../assets/prev.png";
import { Box } from "@mui/material";

function SlidePrevButton({ swiper }) {
    return (
        <Box
            component="img"
            src={prev}
            onClick={() => swiper?.slidePrev()}
            height={48}
            width={48}
            position="absolute"
            left={0}
            top={0}
            sx={{ cursor: "pointer" }}
            zIndex={999}
            bgcolor="#fff"
        />
    );
}

function SlideNextButton({ swiper }) {
    return (
        <Box
            component="img"
            src={next}
            onClick={() => swiper?.slideNext()}
            height={48}
            width={48}
            position="absolute"
            right={0}
            top={0}
            sx={{ cursor: "pointer" }}
            zIndex={999}
            bgcolor="#fff"
        />
    );
}

export { SlideNextButton, SlidePrevButton };
