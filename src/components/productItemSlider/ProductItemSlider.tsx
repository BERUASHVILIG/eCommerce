import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadProductItemSlider } from "../../utils/ajax";
import { saveProductItemSlider } from "../../pages/Home/redux/actions";

const ProductItemSlider = ({ brand }: { brand: string }) => {
  const dispatch = useAppDispatch();
  const { productItemSlider }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );

  useEffect(() => {
    const fetchProductItemSlider = async () => {
      try {
        const { data } = await loadProductItemSlider(brand);
        console.log({ data });
        dispatch(saveProductItemSlider(data.products));
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchProductItemSlider();
  }, [brand]);

  return (
    <div style={{ display: "flex" }}>
      {productItemSlider.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <h1>{item.brand}</h1>
              <img src={item.images[0]} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItemSlider;
