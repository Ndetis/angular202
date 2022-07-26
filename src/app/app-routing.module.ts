import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import {canActivate,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompetencesComponent } from './components/Competences/competences/competences.component';
import { EditCompetenceComponent } from './components/Competences/edit-competence/edit-competence.component';
import { CertificationsComponent } from './components/Certifications/certifications/certifications.component';
import { ExperiencesComponent } from './components/Experiences/experiences/experiences.component';
import { FormationsComponent } from './components/Formations/formations/formations.component';
import { LiensComponent } from './components/Liens/liens/liens.component';
import { LoisirsComponent } from './components/Loisirs/loisirs/loisirs.component';
import { LanguesComponent } from './components/Langues/langues/langues.component';
import { GetPdfComponent } from './components/get-pdf/get-pdf.component';
import { EditFormationComponent } from './components/Formations/edit-formation/edit-formation.component';
import { ProfileComponent } from './components/profile/profile.component';


const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  {path:"",pathMatch:'full', component:HomeComponent},
  {path:"login",component:LoginComponent,...canActivate(redirectToHome)},
  {path:"register",component:RegisterComponent,...canActivate(redirectToHome)},
  {
    path:"dashboard",
    component:DashboardComponent,
    ...canActivate(redirectToLogin),
    children: [
      {path:"competences",component:CompetencesComponent},
      {path:"formations",component:FormationsComponent},
      {path:"experiences",component:ExperiencesComponent},
      {path:"certifications",component:CertificationsComponent},
      {path:"loisirs",component:LoisirsComponent},
      {path:"langages",component:LanguesComponent},
      {path:"liens",component:LiensComponent},
      {path:"getPdf",component:GetPdfComponent},



    ]
  },
  {path:"editCompetence/:id",component:EditCompetenceComponent},
  {path:"editFormation/:id",component:EditFormationComponent},
  {path:"profile",component:ProfileComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
