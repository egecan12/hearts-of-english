import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Paper,
  useTheme,
  alpha
} from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const YurtdisiEgitim = () => {
  const theme = useTheme();

  // Countries to highlight in green
  const highlightedCountries = ["usa", "germany", "uk", "france", "latvia"];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <FlightTakeoffIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: "bold",
              backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Yurtdışı Eğitim Fırsatları
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: "800px", 
              mx: "auto", 
              mb: 4,
              color: theme.palette.text.secondary
            }}
          >
            Dünya çapında anlaşmalı olduğumuz prestijli eğitim kurumlarında eğitim alma şansını yakalayın.
            Uzman danışmanlarımız, vize süreçlerinden konaklama imkanlarına kadar tüm süreçlerde yanınızda.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <Box sx={{ flex: { xs: "100%", md: "1" } }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: "100%",
                borderRadius: 2,
                bgcolor: alpha(theme.palette.background.paper, 0.7)
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                Neden Yurtdışında Eğitim?
              </Typography>
              <Typography paragraph>
                Yurtdışında eğitim, kişisel ve akademik gelişiminize benzersiz katkılar sağlar. 
                Farklı kültürleri tanıma, yabancı dil gelişimi ve uluslararası kariyer fırsatları 
                için önemli bir adımdır.
              </Typography>
              <Typography paragraph>
                Heart of English olarak yurtdışı eğitim danışmanlığı hizmetimizle, hayalinizdeki 
                ülkede eğitim almanızı kolaylaştırıyoruz. Sizi her aşamada bilgilendiriyor ve 
                destekliyoruz.
              </Typography>
              
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, color: theme.palette.primary.main }}>
                Sunduğumuz Hizmetler
              </Typography>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <Typography paragraph>
                    <strong>Eğitim Danışmanlığı:</strong> Kişisel hedeflerinize ve bütçenize uygun okul ve program seçimi
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    <strong>Başvuru Desteği:</strong> Başvuru belgelerinin hazırlanması ve takibi
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    <strong>Vize Danışmanlığı:</strong> Vize başvuru sürecinde rehberlik
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    <strong>Konaklama Desteği:</strong> Güvenli ve uygun konaklama seçenekleri sunma
                  </Typography>
                </li>
              </ul>
            </Paper>
          </Box>
          
          <Box sx={{ flex: { xs: "100%", md: "1" } }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                borderRadius: 2,
                textAlign: "center",
                overflow: "hidden"
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: theme.palette.primary.main }}>
                Öğrenci Gönderdiğimiz Ülkeler
              </Typography>
              
              {/* World Map */}
              <div className="map-container" style={{ position: "relative" }}>
                <img
                  src="/world_modified.svg"
                  alt="World Map"
                  style={{ width: "100%", height: "auto", maxHeight: "400px" }}
                />
                
                <div style={{ marginTop: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ width: "20px", height: "20px", backgroundColor: "#4CAF50", marginRight: "8px" }}></div>
                      <span>Anlaşmalı Ülkeler</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ width: "20px", height: "20px", backgroundColor: "#ccc", marginRight: "8px" }}></div>
                      <span>Diğer Ülkeler</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Typography variant="h6" sx={{ mt: 4, fontWeight: 600, color: theme.palette.primary.main }}>
                Popüler Destinasyonlarımız
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>🇺🇸 Amerika Birleşik Devletleri</strong> - Dünyanın en prestijli üniversitelerinde eğitim fırsatı
              </Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>🇩🇪 Almanya</strong> - Ücretsiz veya düşük maliyetli kaliteli eğitim imkanı
              </Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>🇬🇧 İngiltere</strong> - Köklü eğitim geleneği ve uluslararası tanınırlık
              </Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>🇫🇷 Fransa</strong> - Sanat, tasarım ve işletme alanlarında dünya lideri kurumlar
              </Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>🇱🇻 Letonya</strong> - Uygun maliyetli Avrupa eğitimi ve AB diploması
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default YurtdisiEgitim; 