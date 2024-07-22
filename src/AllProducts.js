import React from 'react';
import Productlist from './Productlist'
import ProductCategoryRow from './ProductCategoryRow';

function AllProducts({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <Productlist
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
      });


   
  return (
    <div className='Products'>
    <table>
      <thead>
        <tr>
          <th className='Header'>Name</th>
          <th className='Header'>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table></div>
  );
}

export default AllProducts;