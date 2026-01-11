import {useEffect, useState} from "react";
import {getBlocks} from "../services/blockService.js";

function Blocks(){
    const [blocks,setBlocks]=useState([]);

    useEffect(()=>{
        getBlocks().then(data=>setBlocks(data));
    },[]);
    return(
        <div>
      {blocks.map(block => (
        <div key={block.id}>
          <h2>{block.title}</h2>

          <div style={{ display: "flex", gap: "16px" }}>
            {block.products.map(product => (
              <div key={product.id}>
                <img src={product.image} width={120} />
                <p>{product.name}</p>
                <p>{product.price} ₺</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blocks;