import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import officeImage from "../assets/images/office-hoe3.jpeg";

const Contact = () => {
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

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mb: 2 },
              "& .MuiButton-root": { mt: 2 },
            }}
          >
            <TextField fullWidth label="Adınız" variant="outlined" required />
            <TextField
              fullWidth
              label="E-posta"
              variant="outlined"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Telefon"
              variant="outlined"
              type="tel"
            />
            <TextField
              fullWidth
              label="İlgilendiğiniz Program"
              variant="outlined"
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value="">Seçiniz</option>
              <option value="toefl">TOEFL Hazırlık</option>
              <option value="ielts">IELTS Hazırlık</option>
              <option value="pte">PTE Hazırlık</option>
              <option value="yds">YDS Hazırlık</option>
              <option value="yokdil">YÖKDİL Hazırlık</option>
              <option value="yks">YKS-DİL Hazırlık</option>
              <option value="kids">Kids Eğitimi</option>
              <option value="teens">Teens Eğitimi</option>
              <option value="tesol">TESOL Sertifika</option>
              <option value="other">Diğer Diller</option>
            </TextField>
            <TextField
              fullWidth
              label="Mesajınız"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                boxShadow: 3,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 6,
                },
                transition: "all 0.3s ease",
              }}
            >
              Gönder
            </Button>
          </Box>
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
            Hoşnudiye, Porsuk Blv No:74, 26170 Tepebaşı/Eskişehir, Türkiye {/* Updated address */}

            </Typography>
          </Box>
          <Box sx={{ flex: { xs: "100%", sm: "1" }, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Telefon
            </Typography>
            <Typography color="text.secondary">+90 123 456 7890</Typography>
          </Box>
          <Box sx={{ flex: { xs: "100%", sm: "1" }, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              E-posta
            </Typography>
            <Typography color="text.secondary">
              info@heartofenglish.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
