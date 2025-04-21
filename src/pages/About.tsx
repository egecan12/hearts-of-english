import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SEO from "../components/SEO";
import classroomImage from "../assets/images/IMG_8505.jpg";
import studentsImage from "../assets/images/IMG_8510.jpg";
import teacherImage from "../assets/images/IMG_8507.jpg";

const About = () => {
  return (
    <>
      <SEO 
        title="Hakkımızda | Heart of English | Eskişehir İngilizce Eğitimi"
        description="Heart of English hakkında bilgi alın. 20 yıllık tecrübe ile Eskişehir'de kaliteli İngilizce eğitimi ve yurtdışı eğitim danışmanlığı hizmetleri."
        keywords="Heart of English, Eskişehir dil okulu, İngilizce kursu Eskişehir, yabancı dil eğitimi, dil kursu hakkında"
        canonicalUrl="/about"
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
            Hakkımızda
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            Heart of English olarak VIP konseptli yabancı dil kursu ve yurtdışı
            eğitim danışmanlığı hizmetleri sunuyoruz.
          </Typography>
        </Box>

        <Box sx={{ mb: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
          <Box sx={{ flex: { xs: "100%", md: "1" } }}>
            <Box
              component="img"
              src={classroomImage}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>
          <Box sx={{ flex: { xs: "100%", md: "1" } }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Eğitim Programlarımız
            </Typography>
            <Typography paragraph>
              • Uluslararası Sınav Hazırlık (TOEFL, IELTS, PTE)
              <br />
              • ÖSYM Sınav Hazırlık (YDS, YÖKDİL, YKS-DİL)
              <br />
              • Kids ve Teens Eğitimleri
              <br />
              • Profesyonel Meslek Gruplarına Özel Eğitimler
              <br />
              • TESOL Sertifika Programı
              <br />• Diğer Diller (Almanca, Rusça, Fransızca, İspanyolca)
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Neden Heart of English?
          </Typography>
          <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 4 }}>
            <Box sx={{ flex: { xs: "100%", md: "1" }, textAlign: "center" }}>
              <Box
                component="img"
                src={teacherImage}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="h6" gutterBottom>
                Uzman Eğitmen Kadrosu
              </Typography>
              <Typography color="text.secondary">
                Hem yabancı hem Türk eğitmenlerle kaliteli eğitim.
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: "100%", md: "1" }, textAlign: "center" }}>
              <Box
                component="img"
                src={classroomImage}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="h6" gutterBottom>
                VIP Eğitim Konsepti
              </Typography>
              <Typography color="text.secondary">
                Bireyselleştirilmiş eğitim programları ve modern sınıflar.
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: "100%", md: "1" }, textAlign: "center" }}>
              <Box
                component="img"
                src={studentsImage}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="h6" gutterBottom>
                Profesyonel Danışmanlık
              </Typography>
              <Typography color="text.secondary">
                Yurtdışı eğitim ve kariyer danışmanlığı hizmetleri.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
