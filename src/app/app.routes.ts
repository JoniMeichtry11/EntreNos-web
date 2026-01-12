import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DataDeletionComponent } from './data-deletion/data-deletion.component';
import { ChildSafetyComponent } from './child-safety/child-safety.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'EntreNos - Cuentas Claras' },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy - EntreNos' },
    { path: 'data-deletion', component: DataDeletionComponent, title: 'Data Deletion - EntreNos' },
    { path: 'child-safety', component: ChildSafetyComponent, title: 'Child Safety Standards – EntreNos' },
    { path: '**', redirectTo: '' }
];
