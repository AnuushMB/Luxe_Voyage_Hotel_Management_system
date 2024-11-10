import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    RoomsComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel_booking';
 bookingForm: any;
}
