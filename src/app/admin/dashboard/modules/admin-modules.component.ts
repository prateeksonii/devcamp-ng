import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { AdminModulesService } from './admin-modules.service';

@Component({
  selector: 'app-admin-modules',
  templateUrl: './admin-modules.component.html',
  styleUrls: ['./admin-modules.component.scss'],
})
export class AdminModulesComponent implements OnInit {
  showModal = false;
  modules: Module[] = [];

  constructor(private adminModulesService: AdminModulesService) {}

  closeModal(): void {
    this.showModal = false;
  }

  openModal(): void {
    this.showModal = true;
  }

  ngOnInit(): void {
    this.adminModulesService
      .getModules()
      .subscribe((modules) => (this.modules = modules));
  }
}
