import React from 'react'
export default function SearchBar ({filterText, inStockOnly,onFilterTextChange,
  onInStockOnlyChange}) {
  return (
    <div className='Products'>
    <form >
        <input type="text" value={filterText} placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
        <br/>
        <label>
        <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
        {' '}
        Only show products in stock
      </label>
    </form>
    </div>
  );
}
