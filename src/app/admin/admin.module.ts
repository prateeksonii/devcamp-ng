import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminModulesComponent } from './admin-modules/admin-modules.component';

@NgModule({
  declarations: [AdminHomeComponent, AdminDashboardComponent, AdminSidebarComponent, AdminModulesComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
