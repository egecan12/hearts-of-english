import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardMedia,
  Stack, 
  Fade,
  useTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import classroomImage from "../assets/images/classroom.jpg";
import studentsImage from "../assets/images/IMG_8513.jpg";
import teacherImage from "../assets/images/IMG_8508.jpg";
import officeImage from "../assets/images/office-hoe.jpeg";
import campusImage1 from "../assets/images/IMG_8510.jpg";
import campusImage2 from "../assets/images/IMG_8507.jpg";
import campusImage3 from "../assets/images/IMG_8514.jpg";
import StudentCounter from "../components/StudentCounter";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${officeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          py: { xs: 10, md: 20 },
          position: "relative",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ 
                  fontWeight: "bold",
                  backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  mb: 3,
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)"
                }}
              >
                Yeni Bir Dil, Yeni Bir Dünya
              </Typography>
              <Typography 
                variant="h5" 
                paragraph 
                sx={{ 
                  mb: 4,
                  maxWidth: "800px",
                  mx: "auto",
                  color: theme.palette.text.secondary
                }}
              >
                Profesyonel eğitmenlerimizle birlikte dil öğrenme serüveninize
                başlayın.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                justifyContent="center"
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => navigate("/courses")}
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: "1.1rem",
                  }}
                >
                  Kurslarımızı Keşfedin
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  onClick={() => navigate("/contact")}
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: "1.1rem",
                    borderWidth: 2,
                  }}
                >
                  İletişime Geçin
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* World Map Visual Section */}
      <Box 
        sx={{
          position: 'relative',
          py: 6,
          backgroundColor: 'background.paper',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            opacity: 0.07,
            zIndex: 0,
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }
          }}
        >
          <img src="/world_modified.svg" alt="World Map" />
        </Box>
        
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <StudentCounter />
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 10 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          textAlign="center" 
          sx={{ 
            mb: 6,
            fontWeight: 600,
            backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: "text",
            textFillColor: "transparent"
          }}
        >
          Neden Bizi Seçmelisiniz?
        </Typography>
        
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4} 
          justifyContent="center"
          alignItems="stretch"
        >
          <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <CardMedia
                component="img"
                image={teacherImage}
                alt="Deneyimli Eğitmenler"
                sx={{
                  height: 240,
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <SchoolIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                  Deneyimli Eğitmenler
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Anadili olarak konuşan, pedagogik formasyona sahip, deneyimli eğitmenlerimizle kaliteli dil eğitimi alın.
                </Typography>
              </CardContent>
            </Card>
          </Fade>
          
          <Fade in={true} timeout={1000} style={{ transitionDelay: '400ms' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <CardMedia
                component="img"
                image={studentsImage}
                alt="Esnek Program"
                sx={{
                  height: 240,
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <AccessTimeIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                  Esnek Program
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Size uygun zamanlarda, esnek ders programları ile eğitiminizi aksatmadan dil öğrenin.
                </Typography>
              </CardContent>
            </Card>
          </Fade>
          
          <Fade in={true} timeout={1000} style={{ transitionDelay: '600ms' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <CardMedia
                component="img"
                image={classroomImage}
                alt="Modern Sınıflar"
                sx={{
                  height: 240,
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <LanguageIcon color="primary" sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                  Modern Sınıflar
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Teknolojik donanımlı, modern sınıflarda interaktif yöntemlerle eğitim alın.
                </Typography>
              </CardContent>
            </Card>
          </Fade>
        </Stack>
      </Container>
      
      {/* Image Gallery Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            textAlign="center" 
            sx={{ 
              mb: 6,
              fontWeight: 600,
            }}
          >
            Kampüsümüzden Görüntüler
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 11px)' } }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={campusImage1}
                  alt="Kampüs Görüntüsü 1"
                  sx={{ height: 220, objectFit: 'cover' }}
                />
              </Card>
            </Box>
            <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 11px)' } }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={campusImage2}
                  alt="Kampüs Görüntüsü 2"
                  sx={{ height: 220, objectFit: 'cover' }}
                />
              </Card>
            </Box>
            <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 11px)' } }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  image={campusImage3}
                  alt="Kampüs Görüntüsü 3"
                  sx={{ height: 220, objectFit: 'cover' }}
                />
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          py: 10,
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="md">
          <Fade in={true} timeout={1000}>
            <Box textAlign="center">
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                Dil Öğrenme Yolculuğunuza Bugün Başlayın
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4, color: 'text.secondary' }}>
                Hayallerinizi gerçekleştirmek için ilk adımı atın. Eğitmenlerimiz sizinle tanışmak için sabırsızlanıyor.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                }}
              >
                Ücretsiz Tanışma Dersi Alın
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
