import { URI, ID, Href, IdMap } from '../common-types';



export type Product = {
    id: ID,
    name: string,
    description: string,
    image: URI,
    price: number,
    categoryIds: Array<ID>,
}

export type ProductWithFullCategories = Product & {
    categories: Array<ProductCategory>
}

export type ProductRestResponse = {
  name: string,
  description: string,
  imageUrl: URI,
  price: number,
  _links: {
    self: Href,
    product: Href,
    productCategories: Array<Href>,
    categories: Href
  }
}

export type ProductCategory = {
    id: ID,
    name: string,
}


export type ProductCategoryRestResponse = {
  name: string,
  _links: {
    self: Href,
    productCategory: Href,
    products: Href
  }
}

export type ProductsState = {
    entities: IdMap<Product>,
    loading: boolean
}

export type ProductCategoriesState = {
    entities: IdMap<ProductCategory>,
    loading: boolean
}
