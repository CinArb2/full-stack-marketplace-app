import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {fetchRelatedProducts,fetchSelectedProduct,  fetchCategories, removeProductSelected} from '../redux/products/productActionCreators'
import style from '../styles/ProductDetail.module.css'
import CarouselProduct from '../components/CarouselProduct'
import ProductInfo from '../components/ProductInfo'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { MdOutlineDoubleArrow } from 'react-icons/md';


const ProductDetail = () => {
  const selectedProduct = useSelector(state => state.products.selectedProduct)
  const relatedProd = useSelector(state => state.products.relatedProd)
  const categories = useSelector(state => state.products.categories)
  const { id } = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchSelectedProduct(id))
    dispatch(fetchCategories())
  }, [dispatch, id])

  useEffect(() => {
    const idSelected = categories.find(el => el.id === selectedProduct.categoryId)?.id

    if (idSelected) {
      dispatch(fetchRelatedProducts(idSelected))
    }
  }, [dispatch, categories, selectedProduct.categoryId])

  useEffect(() => {
    return () => {
      dispatch(removeProductSelected())
    }
  }, [dispatch])

  return (
    <div className={style.productDetailWrapper}>
      <div className={style.breadcrumWrapper}>
        <Link to='/' className={style.breadcrumbLink}>Home</Link>
        <span className={style.separator}><MdOutlineDoubleArrow/></span>
        <span className={style.breadcrumb}>{selectedProduct?.title}</span>
      </div>
      <div className={style.productDescription}>
        <div className={style.carouselContainer}>
          <CarouselProduct />
        </div>
        <div className={style.ProductInfo}>
          <ProductInfo />
        </div>
      </div>
      <div className={style.containerRelatedProducts}>
        <h2 className={style.subheading}>Discover similar products</h2>
        <div className={style.relatedProducts}>
          {relatedProd.map(product => (
            <ProductCard
              key={product.id}
              productInfo={product}
              path={'/product/'} />
            )) }
        </div>
      </div>
    </div>
  )
}

export default ProductDetail