import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonList, IonContent, IonLabel, IonButton, IonItem, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonSelect, IonSelectOption} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentService, Cpu, Motherboard, Ram } from '../services/component';
@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonList, IonContent, IonLabel, IonButton, FormsModule, CommonModule, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSelect, IonSelectOption],
  templateUrl: './builder.page.html'
})
export class BuilderPage implements OnInit {

  cpus: Cpu[] = [];
  motherboards: Motherboard[] = [];
  ram: Ram[] = [];
  errors: string[] = [];
  score: number = 0;

  selectedCpu?: Cpu;
  selectedMotherboard?: Motherboard;
  selectedRam?: Ram;

  constructor(private componentService: ComponentService) {}

  ngOnInit() {
    this.componentService.getCpus().subscribe(data => {
      this.cpus = data;
    });

    this.componentService.getMotherboards().subscribe(data => {
      this.motherboards = data;
    });

    this.componentService.getRam().subscribe(data => {
      this.ram = data;
    });
  }

  checkCompatibility() {
    this.errors = [];
    if (this.selectedCpu && this.selectedMotherboard) {
      if (this.selectedCpu.socket !== this.selectedMotherboard.socket) {
        this.errors.push('CPU and Motherboard sockets do not match.');
      }
    }
    if (this.selectedMotherboard && this.selectedRam) {
      if (this.selectedMotherboard.ramType !== this.selectedRam.type) {
        this.errors.push('Motherboard RAM type does not match selected RAM.');
      }
    }
  }

  onSelectionChange() {
    this.checkCompatibility();
    this.calculateScore();
  }

  calculateScore() {
    let totalChecks = 2;
    let passedChecks = totalChecks - this.errors.length;

    this.score = Math.max(0, (passedChecks / totalChecks) * 100);
  }
}