import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProblemService } from './services/problem.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PtoComponent } from './pto/pto.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { UserBoardComponent } from './user-board/user-board.component';

import { authInterceptorProviders } from './services/auth.interceptor';
import { ProfileboardComponent } from './profileboard/profileboard.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PtoComponent,
    AdminBoardComponent,
    UserBoardComponent,
    ProfileboardComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    FontAwesomeModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ProblemService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
