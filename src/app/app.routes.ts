import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
        path:'rooms',
        component: RoomsComponent,
        title:'Hotels'
    },
    {
        path:'login',
        component: LoginComponent,
        title:'Login'
    },
    {
        path:'about',
        component: AboutComponent,
        title:'About'
    },
    {
        path:'services',
        component: ServicesComponent,
        title:'Services'
    },
  ];
  
export default routeConfig;