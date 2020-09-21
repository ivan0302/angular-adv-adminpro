/* import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    { path:'dashboard', component: DashboardComponent  }, 
    { path:'login', component: LoginComponent  }, 
    { path:'register', component: LoginComponent  }, 
    { path:'progress', component: ProgressComponent  },     
    { path:'', redirectTo: '/dashboard', pathMatch:'full' }, 
    { path:'**', component: NopagefoundComponent}, 

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true } ); */