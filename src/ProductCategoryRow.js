
export default function ProductCategoryRow({category}) {
  return (
    <tr style={{color : 'blue'}}>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}
