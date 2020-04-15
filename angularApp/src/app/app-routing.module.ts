import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GetdetailComponent } from './getdetail/getdetail.component';
import { AdddetailComponent } from './adddetail/adddetail.component';
import { UpdatedetailComponent } from './updatedetail/updatedetail.component';

const routes: Routes = [{ path: 'viewDetails', component: DetailsComponent },
                        { path: 'getdetail/:id', component: GetdetailComponent },
                        { path: 'add', component: AdddetailComponent },
                        { path: 'updatedetail/:id', component: UpdatedetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
