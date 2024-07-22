import SearchBar from "./SearchBar";
import AllProducts from "./AllProducts";
import { useState } from "react";

export default function FilterProductTable({products})
{
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    
return(
    <>
    <div style={{ textAlign: 'center' }}>
       <h1 style={{ color: 'brown' }}>Let search the Products!</h1>   
    </div>
    <div style={{ display: 'grid', gap: '30px' }}>
    <SearchBar filterText= {filterText} inStockOnly= {inStockOnly} onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
    <AllProducts products = {products} filterText= {filterText} inStockOnly= {inStockOnly}/>
    </div>
    </>
);
}

