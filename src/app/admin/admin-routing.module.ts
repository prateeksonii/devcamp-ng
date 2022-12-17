import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './home/admin-home.component';
import { AdminModulesComponent } from './dashboard/modules/admin-modules.component';
import { AdminModuleComponent } from './dashboard/modules/module/module.component';

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
      {
        path: 'modules/:id',
        component: AdminModuleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
