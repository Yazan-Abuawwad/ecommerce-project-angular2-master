import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductService} from "./services/product.service";
import {AdminLayoutModule} from "./layouts/admin-layout/admin-layout.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AdminLayoutModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,


  ],
  providers: [ProductService],
  bootstrap: [AppComponent]

})
export class AppModule { }
