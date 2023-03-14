import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, loadProducts } from "../../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";
import { Divider, Spin } from 'antd';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector(state => state.productReducer.status)
  const error = useSelector(state => state.productReducer.error)

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // async function fetchData() {
  //   const response = await fetch("https://api.escuelajs.co/api/v1/products");
  //   const data = await response.json();
  //   dispatch(loadProducts(data));
  // }

  if(status ===  "loading"){
return <>
<h1 style={{position:'absolute' , top:'30%', left:'46%',color:"grey"}} >Loading...</h1>
<Spin style={{position:'absolute' , top:'40%', left:'50%'}} />
</> 
  }

  if(status === "failed")
{
  return <>
    <h3 style={{position:'absolute' , top:'30%', left:'30%',color:"grey"}}>"uh oh!! something went wrong! try again after sometime!!"</h3>
<h4 style={{position:'absolute' , top:'40%', left:'45%',color:"grey"}}> {error} </h4>
  </>
}
  return (
    <div className="productList">
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
