import { Routes, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KnowUsComponent } from './pages/know-us/know-us.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        pathMatch: 'full' 
    },
    { 
        path: 'quienes-somos',
        component: AboutComponent,
        pathMatch: 'full' 
    },
    { 
        path: 'proyectos', 
        component: ProjectsComponent,
        pathMatch: 'full' 
    },
    { 
        path: 'contacto',
        component: ContactComponent,
        pathMatch: 'full' 
    },
    { 
        path: 'conocenos',
        component: KnowUsComponent,
        pathMatch: 'full'
    }
];
