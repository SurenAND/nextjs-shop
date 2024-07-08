import { MainRoutes } from "@/src/constant/routes";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Parallax,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const Hero = () => {
//   return (
//     <Box component="section" sx={{ position: 'relative' }}>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         slidesPerView={1}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         parallax={true}
//         modules={[Autoplay, Pagination, Navigation, Scrollbar, Parallax]}
//         scrollbar={{ draggable: true }}
//         className="mySwiper"
//         width={2100}
//         height={2100}
//       >
//         <Image
//           src="/globe.jpg"
//           alt="Shop"
//           width={0}
//           height={0}
//           sizes="100vh"
//           style={{
//             position: 'relative',
//             left: 0,
//             top: 0,
//             width: '130%',
//             height: '100%',
//             backgroundSize: 'cover',
//           }}
//           data-swiper-parallax="-3%"
//         />
//         <SwiperSlide>
//           <Stack
//             data-swiper-parallax="-300"
//             sx={{
//               width: { xs: '50%', sm: '66%', lg: '33%' },
//               position: 'absolute',
//               top: { md: '7rem', xs: '1rem' },
//               left: { md: '7rem', xs: '1rem' },
//               gap: { md: 5, sm: 4, xs: 1 },
//             }}
//           >
//             <Typography
//               variant="h1"
//               sx={{
//                 color: '#166534',
//                 fontSize: '4vw',
//                 lineHeight: '1.1',
//                 fontWeight: 'bold',
//               }}
//             >
//               Shopping And Department Store.
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: '#475569',
//                 fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//               }}
//             >
//               Shopping is bit of a relaxing hobby for me, which is sometimes
//               troubling for the bank balance.
//             </Typography>

//             <Button
//               variant="contained"
//               sx={{
//                 bgcolor: '#166534',
//                 fontWeight: '600',
//                 px: 3,
//                 py: 1,
//                 borderRadius: '100px',
//                 width: 150,
//                 ':hover': {
//                   bgcolor: '#16a34a',
//                 },
//               }}
//             >
//               <Link href={MainRoutes.ABOUT_US}>Learn More</Link>
//             </Button>
//           </Stack>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Stack
//             data-swiper-parallax="-300"
//             sx={{
//               width: { xs: '50%', sm: '66%', lg: '33%' },
//               position: 'absolute',
//               top: { md: '7rem', xs: '1rem' },
//               left: { md: '7rem', xs: '1rem' },
//               gap: { md: 5, sm: 4, xs: 1 },
//             }}
//           >
//             <Typography
//               variant="h1"
//               sx={{
//                 color: '#166534',
//                 fontSize: '4vw',
//                 lineHeight: '1.1',
//                 fontWeight: 'bold',
//               }}
//             >
//               Shopping And Department Store.
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: '#475569',
//                 fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//               }}
//             >
//               Shopping is bit of a relaxing hobby for me, which is sometimes
//               troubling for the bank balance.
//             </Typography>

//             <Button
//               variant="contained"
//               sx={{
//                 bgcolor: '#166534',
//                 fontWeight: '600',
//                 px: 3,
//                 py: 1,
//                 borderRadius: '100px',
//                 width: 150,
//                 ':hover': {
//                   bgcolor: '#16a34a',
//                 },
//               }}
//             >
//               <Link href={MainRoutes.ABOUT_US}>Learn More</Link>
//             </Button>
//           </Stack>
//         </SwiperSlide>
//       </Swiper>
//     </Box>
//   );
// };

const Hero = () => {
  return (
    <Box component="section" sx={{ position: "relative" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box width={1920} height={854} position="relative">
            <Image src="/landing.webp" alt="Shop" fill objectFit="cover" />
          </Box>
          <Stack
            padding={5}
            borderRadius={3}
            sx={{
              width: { xs: "50%", sm: "66%", lg: "44%" },
              position: "absolute",
              top: { md: "7rem", xs: "1rem" },
              left: { md: "7rem", xs: "1rem" },
              gap: { md: 5, sm: 4, xs: 1 },
              backgroundColor: "#83dd5799",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#f1f1f1",
                fontSize: "4vw",
                lineHeight: "1.1",
                fontWeight: "bold",
                textShadow: "-2px -2px 1px #000",
              }}
            >
              Shopping And Department Store.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#f1f1f1",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                textShadow: "-1px -1px 0px #500",
              }}
            >
              by Shopping from our site you can get goods from all over the
              globe.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#166534",
                fontWeight: "600",
                px: 3,
                py: 1,
                borderRadius: "100px",
                width: 150,
                ":hover": {
                  bgcolor: "#16a34a",
                },
              }}
            >
              <Link href={MainRoutes.ABOUT_US}>Learn More</Link>
            </Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box width={1920} height={854} position="relative">
            <Image src="/globe2.jpg" alt="Shop" fill objectFit="cover" />
          </Box>
          <Stack
            padding={5}
            borderRadius={3}
            sx={{
              width: { xs: "50%", sm: "66%", lg: "44%" },
              position: "absolute",
              top: { md: "7rem", xs: "1rem" },
              left: { md: "7rem", xs: "1rem" },
              gap: { md: 5, sm: 4, xs: 1 },
              backgroundColor: "#83dd5799",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#f1f1f1",
                fontSize: "4vw",
                lineHeight: "1.1",
                fontWeight: "bold",
                textShadow: "-2px -2px 1px #000",
              }}
            >
              Shopping And Department Store.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#f1f1f1",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                textShadow: "-1px -1px 0px #500",
              }}
            >
              by Shopping from our site you can get goods from all over the
              globe.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#166534",
                fontWeight: "600",
                px: 3,
                py: 1,
                borderRadius: "100px",
                width: 150,
                ":hover": {
                  bgcolor: "#16a34a",
                },
              }}
            >
              <Link href={MainRoutes.ABOUT_US}>Learn More</Link>
            </Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box width={1920} height={854} position="relative">
            <Image src="/pig.png" alt="Shop" fill objectFit="cover" />
          </Box>
          <Stack
            data-swiper-parallax="-300"
            padding={5}
            borderRadius={3}
            sx={{
              width: { xs: "50%", sm: "66%", lg: "44%" },
              position: "absolute",
              top: { md: "7rem", xs: "1rem" },
              left: { md: "7rem", xs: "1rem" },
              gap: { md: 5, sm: 4, xs: 1 },
              backgroundColor: "#9e6cc855",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#166534",
                fontSize: "4vw",
                lineHeight: "1.1",
                fontWeight: "bold",
                textShadow: "-1px -1px 0px #fff",
              }}
            >
              Shopping And Department Store.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#000000",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                textShadow: "-1px -1px 0px #fff",
              }}
            >
              we offer cashback service for some of our best products.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#166534",
                fontWeight: "600",
                px: 3,
                py: 1,
                borderRadius: "100px",
                width: 150,
                ":hover": {
                  bgcolor: "#16a34a",
                },
              }}
            >
              <Link href={MainRoutes.ABOUT_US}>Learn More</Link>
            </Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box width={1920} height={854} position="relative">
            <Image src="/onlineshop.jpg" alt="Shop" fill objectFit="cover" />
          </Box>
          <Stack
            padding={5}
            borderRadius={3}
            sx={{
              width: { xs: "50%", sm: "66%", lg: "44%" },
              position: "absolute",
              top: { md: "7rem", xs: "1rem" },
              left: { md: "7rem", xs: "1rem" },
              gap: { md: 5, sm: 4, xs: 1 },
              backgroundColor: "#ee9f9799",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#0f0f0f",
                fontSize: "4vw",
                lineHeight: "1.1",
                fontWeight: "bold",
                textShadow: "-2px -2px 1px #fff",
              }}
            >
              Shopping And Department Store.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#0f0f0f",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                textShadow: "-1px -1px 0px #fff",
              }}
            >
              Shopping is bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#166534",
                fontWeight: "600",
                px: 3,
                py: 1,
                borderRadius: "100px",
                width: 150,
                ":hover": {
                  bgcolor: "#16a34a",
                },
              }}
            >
              <Link href={MainRoutes.ABOUT_US}>Learn More</Link>
            </Button>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Hero;
