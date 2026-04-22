import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-saved-builds',
  templateUrl: './saved-builds.page.html',
  styleUrls: ['./saved-builds.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SavedBuildsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
