import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { LeaveComponent } from './leave/leave.component';
import { RegisterComponent } from './register/register.component';
import { WeaponComponent } from './weapon/weapon.component';
import { IssueweaponComponent } from './issueweapon/issueweapon.component';


export const appRoutes: Routes = [
    { path: '', component: RegisterComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'leave', component: LeaveComponent, canActivate: [AuthGuard] },
            { path: 'weapon', component: WeaponComponent, canActivate: [AuthGuard] },
            { path: 'issueweapon', component: IssueweaponComponent, canActivate: [AuthGuard] },
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
            // tu można wstawić wszystkie
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
