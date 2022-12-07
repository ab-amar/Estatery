import React, { createContext, useState, useContext } from 'react';

const Property = createContext();

const PropertyContext = ({children}) => {

    // const [price, setPrice] = useState({min:'',max:''});
    const [price, setPrice] = useState('');
    const [type,setType] = useState("");
    // const [area,setArea] = useState({min:'',max:''});
    const [area,setArea] = useState('');
    const [location,setLocation] = useState("");
    const [search,setSearch] = useState('');
    
  return (
    <Property.Provider value={{price,type,area,location,setPrice,setType,setArea,setLocation,search,setSearch}}>{children}</Property.Provider>
  ) 
}

export default PropertyContext;

export const PropertyState = () => {
   return useContext(Property);
}