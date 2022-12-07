import React, { useMemo } from 'react';
import {Select,MenuItem,FormControl,InputLabel} from '@mui/material';
import { PropertyState } from '../PropertyContext';

const Filter = () => {
    const {price,type,area,location,setPrice,setType,setArea,setLocation} = PropertyState();
    const priceArray =useMemo(()=>[
      {max:'',min:''},
      {max:10000,min:0},
      {max:20000,min:10001},
      {max:100000,min:20001},
    ],[]) ;

    const areaArray = useMemo(()=>[
      {max:'',min:''},
      {max:100,min:0},
      {max:150,min:101},
      {max:500,min:151},
    ],[]);

  return (
    <div className='filter_container'>
        <ul className='filter_list'>
            <li className='list_item'>
              <div>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
                  <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  onChange={(e)=>{
                    // setPrice({min:e.target.value.min,max:e.target.value.max});
                    setPrice(e.target.value);
                  }}
                  // value={priceArray[price]}
                  value={price}
                  label="Price"
                  >
                  <MenuItem value={priceArray[0]}>
                      <em>All prices</em>
                  </MenuItem>
                  <MenuItem value={priceArray[1]}> {"< "}10k</MenuItem>
                  <MenuItem value={priceArray[2]}>10k - 20k</MenuItem>
                  <MenuItem value={priceArray[3]}>{"> "}20k</MenuItem>
                  </Select>
              </FormControl>
              </div>
            </li>

            <li className='list_item'>
            <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Floor Area</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={areaArray[area]}
                value={area}
                onChange={(e)=>{
                  // setArea({min:e.target.value.min,max:e.target.value.max});
                  setArea(e.target.value);
                }}
                label="Floor Area"
                >
                <MenuItem value={areaArray[0]}>
                    <em>All area</em>
                </MenuItem>
                <MenuItem value={areaArray[1]}>{"< "}100 sqft</MenuItem>
                <MenuItem value={areaArray[2]}>100-150 sqft</MenuItem>
                <MenuItem value={areaArray[3]}>{"> "}150 sqft</MenuItem>
                </Select>
            </FormControl>
            </div>
            </li>

            <li className='list_item'>
            <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={location}
                onChange={(e)=>{
                  setLocation(e.target.value);
                }}
                label="Location"
                >
                <MenuItem value="all">
                    <em>All location</em>
                </MenuItem>
                <MenuItem value="jumeirah">Jumeirah</MenuItem>
                <MenuItem value="downtown">Downtown</MenuItem>
                <MenuItem value="dubai">Dubai</MenuItem>
                </Select>
            </FormControl>
            </div>
            </li>

            <li className='list_item'>
            <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Popularity</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                defaultValue=""
                value={type}
                onChange={(e)=>{
                  setType(e.target.value)
                }}
                label="Popularity"
                >
                <MenuItem value="all">
                    <em>All popularity</em>
                </MenuItem>
                <MenuItem value="hot">Hot</MenuItem>
                <MenuItem value="superhot">SuperHot</MenuItem>
                
                </Select>
            </FormControl>
            </div>
            </li>
            {/* <li className='list_item'><Button variant="contained" onClick={()=>{}}>Search</Button></li> */}
        </ul>

    </div>
  )
}

export default Filter;
