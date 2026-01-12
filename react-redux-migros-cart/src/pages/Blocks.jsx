import {useEffect, useState} from "react";
import {getBlocks} from "../services/blockService.js";
import Block from "../components/Block.jsx";

function Blocks(){
    const [blocks,setBlocks]=useState([]);

    useEffect(()=>{
        getBlocks().then(data=>setBlocks(data));
    },[]);
    return(
        <div
        style={{
          display: "flex",
          gap:"24px",
          justifyContent:"center",
          flexWrap:"wrap",
        }}
        >
      {blocks.map(block => (
        <Block key={block.id} block={block} />
      ))}
    </div>
    );
}

export default Blocks;