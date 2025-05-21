import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="text-center">
      <h1>Welcome to ITI Projects</h1>
      <p>Select a project from the navbar to start.</p>
    </div>
  `
})
export class HomeComponent {}
