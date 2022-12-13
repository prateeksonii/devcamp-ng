import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminModulesComponent } from './admin-modules/admin-modules.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'modules',
        component: AdminModulesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
