// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "../../utils/api";

// export default function Single_Item({id}) {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

    
//   };
//   useEffect(() => {
//     getProducts();
//   }, []);
//   console.log(categories)
//   return (
//     <>
//       {
//         products.map((value) => {
//           <div
//             key={value.id}
//             className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 "
//           >aaaaaaa
//             <div className="ps-product">
//               <div className="ps-product__thumbnail">
//                 <a href={`/item/${value.id}`}>
//                   <img src={"http://localhost:1337" + value.attributes.Image.data[0].url} alt="" />
//                 </a>
//               </div>
//             </div>
//           </div>;
//         })}
//     </>
//   );
// }
