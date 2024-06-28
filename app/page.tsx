// "use client"
import Image from "next/image";
import axios from "axios";

export default function Home(){
  return <>hi there</>
}

// const getUserData=async()=>{

//   const headers={
//     "a":545,
//     "b":455
//   }
//   const res = await axios.get("http://localhost:4001/sum1",{headers});
//   const result = {
//     msg: res.data.msg,
//     data: res.data.data,
//   };

//   setTimeout(()=>{

//     console.log(result);
//   },1000);
//   return res.data;
// }


// async components ----this is done only in next js and in only server side components not in client components  
// export default async function Home() {


  // const userDetails=await getUserData();
  // const handler=async()=>{
  //   const headers={
  //     a:454,
  //     b:545

  //   }
  //   const res = await axios.get("http://localhost:4001/sum1",{headers});
  //   const result={
  //     msg:res.data.msg,
  //     data:res.data.data
  //   }

    // console.log(result);
    // alert(result);

  
  // return (
  //   <>
      {/* <div>hi there  +{userDetails}</div> */}
      {/* <div><button onClick={handler}>submit</button></div> */}
      {/* <div><button onClick={handler}>submit</button></div> */}
    {/* </>
  );
} */}
