import { Routes } from '@angular/router';
import { Ex01Component } from './exercices/ex01/ex01.component';
import { Ex02Component } from './exercices/ex02/ex02.component';
import { Ex03Component } from './exercices/ex03/ex03.component';
import { Ex04Component } from './exercices/ex04/ex04.component';
import { Ex05Component } from './exercices/ex05/ex05.component';
import { Ex06Component } from './exercices/ex06/ex06.component';
import { Ex07Component } from './exercices/ex07/ex07.component';
import { Ex08Component } from './exercices/ex08/ex08.component';
// import { Ex09Component } from './exercices/ex09/ex09.component';
import { Ex10Component } from './exercices/ex10/ex10.component';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

export const routes: Routes = [
    { path: '', component: PresentacionComponent},
    { path: 'exercises/ex01', component: Ex01Component },
    { path: 'exercises/ex02', component: Ex02Component },
    { path: 'exercises/ex03', component: Ex03Component },
    { path: 'exercises/ex04', component: Ex04Component },
    { path: 'exercises/ex05', component: Ex05Component },
    { path: 'exercises/ex06', component: Ex06Component },
    { path: 'exercises/ex07', component: Ex07Component },
    { path: 'exercises/ex08', component: Ex08Component },
    // { path: 'exercises/ex09', component: Ex09Component },
    { path: 'exercises/ex010', component: Ex10Component }
];
