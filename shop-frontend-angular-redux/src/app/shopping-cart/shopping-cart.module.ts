import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartViewComponent } from './components/shopping-cart-view/shopping-cart-view.component';
import {ShoppingCartActions} from "./model/redux/actions";
import {ShoppingCartRoutingModule} from "./shopping-cart.routing-module";

@NgModule({
    imports: [
        CommonModule, ShoppingCartRoutingModule
    ],
    providers: [
        ShoppingCartActions,
    ],
    exports: [
        //ShoppingCartViewComponent,
    ],
    declarations: [ShoppingCartViewComponent]
})
export class ShoppingCartModule {
}
