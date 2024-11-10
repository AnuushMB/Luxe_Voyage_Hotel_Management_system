import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {
  constructor(private router: Router) {}

  navigateToRooms(): void {
    this.router.navigate(['/rooms']);
  }
}
