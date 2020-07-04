import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../header/auth.guard';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
    { path: '', component: AdminPanelComponent, canActivate: [AuthGuard] },
];

@NgModule({
    declarations: [
        AdminPanelComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AdminPanelModule { }
