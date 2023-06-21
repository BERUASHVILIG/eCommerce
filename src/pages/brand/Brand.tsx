import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveBrandProducts } from "../../pages/Home/redux/actions";
import { loadBrandProducts } from "../../utils/ajax";
import ProductCard from "../../components/productCard";

import { Box, Tab, Tabs } from "@mui/material";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import WatchIcon from "@mui/icons-material/Watch";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AppsIcon from "@mui/icons-material/Apps";

import {
  BrandImageContainer,
  BrandCategory,
  BrandContainer,
} from "./Brand.Styles";

import google from "../../images/brand-img/brand-google.png";
import dyson from "../../images/brand-img/brand-dyson.png";
import microsoft from "../../images/brand-img/brand-microsoft.png";
import jbl from "../../images/brand-img/brand-jbl.png";
import amazon from "../../images/brand-img/brand-amazon.png";
import sony from "../../images/brand-img/sony-brand.png";
import canon from "../../images/brand-img/brand-canon.png";
import apple from "../../images/brand-img/brand-apple.png";
import realme from "../../images/brand-img/brand-realme.png";
import huawei from "../../images/brand-img/brand-huawei.png";

interface BrandImages {
  [key: string]: string;
}

const Brand = () => {
  const { brand } = useParams<{ brand: string }>();
  const dispatch = useAppDispatch();
  const { brandProducts }: GlobalState = useAppSelector(
    (state) => state.homeReducer
  );
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [filteredBrandProducts, setFilteredBrandProducts] =
    useState<any[]>(brandProducts);

  useEffect(() => {
    const fetchBrandProducts = async (brand: string, category: string) => {
      try {
        const selectedCategory = getSelectedCategory(brand, category);
        const { data } = await loadBrandProducts(brand, selectedCategory);
        dispatch(saveBrandProducts(data.products));
      } catch (error) {
        console.log("err", error);
      }
    };
    if (brand) {
      fetchBrandProducts(brand, selectedTab);
    }
  }, [brand, selectedTab]);

  const getSelectedCategory = (brand: string, tab: string) => {
    if (tab === "All") {
      return "";
    } else if (tab === "phone") {
      return `phone ${brand}`;
    } else if (tab === "watch") {
      return `watches ${brand}`;
    } else if (tab === "tv") {
      return `TVs ${brand}`;
    }
    return "";
  };

  const filterProductsByTab = (tab: string) => {
    if (tab === "All") {
      return brandProducts;
    } else {
      return brandProducts.filter((product) =>
        product.title.toLowerCase().includes(tab.toLowerCase())
      );
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const filteredProducts = filterProductsByTab(selectedTab);
    setFilteredBrandProducts(filteredProducts);
  }, [brandProducts, selectedTab]);

  const brandImages: BrandImages = {
    Apple: apple,
    Huawei: huawei,
    Realme: realme,
    Sony: sony,
    Dyson: dyson,
    Microsoft: microsoft,
    Google: google,
    JBL: jbl,
    amazon: amazon,
    Canon: canon,
  };

  const selectedBrandImage = brand ? brandImages[brand] : "";

  return (
    <Box>
      {brand && selectedBrandImage && (
        <BrandImageContainer>
          <img
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "180px",
            }}
            src={brandImages[brand]}
            alt={brand}
          />
        </BrandImageContainer>
      )}
      <BrandCategory>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" icon={<AppsIcon />} value="All" />
          <Tab label="Phone" icon={<PhoneIphoneIcon />} value="phone" />
          <Tab label="Watch" icon={<WatchIcon />} value="watch" />
          <Tab label="TV" icon={<LiveTvIcon />} value="tv" />
        </Tabs>
      </BrandCategory>
      <BrandContainer>
        {filteredBrandProducts.map((pro: any) => (
          <div key={pro.id}>
            <ProductCard product={pro} />
          </div>
        ))}
      </BrandContainer>
    </Box>
  );
};

export default Brand;
