import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumbs'

function Product(props) {
  //使用鉤子
  let { id } = useParams()
  return (
    <>
      <h1>Product</h1>
      <Breadcrumb />
      <h3>{id}</h3>
    </>
  )
}

export default Product
