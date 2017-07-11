import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { StoreModule } from './store/module';
import { RouterModule } from '@angular/router';
//import { ShoppingCartModule } from "./shopping-cart/shopping-cart.module";
import { appRoutes } from "./routes";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductsModule,
        //ShoppingCartModule,
        StoreModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
