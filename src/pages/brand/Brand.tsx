// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { saveBrandProducts } from "../../pages/Home/redux/actions";
// import { loadBrandProducts } from "../../utils/ajax";
// import ProductCard from "../../components/productCard";
// import { Box, Tab, Tabs } from "@mui/material";
// import LiveTvIcon from "@mui/icons-material/LiveTv";
// import WatchIcon from "@mui/icons-material/Watch";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import AppsIcon from "@mui/icons-material/Apps";

// import samsung from "../../images/samsung brand.png";

// const Brand = () => {
//   const { brand } = useParams<{ brand: string }>();
//   const dispatch = useAppDispatch();
//   const { brandProducts }: GlobalState = useAppSelector(
//     (state) => state.homeReducer
//   );
//   const [selectedTab, setSelectedTab] = useState<string>("All");
//   const [filteredBrandProducts, setFilteredBrandProducts] =
//     useState<any[]>(brandProducts);

//   useEffect(() => {
//     const fetchBrandProducts = async (brand: string, category: string) => {
//       try {
//         const selectedCategory = getSelectedCategory(brand, category);
//         const { data } = await loadBrandProducts(brand, selectedCategory);
//         dispatch(saveBrandProducts(data.products));
//       } catch (error) {
//         console.log("err", error);
//       }
//     };
//     fetchBrandProducts(brand!, selectedTab);
//   }, [selectedTab]);

//   const getSelectedCategory = (brand: string, tab: string) => {
//     if (tab === "All") {
//       return "";
//     } else if (tab === "phone") {
//       return `phone ${brand}`;
//     } else if (tab === "watch") {
//       return `watches ${brand}`;
//     } else if (tab === "tv") {
//       return `TVs ${brand}`;
//     }
//     return "";
//   };

//   const filterProductsByTab = (tab: string) => {
//     if (tab === "All") {
//       return brandProducts;
//     } else {
//       return brandProducts.filter((product) =>
//         product.title.toLowerCase().includes(tab.toLowerCase())
//       );
//     }
//   };

//   const handleTabChange = (event: React.SyntheticEvent, tab: string) => {
//     setSelectedTab(tab);
//   };

//   useEffect(() => {
//     const filteredProducts = filterProductsByTab(selectedTab);
//     setFilteredBrandProducts(filteredProducts);
//   }, [brandProducts, selectedTab]);

//   const brandImages = [
//     "apple.png",
//     samsung,
//     "huawei.png",
//     "sony.png",
//     "microsoft.png",
//     "google.png",
//     "jbl.png",
//     "amazon.png",
//     "canon.png",
//   ];

//   return (
//     <Box>
//       {brandImages === brand &&
//         brandImages.map((image) => {
//           return <div></div>;
//         })}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           borderBottom: 1,
//           borderColor: "divider",
//           margin: "auto",
//         }}
//       >
//         <Tabs
//           value={selectedTab}
//           onChange={handleTabChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="All" icon={<AppsIcon />} value="All" />
//           <Tab label="Phone" icon={<PhoneIphoneIcon />} value="phone" />
//           <Tab label="Watch" icon={<WatchIcon />} value="watch" />
//           <Tab label="TV" icon={<LiveTvIcon />} value="tv" />
//         </Tabs>
//       </Box>
//       <Box
//         sx={{
//           margin: "15px auto",
//           justifyContent: "center",
//           alignItems: "center",
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 250px)",
//           gap: "20px",
//         }}
//       >
//         {filteredBrandProducts.map((pro: any) => (
//           <div key={pro.id}>
//             <ProductCard product={pro} />
//           </div>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Brand;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveBrandProducts } from "../../pages/Home/redux/actions";
import { loadBrandProducts } from "../../utils/ajax";
import ProductCard from "../../components/productCard";
import { Box, Paper, Tab, Tabs } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WatchIcon from "@mui/icons-material/Watch";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AppsIcon from "@mui/icons-material/Apps";

import samsung from "../../images/samsung brand.png";
import google from "../../images/google brand.png";
import microsoft from "../../images/microsoft brand.jpg";

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
    apple: "apple.png",
    samsung: samsung,
    huawei: "huawei.png",
    sony: "sony.png",
    microsoft: microsoft,
    google: google,
    jbl: "jbl.png",
    amazon: "amazon.png",
    canon: "canon.png",
  };

  return (
    <Box>
      {brand && brandImages.hasOwnProperty(brand) && (
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            margin: "auto",
          }}
        >
          <img
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "250px",
              height: "180px",
            }}
            src={brandImages[brand]}
            alt={brand}
          />
        </Paper>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: 1,
          borderColor: "divider",
          margin: "auto",
        }}
      >
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
      </Box>
      <Box
        sx={{
          margin: "15px auto",
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "repeat(4, 250px)",
          gap: "20px",
        }}
      >
        {filteredBrandProducts.map((pro: any) => (
          <div key={pro.id}>
            <ProductCard product={pro} />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Brand;
