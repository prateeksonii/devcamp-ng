import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './home/admin-home.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './sidebar/admin-sidebar.component';
import { AdminModulesComponent } from './dashboard/modules/admin-modules.component';
import { AddComponent } from './dashboard/modules/add/add.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminModulesComponent,
    AddComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
