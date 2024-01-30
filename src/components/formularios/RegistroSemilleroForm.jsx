import React, { useState } from "react";
import {
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  Box,
  Slide,
} from "@material-ui/core";
import {
  AccountCircle as AccountCircleIcon,
  Description as DescriptionIcon,
  Event as EventIcon,
  Visibility as VisibilityIcon,
  GpsFixed as GpsFixedIcon,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
  stepContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));

const steps = [
  {
    label: "Información del líder",
    icon: <AccountCircleIcon />,
  },
  {
    label: "Información del Semillero",
    icon: <DescriptionIcon />,
  },
  {
    label: "Ubicación del Semillero",
    icon: <GpsFixedIcon />,
  },
];

function LeadershipForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const [leaderName, setLeaderName] = useState("");
  const [seminarName, setSeminarName] = useState("");
  const [establishmentDate, setEstablishmentDate] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <FormControl className={classes.formControl}>
            <InputLabel>Líder del Semillero</InputLabel>
            <Select
              value={leaderName}
              onChange={handleInputChange(setLeaderName)}
              label="Líder del Semillero"
            >
              <MenuItem value="John Doe">John Doe</MenuItem>
              <MenuItem value="Jane Doe">Jane Doe</MenuItem>
              <MenuItem value="Another Leader">Another Leader</MenuItem>
            </Select>
          </FormControl>
        );
      case 1:
        return (
          <div className={classes.stepContent}>
            <TextField
              className={classes.formControl}
              label="Nombre del Semillero"
              value={seminarName}
              onChange={handleInputChange(setSeminarName)}
            />
            <TextField
              className={classes.formControl}
              label="Fecha de Constitución"
              type="date"
              value={establishmentDate}
              onChange={handleInputChange(setEstablishmentDate)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className={classes.formControl}
              label="Visión"
              multiline
              rows={4}
              value={vision}
              onChange={handleInputChange(setVision)}
            />
            <TextField
              className={classes.formControl}
              label="Misión"
              multiline
              rows={4}
              value={mission}
              onChange={handleInputChange(setMission)}
            />
          </div>
        );
      case 2:
        return (
          <div className={classes.stepContent}>
            <TextField
              className={classes.formControl}
              label="Ciudad del Semillero"
              value={city}
              onChange={handleInputChange(setCity)}
            />
            <TextField
              className={classes.formControl}
              label="País"
              value={country}
              onChange={handleInputChange(setCountry)}
            />
          </div>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Container maxWidth="md">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={() => <Box fontSize="large">{step.icon}</Box>}>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.formContainer}>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div>
            {renderStepContent(activeStep)}
            <div className={classes.buttonContainer}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                color="primary"
              >
                Atrás
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={
                  activeStep === steps.length - 1 ? handleNext : handleNext
                }
              >
                {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
              </Button>
            </div>
          </div>
        </Slide>
      </div>
    </Container>
  );
}

export default LeadershipForm;
