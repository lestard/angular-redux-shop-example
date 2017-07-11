import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Product, ProductCategory, ProductCategoryRestResponse, ProductRestResponse} from '../products.types';
import { Href } from "../../common-types";

@Injectable()
export class ProductsService {

    constructor(private http: Http) {
    }

    loadProducts = (): Observable<Product[]> =>
        this.http.get('/api/rest/products')
            .map(response => response.json())
            .map(response => {
                let productResponses: Array<ProductRestResponse> = response._embedded.products;

                let productList: Array<Product> = productResponses.map(productResponse => {
                    let result: Product = {
                        id: productResponse._links.self.href,
                        name: productResponse.name,
                        description: productResponse.description,
                        image: productResponse.imageUrl,
                        price: productResponse.price,
                        categoryIds: []
                    };

                    if (productResponse._links.productCategories) {
                        result.categoryIds = productResponse._links.productCategories.map((link: Href) => link.href);
                    }

                    return result;
                });

                return productList;
            });


    loadProductCategories = (): Observable<ProductCategory[]> =>
        this.http.get('/api/rest/productCategories')
            .map(response => response.json())
            .map(response => {
                let productCategoryResponses: Array<ProductCategoryRestResponse> = response._embedded.productCategories;

                let categoryList: Array<ProductCategory> = productCategoryResponses.map(categoryResponse => {
                    return {
                        id: categoryResponse._links.self.href,
                        name: categoryResponse.name,
                    }
                });
                return categoryList;
            });

}
