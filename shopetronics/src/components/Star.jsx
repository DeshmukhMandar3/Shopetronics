import {Text,Box} from "@chakra-ui/react"


export default function Star({rating,count}){
    const ratingStar=Array.from({length:5},(elem,index)=>{
        let number=index+0.5;
    
    return (
        <span key={index}>{
            (+(rating)) >= index+1 ? <span class="material-symbols-outlined" style={{color:"RGB(207 185 18)"}}>star</span> : 
            (+(rating)) >= number ? <span class="material-symbols-sharp" style={{color:"RGB(207 185 18)"}}>star_half</span> :
            <span class="material-symbols-sharp" style={{color:"RGB(207 185 18)"}}>star</span>
        }</span>
      
      )
    });

    return(
        <Box display="flex" alignItems="center">
            <div>{ratingStar}</div>
            <Text fontSize={"15px"} marginLeft="10px">{count}</Text>
        </Box>
    )
}


  // <span class="material-symbols-outlined">star</span>
        // <span class="material-symbols-sharp">star</span>
        // <span class="material-symbols-sharp">star_half</span>