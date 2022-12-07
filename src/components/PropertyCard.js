import React, {
  useState,
  useEffect
} from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField, LinearProgress
} from '@mui/material';
import axios from 'axios';
import {
  options
} from '../config/api.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SellIcon from '@mui/icons-material/Sell';
import InfoIcon from '@mui/icons-material/Info';
import CropIcon from '@mui/icons-material/Crop';
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';
import { PropertyState } from '../PropertyContext.js';
import { Container } from '@mui/material';


const PropertyCard = () => {
  const {price,type,area,location} = PropertyState();
  const [search, setSearch] = useState('');
  let [propertyData, setPropertyData] = useState([]);
    const fetchData = async () => {
      await axios.request(options).then(function(response) {
        setPropertyData(response.data.hits)
      }).catch(function(error) {
        console.error("axios: "+error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () =>{

    return propertyData.filter((data) => {
      const tempData = data.location[3].name + data.location[2].name +data.location[1].name ;
      return tempData.toLowerCase().includes(search);
   })

  };

  const capitalize = (sentence) => {
    const newString = sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
     //regex
    return newString;
  };


  return ( 
    <Container style={{display:"flex",flexDirection:"column"}}>
        <TextField label="Search For Property" variant='outlined' style={{marginBottom:20,marginLeft:"2%", width:"95%"}} 
            onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}
        />
      <div>
        {
          !propertyData.length ? ( 
            <LinearProgress 
              style = {{color: "#2973e3"}} 
              size = {150}
              thickness = {1}
            />
          ) : ( 
            <div className = 'property_list' >
            {
              handleSearch().map((data) => {
                const dataLocation = data.location[2].name.toLocaleLowerCase();
                const dataPrice = data.price;
                const dataType = data.product.toLocaleLowerCase();
                const dataArea = data.area;
                
                if(type===''||type==="all"||dataType===type){
                  if(location===''||location==="all"||dataLocation.includes(location)){
                    if(!area||area.max===''||(dataArea>=area.min&&dataArea<=area.max)){
                      if(!price||price.max===''||(dataPrice>=price.min&&dataPrice<=price.max)){
                        return ( 
                          <div className = 'property' key={data.id}>
                            <Card>
                              <CardMedia 
                                component = "img"
                                image = {data.coverPhoto.url}
                                alt = {data.location[3].name}
                                className = 'card_img' /
                              >
                            <CardContent className = 'card_content' >
                              <div style = {{height: "84px"}} >
                                <div style = {{marginBottom: "5px"}}>
                                  <span> <LocationOnIcon className = 'icon' /></span> 
                                  <span style = {{fontSize: "22px"}}>{data.location[3].name}</span>
                                </div> 
                                <div>
                                  <span><LocationCityIcon className = 'icon' / >{data.location[2].name + ", " + data.location[1].name}</span>
                                </div>
                              </div>    
                            <span > < SellIcon className = 'icon' / > {dataPrice} </span>
            
                            
                          <span> <InfoIcon className = 'icon' />{capitalize(data.title.toLocaleLowerCase()).split('',40).join('')+'...'}</span>     
                            <hr style = {{margin: "7px 0px 3px"}}/> 
                          <span className='detail_icon'>
                            <HotelIcon className = 'icon' />
                              {data.rooms}
                              &nbsp;
                            <ShowerIcon className = 'icon' /> 
                              {data.baths}
                              &nbsp; 
                            <CropIcon className = 'icon' /> {dataArea.toFixed(0)+" sqft"} 
                            </span>
                            <Typography variant = "body2"
                            color = "text.secondary" style={{margin:"4px 0"}}> 
                              {dataType}
                            </Typography> 
                            </CardContent > 
                            <CardActions >
                              <Button size = "small" > Share </Button> 
                              <Button size = "small" > Contact Agent </Button> 
                            </CardActions >
                          </Card> 
                        </div>
                        );
                      }
                    }
                  }
                }
              return (null);
            })
            }
            </div>
          )
        }
      </div>
    </Container>
  
  );
};

export default PropertyCard;