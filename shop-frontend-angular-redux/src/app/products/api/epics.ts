import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import {} from '../products.types';
import {ProductActions, ProductAPIAction, ProductCategoryActions, ProductCategoryAPIAction} from './actions';
import {ProductsService} from './service';
import {AppState} from "../../store/model";

@Injectable()
export class ProductComponentEpics {
    constructor( private service: ProductsService, private productsActions: ProductActions, private productCategoryActions: ProductCategoryActions){

    }

    public createEpics()
    {
        return [
            createEpicMiddleware(this.createLoadProductsEpic()),
            createEpicMiddleware(this.createLoadProductCategoriesEpic())
        ];
    }

    private createLoadProductsEpic(): Epic<ProductAPIAction, AppState> {
        return (action$, store) => action$
            .ofType(ProductActions.LOAD_PRODUCTS)
            .switchMap(() => this.service.loadProducts())
            .map(data => this.productsActions.loadSucceeded(data))
            .catch(response => of(this.productsActions.loadFailed({status: '' + response.status})))
            .startWith(this.productsActions.loadStarted());
    }

    private createLoadProductCategoriesEpic(): Epic<ProductCategoryAPIAction, AppState> {
        return (action$, store) => action$
            .ofType(ProductCategoryActions.LOAD_PRODUCT_CATEGORIES)
            .switchMap(() => this.service.loadProductCategories())
            .map(data => this.productCategoryActions.loadSucceeded(data))
            .catch(response => of(this.productCategoryActions.loadFailed({status: '' + response.status})))
            .startWith(this.productCategoryActions.loadStarted());
    }
}
