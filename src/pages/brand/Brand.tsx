// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { saveBrandProducts } from "../Home/redux/actions";
// import { loadBrandProducts } from "../../utils/ajax";

// const Brand = () => {
//   //{ brand }: { brand: string }
//   const dispatch = useAppDispatch();
//   const { brandProducts }: GlobalState = useAppSelector(
//     (state) => state.homeReducer
//   );

//   useEffect(() => {
//     const fetchBrandProducts = async () => {
//       try {
//         const { data } = await loadBrandProducts(brand);
//         dispatch(saveBrandProducts(data.products));
//       } catch (error) {
//         console.log("err", error);
//       }
//     };

//     fetchBrandProducts();
//   }, [brand]);

//   return <div></div>;
// };

// export default Brand;

// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { saveBrandProducts } from "../../pages/Home/redux/actions";
// import { loadBrandProducts } from "../../utils/ajax";

// const Brand = () => {
//   const { brand } = useParams<{ brand: string }>();
//   const dispatch = useAppDispatch();
//   const { brandProducts } = useAppSelector((state) => state.homeReducer);

//   useEffect(() => {
//     const fetchBrandProducts = async (brand: string) => {
//       try {
//         const { data }: any = await loadBrandProducts(brand);
//         if (Array.isArray(data.products)) {
//           const results = data.products;
//           dispatch(saveBrandProducts(results));
//         } else {
//           dispatch(saveBrandProducts([]));
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchBrandProducts(brand!);
//   }, [brand, dispatch]);

//   return (
//     <div>
//       {brandProducts.map((pro: any) => {
//         return <div>{pro}</div>;
//       })}
//     </div>
//   );
// };

// export default Brand;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveBrandProducts } from "../../pages/Home/redux/actions";
import {
  getAllProducts,
  loadBrandProducts,
  loadProductItemSlider,
} from "../../utils/ajax";
import ProductCard from "../../components/productCard";

const Brand = () => {
  const { brand } = useParams<{ brand: string }>();
  console.log(typeof brand, brand);
  const dispatch = useAppDispatch();
  const { brandProducts }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  useEffect(() => {
    const fetchBrandProducts = async (brand: string) => {
      try {
        const { data } = await loadBrandProducts(brand);
        dispatch(saveBrandProducts(data.products));
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchBrandProducts(brand!);
  }, []);

  return (
    <div
      style={{
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        display: "grid",
        gridTemplateColumns: "repeat(4,250px)",
        gap: "20px",
      }}
    >
      {brandProducts.map((pro: any) => {
        return (
          <div key={pro.id}>
            <ProductCard product={pro} />
          </div>
        );
      })}
      {/* {brandProducts} */}
    </div>
  );
};

export default Brand;
