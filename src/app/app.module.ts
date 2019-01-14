import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule , FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import {ChartsModule} from 'ng2-charts'
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AjoutMenuComponent } from './ajout-menu/ajout-menu.component';
import { AjoutTypePlatComponent } from './ajout-type-plat/ajout-type-plat.component';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ListTypePlatComponent } from './list-type-plat/list-type-plat.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import { EditTypeComponent } from './edit-type/edit-type.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { MenushowComponent } from './menushow/menushow.component';
import { StatsComponent } from './stats/stats.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {LoginComponent} from './login/login.component'
import {AuthGuard} from './auth.guard'
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AjoutMenuComponent,
        AjoutTypePlatComponent,
        AjoutUserComponent,
        ListUserComponent,
        ListMenuComponent,
        ListTypePlatComponent,
        EditTypeComponent,
        EditUserComponent,
        EditMenuComponent,
        MenushowComponent,
        StatsComponent,
        NotfoundComponent,
        LoginComponent

    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
        ChartsModule,
        
    ],
    providers: [DataServiceService , AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
