import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracks-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card shadow-lg">
      <div class="card-header bg-primary text-white">
        <h2 class="text-center">ITI Tracks</h2>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <div class="sticky-top" style="top: 20px;">
              <select class="form-select mb-3" [(ngModel)]="department" (change)="filterTracks()">
                <option value="All">All Departments</option>
                <option value="SD">Software Development</option>
                <option value="Java">Java</option>
                <option value="Design">Design</option>
                <option value="OS">Operating Systems</option>
              </select>

              <div class="alert alert-info">
                <h6>Total Tracks: {{ filteredList.length }}</h6>
              </div>
            </div>
          </div>

          <div class="col-md-9">
            <div *ngFor="let track of filteredList" class="card mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h4 class="card-title text-primary">{{ track.name }}</h4>
                  <span class="badge bg-secondary">{{ track.department }}</span>
                </div>
                <p class="card-text">
                  This track focuses on {{ track.name }} technologies and best practices in the {{ track.department }} field.
                </p>
                <button class="btn btn-outline-primary btn-sm">View Details</button>
              </div>
            </div>

            <div *ngIf="filteredList.length === 0" class="alert alert-warning">
              No tracks found for this department.
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./tracks-list.component.css']
})
export class TracksListComponent {
  department: string = 'All';
  itiTracks = [
    { id: 1, name: 'PD', department: 'SD' },
    { id: 2, name: 'UI/UX', department: 'Design' },
    { id: 3, name: '2D Graphics', department: 'Design' },
    { id: 4, name: 'Mobile Native', department: 'Java' },
    { id: 5, name: 'IOS', department: 'Java' },
    { id: 6, name: 'OS', department: 'OS' }
  ];
  filteredList = this.itiTracks;

  filterTracks() {
    this.filteredList = this.department === 'All'
      ? this.itiTracks
      : this.itiTracks.filter(t => t.department === this.department);
  }
}
