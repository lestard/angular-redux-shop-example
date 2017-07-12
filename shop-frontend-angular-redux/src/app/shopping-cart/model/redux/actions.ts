import {Injectable} from "@angular/core";
import {FluxStandardAction} from "flux-standard-action";
import {dispatch} from "@angular-redux/store";
import {Product} from "../../../products/model/products.types";

export type ShoppingCartAction = FluxStandardAction<Product,any>;

@Injectable()
export class ShoppingCartActions {
    static readonly ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART';
    static readonly REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART';

    @dispatch()
    addItemToShoppingCart = (product: Product): ShoppingCartAction => ({
        type: ShoppingCartActions.ADD_ITEM_TO_SHOPPING_CART,
        meta: null,
        payload: product
    });

    @dispatch()
    removeItemFromShoppingCart = (product: Product): ShoppingCartAction => ({
        type: ShoppingCartActions.REMOVE_ITEM_FROM_SHOPPING_CART,
        meta: null,
        payload: product
    });
}
