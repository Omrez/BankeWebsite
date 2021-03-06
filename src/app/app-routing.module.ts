import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PtoComponent } from './pto/pto.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { ProfileboardComponent } from './profileboard/profileboard.component';
import { OpretbrugerComponent } from './opretbruger/opretbruger.component';
import { UpdateContentComponent } from './update-content/update-content.component';
import { AddcontentComponent } from './addcontent/addcontent.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'pto', component: PtoComponent},
  {path: 'admin', component: AdminBoardComponent},
  {path: 'user', component: UserBoardComponent},
  {path: 'profile', component: ProfileboardComponent},
  {path: 'opretbruger', component: OpretbrugerComponent},
  {path: 'update/:id', component: UpdateContentComponent},
  {path: 'add-service', component: AddcontentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent]
