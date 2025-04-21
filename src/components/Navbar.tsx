import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  ListItemIcon,
  Fade,
  useTheme,
  alpha
} from "@mui/material";
import { 
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon, 
  School as SchoolIcon,
  ContactMail as ContactIcon,
  Language as LanguageIcon,
  FlightTakeoff as FlightTakeoffIcon
} from "@mui/icons-material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/images/heart_of_english_logo.svg'; // Logonun yolu

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Ana Sayfa", path: "/", icon: <HomeIcon /> },
    { text: "Hakkımızda", path: "/about", icon: <InfoIcon /> },
    { text: "Kurslarımız", path: "/courses", icon: <SchoolIcon /> },
    { text: "Yurtdışı Eğitim", path: "/yurtdisi-egitim", icon: <FlightTakeoffIcon /> },
    { text: "İletişim", path: "/contact", icon: <ContactIcon /> },
  ];

  const drawer = (
    <Box sx={{ p: 2, height: '100%', bgcolor: 'background.default' }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <Box
          component={RouterLink}
          to="/"
          onClick={handleDrawerToggle}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            p: 2,
          }}
        >
          <LanguageIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
          <Typography variant="h6" component="div" fontWeight="bold">
            Heart of English
          </Typography>
        </Box>
      </Box>
      
      <List sx={{ width: '100%' }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem
              key={item.text}
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{ 
                cursor: "pointer", 
                mb: 1,
                borderRadius: 2,
                bgcolor: isActive ? alpha(theme.palette.primary.main, 0.15) : 'transparent',
                color: isActive ? theme.palette.primary.main : 'inherit',
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                }
              }}
            >
              <ListItemIcon sx={{ 
                color: isActive ? theme.palette.primary.main : 'inherit',
                minWidth: 40
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: isActive ? 'bold' : 'regular'
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        bgcolor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: 'text.primary'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 70 }}>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Fade in={true} timeout={1000}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                mr: 4
              }}
            >
              <img 
                src={logo} 
                alt="Dil Okulu Logo" 
                style={{ 
                  height: "40px", 
                  marginRight: "10px" 
                }} 
              />
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  fontWeight: 700,
                  backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Heart of English
              </Typography>
            </Box>
          </Fade>
          
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 'auto' }}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    mx: 1,
                    px: 2,
                    py: 1,
                    color: isActive ? theme.palette.primary.main : 'text.primary',
                    fontWeight: isActive ? 'bold' : 'medium',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: isActive ? '10%' : '50%',
                      width: isActive ? '80%' : 0,
                      height: '3px',
                      bgcolor: theme.palette.primary.main,
                      transition: 'all 0.3s ease',
                    },
                    '&:hover::after': {
                      left: '10%',
                      width: '80%',
                    }
                  }}
                  startIcon={item.icon}
                >
                  {item.text}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
      
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: 'background.default',
          }
        }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
