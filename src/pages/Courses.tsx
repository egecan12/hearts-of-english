import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import SEO from "../components/SEO";
import image1 from "../assets/images/IMG_8508.jpg";
import image2 from "../assets/images/IMG_8509.jpg";
import image3 from "../assets/images/IMG_8510.jpg";
import image4 from "../assets/images/IMG_8512.jpg";
import image5 from "../assets/images/IMG_8506.jpg";
import image6 from "../assets/images/office2-hoe.jpeg";

const courses = [
  {
    title: "Uluslararası Sınav Hazırlık",
    description:
      "TOEFL, IELTS, PTE gibi uluslararası sınavlara yönelik özel eğitim programları.",
    image: image4,
    duration: "3-6 Ay",
    level: "B2 ve üzeri",
  },
  {
    title: "ÖSYM Sınav Hazırlık",
    description:
      "YDS, YÖKDİL, YKS-DİL gibi ÖSYM sınavlarına yönelik uzman eğitim.",
    image: image2,
    duration: "4-8 Ay",
    level: "B1 ve üzeri",
  },
  {
    title: "Kids & Teens Eğitimi",
    description:
      "Çocuklar ve gençler için özel tasarlanmış eğitim programları.",
    image: image3,
    duration: "8-12 Ay",
    level: "Tüm Seviyeler",
  },
  {
    title: "Profesyonel Meslek Grupları",
    description:
      "Avukat, doktor, mühendis gibi profesyoneller için özel programlar.",
    image: image1,
    duration: "6-12 Ay",
    level: "B2 ve üzeri",
  },
  {
    title: "TESOL Sertifika Programı",
    description: "Uluslararası İngilizce öğretmenliği sertifikası programı.",
    image: image5,
    duration: "4 Ay",
    level: "C1 ve üzeri",
  },
  {
    title: "Diğer Diller",
    description: "Almanca, Rusça, Fransızca ve İspanyolca eğitimleri.",
    image: image6,
    duration: "6-12 Ay",
    level: "Tüm Seviyeler",
  },
];

const Courses = () => {
  return (
    <>
      <SEO 
        title="Kurslarımız | Heart of English | Eskişehir İngilizce Dil Kursu"
        description="TOEFL, IELTS, YDS, YÖKDİL, YKS-DİL hazırlık ve diğer dil eğitim programları. Çocuklar, gençler ve profesyoneller için özel İngilizce kursları."
        keywords="İngilizce kursu, TOEFL hazırlık, IELTS hazırlık, YDS kursu, YÖKDİL kursu, çocuklar için İngilizce, Eskişehir"
        canonicalUrl="/courses"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Box
            component="img"
            src="/heart_of_english_logo.svg"
            alt="Heart of English Logo"
            sx={{
              height: { xs: "80px", md: "120px" },
              mb: 4,
              filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.1))",
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Eğitim Programlarımız
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            VIP konseptli dil eğitimi ve yurtdışı eğitim danışmanlığı
            hizmetlerimizle yanınızdayız.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {courses.map((course, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 16px)",
                  md: "calc(33.33% - 16px)",
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {course.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Süre: {course.duration}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Seviye: {course.level}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1,
                      borderRadius: 2,
                      textTransform: "none",
                      fontSize: "1rem",
                    }}
                  >
                    Detaylı Bilgi
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Courses;
