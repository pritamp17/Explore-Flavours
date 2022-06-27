import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = async(searchTerm) => {
  
  return fetch(`${host}/geocode?city=${searchTerm}`).
  then((res) => {
    console.log(res)
    return res.json();
  });

 
};

// async function locationRequest(searchTerm) {
  
//    await fetch(
//     `http://192.168.167.118/mealstogo-b2612/us-central1/geocode?city=${searchTerm}`
//   ).then((res) => {
//     console.log(res)
//     return res.json();
//   });
 
// };



export const locationTransform = (result) => {
  // console.log(result)
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};