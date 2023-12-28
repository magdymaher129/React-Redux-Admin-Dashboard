import "bootstrap/dist/css/bootstrap.min.css";
import NavHeader from "./navHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";

import AdminAddItem from "./AdminComponents/jsx/AdminAddItem";
import AddCategories from "./AdminComponents/jsx/categories/AddCategories";
import AddBrands from "./AdminComponents/jsx/Brands/AddBrands";
import AddProducts from "./AdminComponents/jsx/Products/AddProducts";
import CategoryUpdate from "./AdminComponents/jsx/categories/CategoryUpdate";
import BrandUpdate from "./AdminComponents/jsx/Brands/BrandUpdate";
import ProductUpdate from "./AdminComponents/jsx/Products/ProductUpdate";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setError,
  setLoading,
  setMetaCategory,
} from "./redux/slice/categorySlice";
import { useQuery } from "@apollo/client";
import {
  setBrandData,
  setMetaBrand,
  setBrandError,
  setBrandLoading,
} from "./redux/slice/brandSlice";
import GET_Colors from "./AdminComponents/gql/colors/getColors";
import {
  setColorData,
  setColorError,
  setColorLoading,
} from "./redux/slice/colorSlice";
import GET_Sizes from "./AdminComponents/gql/sizes/getSizes";
import {
  setSizeData,
  setSizeError,
  setSizeLoading,
} from "./redux/slice/sizeSlice";
import { GET_PRODUCTS } from "./AdminComponents/gql/getProducts";
import {
  setProductData,
  setMetaData,
  setProductError,
  setProductLoading,
} from "./redux/slice/productSlice";
import GET_BRAND_BY_PAGE from "./AdminComponents/gql/brands/getBrandByPage";
import GET_Category_BY_PAGE from "./AdminComponents/gql/category/getCategorybyPage";
import HomeAdminPage from "./AdminComponents/pages/HomeAdminPage";
import CategoryPage from "./AdminComponents/pages/CategoryPage";



import BrandPage from "./AdminComponents/pages/BrandPage";
import Home from "./AdminComponents/panel/Home";
import Panel from "./AdminComponents/panel/Panel";
import ProductPages from "./AdminComponents/panel/ProductPage";
import ProductPanel from "./AdminComponents/panel/ProductPage";
import CategoryPanel from "./AdminComponents/panel/CategoryPanel";
import BrandPanel from "./AdminComponents/panel/BrandPanel";
import Head from "./AdminComponents/panel/Head";
import SBar from "./AdminComponents/panel/SBar";

export const productContext = createContext();

const App = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector((state) => state.pagination.pageSize);
  const currentPage = useSelector((state) => state.pagination.page);
  
  const catSize = useSelector((state) => state.pagination.catSize);
  const  currentCatPage= useSelector((state) => state.pagination.catPage);
  
  const brandSize = useSelector((state) => state.pagination.brandSize);
  const  currentBrandPage= useSelector((state) => state.pagination.brandPage);
  
  
  
  
  
  const {
    data: category,
    loading,
    error,
  } = useQuery(GET_Category_BY_PAGE, {
    variables: { pageSize: catSize, page: currentCatPage },
  });
  const {
    data: brand,
    loading: loadingBrand,
    error: errorBrand,
  } = useQuery(GET_BRAND_BY_PAGE, {
    variables: { pageSize: brandSize, page: currentBrandPage },
  });

  const {
    data: dataColor,
    loading: loadingColors,
    error: errorColors,
  } = useQuery(GET_Colors);
  const {
    data: dataSize,
    loading: loadingSizes,
    error: errorSizes,
  } = useQuery(GET_Sizes);
  // const[count,setCount] = useState(0);
  const {
    data: dataProduct,
    loading: loadingProducts,
    error: errorProducts,
  } = useQuery(GET_PRODUCTS, {
    variables: { pageSize: pageSize, page: currentPage },
  });

  useEffect(() => {
    if (category) {
      dispatch(setData(category.categories.data)); // Dispatch action to set data in Redux store
      dispatch(setMetaCategory(category.categories.meta.pagination));
      dispatch(setLoading(loading)); // Dispatch action to set loading status
      dispatch(setError(error)); // Dispatch action to set error status
    }

    if (brand) {
      dispatch(setBrandData(brand.brands.data)); // Dispatch action to set data in Redux store
      dispatch(setMetaBrand(brand.brands.meta.pagination));
      dispatch(setBrandLoading(loadingBrand)); // Dispatch action to set loading status
      dispatch(setBrandError(errorBrand)); // Dispatch action to set error status
    }
    if (dataColor) {
      dispatch(setColorData(dataColor.colors.data)); // Dispatch action to set data in Redux store
      dispatch(setColorLoading(loadingColors)); // Dispatch action to set loading status
      dispatch(setColorError(errorColors)); // Dispatch action to set error status
    }
    if (dataSize) {
      dispatch(setSizeData(dataSize.sizes.data)); // Dispatch action to set data in Redux store
      dispatch(setSizeLoading(loadingSizes)); // Dispatch action to set loading status
      dispatch(setSizeError(errorSizes)); // Dispatch action to set error status
    }
    if (dataProduct) {
      dispatch(setProductData(dataProduct.products.data)); // Dispatch action to set data in Redux store
      dispatch(setMetaData(dataProduct.products.meta.pagination));
      dispatch(setProductLoading(loadingProducts)); // Dispatch action to set loading status
      dispatch(setProductError(errorProducts)); // Dispatch action to set error status
    }

    console.log("dataProduct", dataProduct);
  }, [
    dispatch,
    category,
    loading,
    error,
    brand,
    dataColor,
    dataSize,
    dataProduct,
  ]);

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const itemValue = {
    color,
    setColor,
    size,
    setSize,
  };
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }
  return (
    <BrowserRouter>
      {/* <NavHeader /> */}
      {/* <div className='grid-Product'>
    <Head OpenSidebar={OpenSidebar}/>
    <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <productContext.Provider value={itemValue}>
        <Routes>
          <Route path='/' element={<Panel />} />
        <Route path='/product' element={<ProductPanel />} /> 
          <Route path='/category' element={<CategoryPanel />} />
          <Route path='/brand' element={<BrandPanel />} />
          <Route path='/additem' element={<AdminAddItem />} />
          <Route path='/addcat' element={<AddCategories />} />
          {/* <Route path="/updatecat/:id" element={<UpdateCategory/>}/> */}
          <Route path='/addbrand' element={<AddBrands />} />
          <Route path='/updatecat/:id' element={<CategoryUpdate />} />
          {/* <Route path="/updatecat/:id" element={<CatUpdate/>}/> */}
          <Route path='/updatebrand/:id' element={<BrandUpdate />} />
          <Route path='/updateproduct/:id' element={<ProductUpdate />} />
          <Route path='/addproduct' element={<AddProducts />} />
        </Routes>
      </productContext.Provider>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default React.memo(App);
