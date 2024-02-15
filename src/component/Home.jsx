import { Route, Routes } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner2/Banner2";
import Blog2 from "./Blog2/Blog2";
import Header_slider from "./Header/Header-slider/Header_slider";
import New from "./NewLetter/New";
import Product from "./Product/Product";
import Product2 from "./Product2/Product2";
import Shop_default from "./Shop_default/Shop_default";
import Ads from "./ads/Ads";
import Blog from "./blog/Blog";
import Download from "./download/Download";
import Feature from "./feature/Feature";
import { useEffect, useState } from "react";
import CategoryProduct from "./Product2/CategoryProduct";
export default function Home() {
  const [categories, setCategories] = useState([]);

  const getCategories = () =>{
        fetchDataFromApi('/api/category2s?populate=*').then((res) =>{
          setCategories(res.data);
            console.log(res)
        })
        
  }
  useEffect(() =>{
    getCategories()
  }, [])
  return (
    <div id="homepage-1">
        <Header_slider/>
        <Banner />
        <Product/>
        <Banner2 /> 
        <Product2 categories={categories} />
        <Blog/> 
        <Blog2/>
        <Feature/>
        <Ads/>
       <Download/>
       <New/>
    </div>
  )
}
