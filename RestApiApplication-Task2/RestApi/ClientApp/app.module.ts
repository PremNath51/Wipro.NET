import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { SharedModule, ButtonModule, DialogModule, ConfirmDialogModule } from 'primeng/primeng';

import { AppComponent } from './components/App';
import { HomeComponent } from './components/Home';


@NgModule({
    imports: [
        BrowserModule, HttpModule, JsonpModule, BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule, SharedModule, ButtonModule, DialogModule, ConfirmDialogModule,
        SlimLoadingBarModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ], { useHash: true })
    ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    exports: [CommonModule]
})
export class AppModule { }
