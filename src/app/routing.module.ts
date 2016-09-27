import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./sites/dashboard/dashboard.component";
import {StatusComponent} from "./components/navbar/status/status.component";
import {HistoryComponent} from "./components/navbar/history/history.component";
import {DocumentationComponent} from "./components/navbar/documentation/documentation.component";
import {PageNotFoundComponent} from './sites/pagenotfound/pageNotFound.component';

export const appRoutes: Routes = [{

  path: 'dashboard',
  component: DashboardComponent
},
  //children: [
    {
      path: 'dashboard/status',
      component: StatusComponent

    },
    {
      path: 'dashboard/history',
      component: HistoryComponent
    },
    {
      path: 'dashboard/documentation',
      component: DocumentationComponent
    },
    //]},

  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
export const routing = RouterModule.forRoot(appRoutes);
