import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/models/module';
import { AdminModulesService } from '../admin-modules.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class AdminModuleComponent implements OnInit {
  id: number = 1;
  module: Module | null = null;

  constructor(
    private route: ActivatedRoute,
    private adminModulesService: AdminModulesService
  ) {
    route.paramMap.subscribe((map) => (this.id = +(map.get('id') ?? 1)));
  }

  ngOnInit(): void {
    this.adminModulesService
      .getModuleById(this.id)
      .subscribe((module) => (this.module = module));
  }
}
