import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KnowUsComponent } from './pages/know-us/know-us.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quienes-somos', component: AboutComponent },
    { path: 'proyectos', component: ProjectsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'conocenos', component: KnowUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
