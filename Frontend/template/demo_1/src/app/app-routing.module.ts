import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  { path: 'presentarhome', loadChildren: ()=> import('./Presentar Home/presentar-home.module').then(m => m.PresentarHomeModule)},
  { path: 'consultaragenda', loadChildren: ()=> import('./Consultar Agenda/consultar-agenda.module').then(m => m.ConsultarAgendaModule)},
  { path: 'gestionar-historia', loadChildren: ()=> import('./Gestionar-Historica-Clinica/gestionar-historia.module').then(m => m.gestionarhistoriaModule)},
  { path: 'gestionar-paciente', loadChildren: ()=> import('./Gestionar-Paciente/gestionar-paciente.module').then(m => m.gestionarpacienteModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
