import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GetdetailComponent } from './getdetail/getdetail.component';
import { FormsModule } from '@angular/forms';
import { AdddetailComponent } from './adddetail/adddetail.component';
import { UpdatedetailComponent } from './updatedetail/updatedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FooterComponent,
    HeaderComponent,
    GetdetailComponent,
    AdddetailComponent,
    UpdatedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
