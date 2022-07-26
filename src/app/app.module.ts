import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompetencesComponent } from './components/Competences/competences/competences.component';
import { CompetencesListComponent } from './components/Competences/competences-list/competences-list.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { EditCompetenceComponent } from './components/Competences/edit-competence/edit-competence.component';
import { ExperiencesComponent } from './components/Experiences/experiences/experiences.component';
import { ExperiencesListComponent } from './components/Experiences/experiences-list/experiences-list.component';
import { EditExperienceComponent } from './components/Experiences/edit-experience/edit-experience.component';
import { FormationsComponent } from './components/Formations/formations/formations.component';
import { FormationsListComponent } from './components/Formations/formations-list/formations-list.component';
import { EditFormationComponent } from './components/Formations/edit-formation/edit-formation.component';
import { CertificationsComponent } from './components/Certifications/certifications/certifications.component';
import { CertificationsListComponent } from './components/Certifications/certifications-list/certifications-list.component';
import { EditCertificationComponent } from './components/Certifications/edit-certification/edit-certification.component';
import { LanguesComponent } from './components/Langues/langues/langues.component';
import { LanguesListComponent } from './components/Langues/langues-list/langues-list.component';
import { EditLangueComponent } from './components/Langues/edit-langue/edit-langue.component';
import { LoisirsComponent } from './components/Loisirs/loisirs/loisirs.component';
import { LoisirsListComponent } from './components/Loisirs/loisirs-list/loisirs-list.component';
import { EditLoisirComponent } from './components/Loisirs/edit-loisir/edit-loisir.component';
import { LiensComponent } from './components/Liens/liens/liens.component';
import { LiensListComponent } from './components/Liens/liens-list/liens-list.component';
import { EditLienComponent } from './components/Liens/edit-lien/edit-lien.component';
import { GetPdfComponent } from './components/get-pdf/get-pdf.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CompetencesComponent,
    CompetencesListComponent,
    EditCompetenceComponent,
    ExperiencesComponent,
    ExperiencesListComponent,
    EditExperienceComponent,
    FormationsComponent,
    FormationsListComponent,
    EditFormationComponent,
    CertificationsComponent,
    CertificationsListComponent,
    EditCertificationComponent,
    LanguesComponent,
    LanguesListComponent,
    EditLangueComponent,
    LoisirsComponent,
    LoisirsListComponent,
    EditLoisirComponent,
    LiensComponent,
    LiensListComponent,
    EditLienComponent,
    GetPdfComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
