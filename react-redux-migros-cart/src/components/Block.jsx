import ProductCard from './ProductCard';

function Block({ block}) {
    return (
        <div
        style={{
            width:"220px",
            textAlign:"center",
            border:"1px solid #444",
            padding:"12px",
            borderRadius:"8px",
        }}  
    >
        <h2>{block.title}</h2>
        {block.products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
    );
}
export default Block;
