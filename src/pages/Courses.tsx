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
import classroomImage from "../assets/images/IMG_8505.jpg";
import studentsImage from "../assets/images/IMG_8510.jpg";
import teacherImage from "../assets/images/IMG_8507.jpg";

const courses = [
  {
    title: "Uluslararası Sınav Hazırlık",
    description:
      "TOEFL, IELTS, PTE gibi uluslararası sınavlara yönelik özel eğitim programları.",
    image: teacherImage,
    duration: "3-6 Ay",
    level: "B2 ve üzeri",
  },
  {
    title: "ÖSYM Sınav Hazırlık",
    description:
      "YDS, YÖKDİL, YKS-DİL gibi ÖSYM sınavlarına yönelik uzman eğitim.",
    image: studentsImage,
    duration: "4-8 Ay",
    level: "B1 ve üzeri",
  },
  {
    title: "Kids & Teens Eğitimi",
    description:
      "Çocuklar ve gençler için özel tasarlanmış eğitim programları.",
    image: classroomImage,
    duration: "8-12 Ay",
    level: "Tüm Seviyeler",
  },
  {
    title: "Profesyonel Meslek Grupları",
    description:
      "Avukat, doktor, mühendis gibi profesyoneller için özel programlar.",
    image: teacherImage,
    duration: "6-12 Ay",
    level: "B2 ve üzeri",
  },
  {
    title: "TESOL Sertifika Programı",
    description: "Uluslararası İngilizce öğretmenliği sertifikası programı.",
    image: studentsImage,
    duration: "4 Ay",
    level: "C1 ve üzeri",
  },
  {
    title: "Diğer Diller",
    description: "Almanca, Rusça, Fransızca ve İspanyolca eğitimleri.",
    image: classroomImage,
    duration: "6-12 Ay",
    level: "Tüm Seviyeler",
  },
];

const Courses = () => {
  return (
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
  );
};

export default Courses;
