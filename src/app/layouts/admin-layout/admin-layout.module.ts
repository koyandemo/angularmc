import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DinnerServiceListComponent} from '../../pages/dinner/dinner-service-list/dinner-service-list.component';
import {DinnerServiceDetailComponent} from '../../pages/dinner/dinner-service-detail/dinner-service-detail.component';
import {DinnerServiceCreateComponent} from '../../pages/dinner/dinner-service-create/dinner-service-create.component';
import {DinnerServiceEditComponent} from '../../pages/dinner/dinner-service-edit/dinner-service-edit.component';
import {InvitationServiceListComponent} from '../../pages/invitation/invitation-service-list/invitation-service-list.component';
import {InvitationServiceEditComponent} from '../../pages/invitation/invitation-service-edit/invitation-service-edit.component';
import {InvitationServiceCreateComponent} from '../../pages/invitation/invitation-service-create/invitation-service-create.component';
import {InvitationServiceDetailComponent} from '../../pages/invitation/invitation-service-detail/invitation-service-detail.component';
import {McServiceListComponent} from '../../pages/mc-service/mc-service-list/mc-service-list.component';
import {McServiceEditComponent} from '../../pages/mc-service/mc-service-edit/mc-service-edit.component';
import {McServiceDetailComponent} from '../../pages/mc-service/mc-service-detail/mc-service-detail.component';
import {McServiceCreateComponent} from '../../pages/mc-service/mc-service-create/mc-service-create.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    DinnerServiceListComponent,
    DinnerServiceDetailComponent,
    DinnerServiceCreateComponent,
    DinnerServiceEditComponent,
    InvitationServiceListComponent,
    InvitationServiceEditComponent,
    InvitationServiceCreateComponent,
    InvitationServiceDetailComponent,
    McServiceListComponent,
    McServiceEditComponent,
    McServiceDetailComponent,
    McServiceCreateComponent,
  ]
})

export class AdminLayoutModule {}
