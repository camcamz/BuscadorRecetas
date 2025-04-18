import { Routes } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'buscador', component: BuscadorComponent
    }
];
