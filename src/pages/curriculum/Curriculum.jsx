import React from 'react';
import { AppBar, Toolbar, Typography,Container, Grid, Paper, Button } from '@mui/material';
import html2pdf from 'html2pdf.js';
import { useRef } from 'react';
function Curriculum() {



    const contentRef = useRef(null);
    const ponenciaRef = useRef(null)

    const handleDownloadPDF = () => {
      const content = contentRef.current;
   
      if (content) {
        const pdfOptions = {
          margin: 10,
          filename: 'curriculum.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

       
  
        html2pdf().from(content).set(pdfOptions).save();
        
     
      }

    
    
       
    
    };
    return ( <> <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Currículum</Typography>
    </Toolbar>
  </AppBar>
  <Container ref={contentRef}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }} >
            <Typography variant="h5">Información Personal</Typography>
            <Typography>Nombre: John Doe</Typography>
            <Typography>Email: john.doe@example.com</Typography>
            <Typography>Teléfono: (555) 555-5555</Typography>
            {/* Agrega más información personal según sea necesario */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5">Skills</Typography>
            <Typography>React, JavaScript, HTML, CSS</Typography>
            {/* Agrega más skills según sea necesario */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper ref={ponenciaRef} elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5">Ponencias</Typography>
            <Typography>Título: Mi Ponencia 1</Typography>
            <Typography>Conferencia Internacional XYZ, 2022</Typography>
            {/* Agrega más ponencias según sea necesario */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* Agrega más secciones de contenido como cursos, proyectos, premios, etc. */}
        </Grid>
        <Grid item xs={12}>
         
        </Grid>
      </Grid>
    </Container>
    <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
            Descargar PDF
          </Button></> );
}

export default Curriculum;