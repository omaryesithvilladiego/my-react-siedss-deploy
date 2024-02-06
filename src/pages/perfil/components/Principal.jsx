import { Card, CardContent, CardHeader, CardMedia, Container,Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useUserContext } from "../../../components/Provider/userProvider";
import { useEffect, useState } from "react";

function Principal() {

    const dataUser = useUserContext()
    const [fotoPerfil, setFotoPerfil] = useState('')
    const [nombrePerfil, setNombrePerfil] = useState('')
    const [correo, setCorreo] = useState('')
   
     useEffect(() => {
         
         if(dataUser) {
           setFotoPerfil(dataUser.data.fotoPerfilUrl)
           setNombrePerfil(dataUser.dataEstudiante.nombresEstudiante + " " + dataUser.dataEstudiante.apellidosEstudiante
           )
           setCorreo(dataUser.dataEstudiante.correoInstitucional
            )
         }
     },[dataUser]);

    return ( <> <Container style={{
        height:'60vh'
       }} maxWidth='lg'>
    
        <Grid width='100%' spacing={2} container>
    
            <Grid md={6} xs={12}>

                <Grid spacing={2} container>

                    <Grid   xl={6}>

                        <Card sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <CardHeader
      
       
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
                        <CardMedia
                   sx={{ height: 250, width: 250, borderRadius: 50, border:4 }}
                   image={fotoPerfil}
                   component='div'
                   
                  />


                  <Box>
                  <CardContent sx={{flex:'1 0 auto'}}>
                    <h1>Omar Villadiego</h1>

                  </CardContent>
                  </Box>
                

                        </Card>
                    
                
            

                    </Grid>
                    
                  
              

                </Grid>

               
            
    
            </Grid>

            <Grid md={6} xs={12}>
            <Card sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <CardHeader
      
       
        title={correo}
      />
                       


                  <Box>
                  <CardContent sx={{flex:'1 0 auto'}}>
                    <h1>{nombrePerfil}</h1>

                  </CardContent>
                  </Box>
                

                        </Card>
                    
                
            </Grid>

            <Grid xs={12}>
            <Card sx={{display:'flex', flexDirection:'column', alignItems:'center', wordBreak:'break-all'}}>
                        <CardHeader
      
       
        title={correo}
      />
                       


                  <Box>
                  <CardContent sx={{flex:'1 0 auto'}}>
                    <h1>{nombrePerfil}</h1>

                  </CardContent>
                  </Box>
                

                        </Card>
                    
                
            </Grid>
    
        </Grid>
    
    
    
       </Container></> );
}

export default Principal;