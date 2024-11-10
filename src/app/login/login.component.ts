import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(): void {
    // Add form submission logic here
    console.log('Form submitted with:', { username: this.username, password: this.password });
  }

  change(): void {
    // Add any logic that you want to execute when the Submit button is clicked
    console.log('Submit button clicked');
  }
}


