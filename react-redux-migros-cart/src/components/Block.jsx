import ProductCard from './ProductCard';
import "./Block.css";

function Block({ block}) {
    return (
        <div className="blockCard"> 
        <h2>{block.title}</h2>
        {block.products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
    );
}
export default Block;
