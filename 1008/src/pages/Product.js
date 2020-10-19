import React, { useState, useEffect } from 'react'
import { Link, Redirect, Switch, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumbs'

function Product(props) {
  const { isAuth } = props
  //使用鉤子
  let { id } = useParams()

  console.log(props)
  if (isAuth === false) return <Redirect to="/register" />

  return (
    <>
      <h1>Product</h1>
      <Breadcrumb />
      <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
      <h3>{id}</h3>
    </>
  )
}

export default Product
