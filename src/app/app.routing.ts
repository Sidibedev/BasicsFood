import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import {AjoutMenuComponent} from './ajout-menu/ajout-menu.component'
import {AjoutTypePlatComponent} from './ajout-type-plat/ajout-type-plat.component'
import {AjoutUserComponent} from './ajout-user/ajout-user.component'
import {ListUserComponent} from './list-user/list-user.component'
import {ListMenuComponent} from './list-menu/list-menu.component'
import {ListTypePlatComponent} from './list-type-plat/list-type-plat.component'
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {EditTypeComponent} from './edit-type/edit-type.component'
import {EditUserComponent } from './edit-user/edit-user.component'
import {EditMenuComponent} from './edit-menu/edit-menu.component'
import {MenushowComponent} from './menushow/menushow.component'
import {StatsComponent} from './stats/stats.component'
import {NotfoundComponent} from './notfound/notfound.component'
const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'membres',     component: LandingComponent },
    { path: 'login',       component: LoginComponent },
    { path: 'profile',     component: ProfileComponent },
    { path: 'ajoutmenu',     component: AjoutMenuComponent },
    { path: 'ajoutuser',     component: AjoutUserComponent },
    { path: 'ajoutypeplat',     component: AjoutTypePlatComponent },
    { path: 'editType/:id',     component: EditTypeComponent },
    { path: 'editUser/:id',     component: EditUserComponent },
    { path: 'editMenu/:id',     component: EditMenuComponent },
    { path: 'listmenu',     component: ListMenuComponent },
    { path: 'listuser',     component: ListUserComponent },
    { path: 'showmenu',     component: MenushowComponent },
    { path: 'listtypeplat',     component: ListTypePlatComponent },
    { path: 'stats',     component: StatsComponent },
    { path: 'notfound',     component: NotfoundComponent },
    {
        path: '**',
        redirectTo: '/notfound',
        pathMatch: 'full'
    }
    
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
