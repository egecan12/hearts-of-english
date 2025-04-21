import React, { ReactNode } from 'react';
import { Box, Typography, Card, CardContent, Container, Stack, Fade, Grow } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface StatItemProps {
  icon: ReactNode;
  value: ReactNode;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0', transitionDelay: `${delay}ms` }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        p: { xs: 2, md: 3 },
        '&:hover': {
          transform: 'translateY(-10px)',
          transition: 'transform 0.3s ease-in-out'
        },
        transition: 'transform 0.3s ease-in-out'
      }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            p: 2,
            bgcolor: 'rgba(255,255,255,0.1)',
            mb: 2
          }}
        >
          {icon}
        </Box>
        <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mt: 1 }}>
          {value}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, textAlign: 'center' }}>
          {label}
        </Typography>
      </Box>
    </Grow>
  );
};

const StudentCounter: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box ref={ref} sx={{ my: 8, py: 4 }}>
      <Container maxWidth="lg">
        <Fade in={true} timeout={800}>
          <Typography 
            variant="h3" 
            component="h2" 
            textAlign="center" 
            sx={{ 
              mb: 6,
              fontWeight: 600,
            }}
          >
            Rakamlarla Biz
          </Typography>
        </Fade>
        
        <Card elevation={4} sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          py: 4,
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0, 105, 202, 0.2)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(circle at 50% 0, rgba(255,255,255,0.1), transparent 70%)',
            zIndex: 0
          }
        }}>
          <CardContent sx={{ position: 'relative', zIndex: 1 }}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="space-around"
              flexWrap="wrap"
              useFlexGap
            >
              <StatItem 
                icon={<PeopleAltIcon sx={{ fontSize: 50 }} />}
                value={inView ? (
                  <CountUp
                    start={0}
                    end={4835}
                    duration={2.5}
                    separator="."
                    useEasing={true}
                  />
                ) : '0'}
                label="Mezun Öğrenciler"
                delay={100}
              />
              
              <StatItem 
                icon={<SchoolIcon sx={{ fontSize: 50 }} />}
                value={inView ? (
                  <CountUp
                    start={0}
                    end={42}
                    duration={2}
                    useEasing={true}
                  />
                ) : '0'}
                label="Deneyimli Eğitmen"
                delay={300}
              />
              
              <StatItem 
                icon={<LanguageIcon sx={{ fontSize: 50 }} />}
                value={inView ? (
                  <CountUp
                    start={0}
                    end={12}
                    duration={3}
                    useEasing={true}
                  />
                ) : '0'}
                label="Farklı Dil"
                delay={500}
              />
              
              <StatItem 
                icon={<EmojiEventsIcon sx={{ fontSize: 50 }} />}
                value={inView ? (
                  <CountUp
                    start={0}
                    end={15}
                    duration={2.5}
                    useEasing={true}
                    suffix="+"
                  />
                ) : '0'}
                label="Yıllık Deneyim"
                delay={700}
              />
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default StudentCounter; 