import React from "react";
import { Container, Typography, Box } from "@mui/material";
import SEO from "../components/SEO";
import officeImage from "../assets/images/office-hoe3.jpeg";

const Contact = () => {
  return (
    <>
      <SEO 
        title="İletişim | Heart of English | Eskişehir Dil Kursu"
        description="Heart of English ile iletişime geçin. Eskişehir'de 20 yıllık tecrübe ile İngilizce ve yabancı dil eğitimi. Adresimiz: Hoşnudiye, Porsuk Blv No:74, Tepebaşı."
        keywords="Heart of English iletişim, İngilizce kursu iletişim, Eskişehir dil kursu, yabancı dil eğitimi"
        canonicalUrl="/contact"
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
            İletişim
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            VIP dil eğitimi ve yurtdışı eğitim danışmanlığı hizmetlerimiz hakkında
            bilgi almak için bize ulaşın.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6, mb: 8 }}>
          <Box sx={{ flex: { xs: "100%", md: "1" } }}>
            <Box
              component="img"
              src={officeImage}
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
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
              Eskişehir'in Kalbinde 20 Yıllık Tecrübe
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              Heart of English olarak, Eskişehir'in merkezinde 20 yılı aşkın süredir kaliteli İngilizce eğitimi sunmaktan gurur duyuyoruz. Bizim farkımız, her öğrencimize özel ilgi göstererek onların dil öğrenme yolculuğunda yanlarında olmaktır.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              Butik sınıflarımızda, her öğrencimize özel yaklaşımla ve deneyimli eğitim kadromuzla, dil öğrenmeyi keyifli bir deneyime dönüştürüyoruz. IELTS hazırlık programlarımız, öğrencilerimizin hedeflerine ulaşmalarını sağlayarak yüzlerce mezunumuzu hayallerine bir adım daha yaklaştırdı.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
              Online eğitim imkanlarımızla da sizlere her yerden ulaşabiliyoruz. İster yüz yüze ister online, eğitimde kaliteden ödün vermeden İngilizce öğrenmenin en etkili yolunu sunuyoruz.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#1976d2" }}>
              Siz de ailemize katılın, dil öğrenme serüveninizde yanınızda olalım!
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            İletişim Bilgileri
          </Typography>
          <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 4 }}>
            <Box sx={{ flex: { xs: "100%", sm: "1" }, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Adres
              </Typography>
              <Typography color="text.secondary">
                Hoşnudiye, Porsuk Blv No:74, 26170 Tepebaşı/Eskişehir, Türkiye
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: "100%", sm: "1" }, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Telefon
              </Typography>
              <Typography color="text.secondary">+90 538 660 46 45</Typography>
            </Box>
            <Box sx={{ flex: { xs: "100%", sm: "1" }, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                E-posta
              </Typography>
              <Typography color="text.secondary">
                heartofenglish.info1@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
