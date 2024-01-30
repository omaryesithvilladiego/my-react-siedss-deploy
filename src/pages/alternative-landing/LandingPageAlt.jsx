import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Grid,
  Fade,
  Grow,
  useMediaQuery,
  useTheme,
  IconButton,
  Tooltip,
  Zoom,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";
import {
  School as SchoolIcon,
  EmojiEvents as EmojiEventsIcon,
  Info as InfoIcon,
  ArrowForward as ArrowForwardIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  CardGiftcard as CardGiftcardIcon,
  MonetizationOn as MonetizationOnIcon,
  SportsFootball as SportsFootballIcon,
  LocalCafe as LocalCafeIcon,
  Weekend as WeekendIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom/cjs/react-router-dom";

function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);

  useEffect(() => {
    // Simulando una carga de datos asincrónica
    const loadData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simula 2 segundos de carga
    };

    loadData();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMouseEnter = (color) => {
    document.body.style.backgroundColor = color;
  };

  const handleMouseLeave = () => {
    document.body.style.backgroundColor = theme.palette.background.default;
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleRegistrationOpen = () => {
    setRegistrationOpen(true);
    setModalOpen(false);
  };

  const handleRegistrationClose = () => {
    setRegistrationOpen(false);
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Fade in={loading} timeout={1000}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            backgroundColor: theme.palette.primary.main,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
        >
          <Grow in={true} timeout={1000}>
            <div>
              <SchoolIcon
                style={{
                  fontSize: isMobile ? "100px" : "140px",
                  color: "#EFEFD0",
                  transition: "transform 0.5s",
                  "&:hover": {
                    transform: "rotate(360deg)",
                  },
                }}
              />
              <EmojiEventsIcon
                style={{
                  fontSize: isMobile ? "100px" : "140px",
                  color: "#EFEFD0",
                  marginLeft: "20px",
                  transition: "transform 0.5s",
                  "&:hover": {
                    transform: "rotate(360deg)",
                  },
                }}
              />
            </div>
          </Grow>
        </Grid>
      </Fade>

      <Fade in={!loading} timeout={1000}>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop:'4rem'
          }}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "40px",
              backgroundColor: "#2D3142",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
              width: "100%",
            }}
          >
            <marquee behavior="scroll" direction="left" scrollamount="5">
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                🎉 ¡Inscríbete ahora y obtén una membresía gratuita por 7 días!
                🚀 Descubre todas las ventajas que te ofrecemos.
                🏆 Participa en eventos académicos y gana increíbles recompensas.
              </Typography>
            </marquee>
          </div>
          <Grid spacing={2} container style={{ width: "80%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              onMouseEnter={() => handleMouseEnter("#13293D")}
              onMouseLeave={handleMouseLeave}
            >
              <Paper
               
                style={{
                  backgroundColor: "#D8D5DB",
                  padding: "30px",
                  height:'80vh',
                  display: "flex",
                  justifyContent:'center',
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#004E89",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <StarIcon style={{ fontSize: "40px", marginBottom: "10px" }} />
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  style={{
                    fontFamily: "Arial, sans-serif",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  ¡Sé el líder de tu Semillero!
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "Georgia, serif",
                    textAlign: "center",
                    marginBottom: "30px",
                    fontSize: isMobile ? "16px" : "18px",
                    lineHeight: "1.5",
                  }}
                >
                  Descubre herramientas avanzadas para la administración y
                  potenciación de tu Semillero. ¡Conviértete en un referente
                  académico!
                </Typography>
                <Link to='/formulario-semillero'>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontSize: "18px", padding: "15px 30px" }}
                >
                  Empieza aquí
                </Button>

                </Link>
                <CardGiftcardIcon
                  style={{ fontSize: "40px", marginTop: "20px" }}
                />
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  ¡Inscríbete ahora y obtén una membresía gratuita por 7 días!
                </Typography>
              </Paper>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              onMouseEnter={() => handleMouseEnter("#0f1d2a")}
              onMouseLeave={handleMouseLeave}
            >
              <Paper
                onClick={handleRegistrationOpen}
                style={{
                  backgroundColor: "#c4ffa1",
                  padding: "30px",
                  height:'80vh',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent:'center',
                  color: "#004E89",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <MonetizationOnIcon
                  style={{ fontSize: "40px", marginBottom: "10px" }}
                />
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  style={{
                    fontFamily: "Arial, sans-serif",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  ¡Gana recompensas académicas!
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "Georgia, serif",
                    textAlign: "center",
                    marginBottom: "30px",
                    fontSize: isMobile ? "16px" : "18px",
                    lineHeight: "1.5",
                  }}
                >
                 <strong>Si eres estudiante</strong> participa en eventos académicos y gana puntos que podrás
                  canjear por increíbles recompensas y descuentos exclusivos.
                </Typography>
                <Link to='/'>
                <Button
                  variant="contained"
                  style={{ fontSize: "18px", padding: "15px 30px" , backgroundColor:'#2D3142', color:'white'}}
                >
              Empieza aquí
                </Button>
                </Link>
                <StarBorderIcon
                  style={{ fontSize: "40px", marginTop: "20px" }}
                />
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  ¡Únete hoy y descubre todas las ventajas que te ofrecemos!
                </Typography>
              </Paper>
            </Grid>


          </Grid>
        </div>
      </Fade>

      {/* Ventana modal para el líder */}
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        TransitionComponent={Zoom}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <DialogTitle id="modal-title">¡Bienvenido, Líder!</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Para empezar, regístrate con tus datos.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegistrationOpen}
          >
            OK
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Ventana modal para el formulario de registro */}
      <Dialog
        open={registrationOpen}
        onClose={handleRegistrationClose}
        TransitionComponent={Zoom}
        aria-labelledby="registration-modal-title"
        aria-describedby="registration-modal-description"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="registration-modal-title">Registro</DialogTitle>
        <DialogContent>
          <form>
            {/* Agrega aquí los campos del formulario */}
            <TextField
              label="Nombre"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            {/* Otros campos del formulario */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegistrationClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default LandingPage;
