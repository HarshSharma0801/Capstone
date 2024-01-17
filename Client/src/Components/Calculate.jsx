import { useState, useEffect } from "react";
import axios from 'axios'
const Calculate = () => {
  const [demo, setDemo] = useState([]);

  const getdata = async() => {
    try {
        await  axios.get('/main' , {
          params:{
            main:"all"
          }
        }).then(res=>{
            if(res.data.valid){
              console.log(res.data.data)
                setDemo(res.data.data)
                console.log(res.data.data.length)
            }
        })
    } catch (error) {
      console.log(error);
    }
  };
// useEffect(()=>{
//     getdata();
// },[])
  const groupedData =
    demo &&
    demo.reduce((accumulator, currentItem) => {
      const { country, intensity } = currentItem;
      if (!accumulator[country]) {
        accumulator[country] = {  count: 1 };
      } else {
        accumulator[country].count += 1;
      }
      return accumulator;
    }, {});

  console.log(groupedData && groupedData);
  const countrys =groupedData && Object.keys(groupedData);
  console.log(countrys && countrys);
  return <>
  <h1>{demo &&  <h1>demo</h1>}</h1>
  </>;
};

export default Calculate;
