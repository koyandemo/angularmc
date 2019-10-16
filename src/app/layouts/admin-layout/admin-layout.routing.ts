import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {DinnerServiceListComponent} from '../../pages/dinner/dinner-service-list/dinner-service-list.component';
import {McServiceListComponent} from '../../pages/mc-service/mc-service-list/mc-service-list.component';
import {InvitationServiceListComponent} from '../../pages/invitation/invitation-service-list/invitation-service-list.component';
import {McServiceCreateComponent} from '../../pages/mc-service/mc-service-create/mc-service-create.component';
import {McServiceDetailComponent} from '../../pages/mc-service/mc-service-detail/mc-service-detail.component';
import {McServiceEditComponent} from '../../pages/mc-service/mc-service-edit/mc-service-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'dinner-service',           component: DinnerServiceListComponent },
    { path: 'mc-service',component: McServiceCreateComponent},
    {path:'mc-list',component:McServiceListComponent},
    {path:'mc-details/:name',component:McServiceDetailComponent},
    {path:'mc-edit/:name',component:McServiceEditComponent},
    { path: 'invitation-service',component: InvitationServiceListComponent },
];
