import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getBlocks } from "../services/blockService.js";
import Block from "../components/Block.jsx";
import "./Blocks.css";

function Blocks() {
    const [blocks, setBlocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    // Arama varsa filtrele, yoksa tüm blokları göster
    const filteredBlocks = searchQuery
        ? blocks
            .map(block => ({
                ...block,
                products: block.products.filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            }))
            .filter(block => block.products.length > 0)
        : blocks;

    useEffect(() => {
        setLoading(true);
        getBlocks()
            .then(data => setBlocks(data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="blocksPage">
            {searchQuery && (
                <p style={{ textAlign: 'center', margin: '20px' }}>
                    "{searchQuery}" için arama sonuçları
                </p>
            )}

            {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{
                        border: '4px solid #f3f3f3',
                        borderTop: '4px solid #f54a0c',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto'
                    }}></div>
                    <p style={{ marginTop: '20px', color: '#666' }}>Ürünler yükleniyor...</p>
                </div>
            ) : (
                <div className="blocksGrid">
                    {filteredBlocks.length === 0 ? (
                        <p style={{ textAlign: 'center', width: '100%' }}>
                            Ürün bulunamadı
                        </p>
                    ) : (
                        filteredBlocks.map(block => (
                            <Block key={block.id} block={block} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Blocks; 