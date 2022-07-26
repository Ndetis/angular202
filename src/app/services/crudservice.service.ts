import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import 'firebase/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import IUser, { ICertification, ICompetence, IExperience, IFormation, ILangage, ILien, ILoisir } from 'src/app/models/model';


@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {


  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }



  getCompetences(): Observable<DocumentData[]> {
    let currentUser = firebase.default.auth().currentUser;
      let  comp = this.firestore.collection("users").doc(currentUser?.uid).collection('competences').valueChanges({idField: 'id'});
    return comp;
  }

  getCompetencesById(id: string | undefined){
    let currentUser = firebase.default.auth().currentUser;
    let comp = this.firestore.collection("users").doc(currentUser?.uid).collection("competences").doc(id).valueChanges();
    console.log(comp);
    comp.subscribe((data)=>console.log(data));
    return comp;
  }

  createCompetences(comp: ICompetence){
    return new Promise<any>((resolve, reject) => {
      var currentUser = firebase.default.auth().currentUser;
      console.log(currentUser);
      //comp.id = this.firestore.createId();
      this.firestore.collection('users').doc(currentUser?.uid).collection('competences').add(comp)
      //this.firestore.collection('etudiant').add({nom: "David", prenom: "Prenoms"})
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  updateCompetence(ancien:ICompetence ,comp: ICompetence){
    let currentUser = firebase.default.auth().currentUser;
    this.firestore.collection('users').doc(currentUser?.uid).collection('competences').doc(ancien.id).update(comp);
  }

  deleteCompetence(comp: ICompetence){
    let currentUser = firebase.default.auth().currentUser;
    this.firestore.collection('users').doc(currentUser?.uid).collection('competences').doc(comp.id).delete();
  }

  //Formations............................................................................

  getFormations(): Observable<DocumentData[]> {
    let currentUser = firebase.default.auth().currentUser;
      let  comp = this.firestore.collection("users").doc(currentUser?.uid).collection('formations').valueChanges({idField: 'id'});
    return comp;
  }

  getFormationsById(id: string | undefined){
    let currentUser = firebase.default.auth().currentUser;
    let comp = this.firestore.collection("users").doc(currentUser?.uid).collection("formations").doc(id).valueChanges();
    console.log(comp);
    comp.subscribe((data)=>console.log(data));
    return comp;
  }

  createFormation(comp: IFormation){
    return new Promise<any>((resolve, reject) => {
      var currentUser = firebase.default.auth().currentUser;
      console.log(currentUser);
      this.firestore.collection('users').doc(currentUser?.uid).collection('formations').add(comp)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  updateFormation(ancien:IFormation ,comp: IFormation){
    let currentUser = firebase.default.auth().currentUser;
    this.firestore.collection('users').doc(currentUser?.uid).collection('formations').doc(ancien.id).update(comp);
  }

  deleteFormation(comp: IFormation){
    let currentUser = firebase.default.auth().currentUser;
    this.firestore.collection('users').doc(currentUser?.uid).collection('formations').doc(comp.id).delete();
  }

//Certifications............................................................................

getCertifications(): Observable<DocumentData[]> {
  let currentUser = firebase.default.auth().currentUser;
    let  comp = this.firestore.collection("users").doc(currentUser?.uid).collection('certifications').valueChanges({idField: 'id'});
  return comp;
}

getCertificationById(id: string | undefined){
  let currentUser = firebase.default.auth().currentUser;
  let comp = this.firestore.collection("users").doc(currentUser?.uid).collection("certifications").doc(id).valueChanges();
  console.log(comp);
  comp.subscribe((data)=>console.log(data));
  return comp;
}

createCertification(comp: ICertification){
  return new Promise<any>((resolve, reject) => {
    var currentUser = firebase.default.auth().currentUser;
    console.log(currentUser);
    this.firestore.collection('users').doc(currentUser?.uid).collection('certifications').add(comp)
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

updateCertification(ancien:ICertification ,comp: ICertification){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('certifications').doc(ancien.id).update(comp);
}

deleteCertification(comp: ICertification){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('certifications').doc(comp.id).delete();
}


//Experiences............................................................................

getExperiences(): Observable<DocumentData[]> {
  let currentUser = firebase.default.auth().currentUser;
    let  comp = this.firestore.collection("users").doc(currentUser?.uid).collection('experiences').valueChanges({idField: 'id'});
  return comp;
}

getExperienceById(id: string | undefined){
  let currentUser = firebase.default.auth().currentUser;
  let comp = this.firestore.collection("users").doc(currentUser?.uid).collection("experiences").doc(id).valueChanges();
  console.log(comp);
  comp.subscribe((data)=>console.log(data));
  return comp;
}

createExperience(comp: IExperience){
  return new Promise<any>((resolve, reject) => {
    var currentUser = firebase.default.auth().currentUser;
    console.log(currentUser);
    this.firestore.collection('users').doc(currentUser?.uid).collection('experiences').add(comp)
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

updateExperience(ancien:IExperience ,comp: IExperience){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('experiences').doc(ancien.id).update(comp);
}

deleteExperience(comp: IExperience){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('experiences').doc(comp.id).delete();
}


//Loisirs............................................................................

getLoisirs(): Observable<DocumentData[]> {
  let currentUser = firebase.default.auth().currentUser;
    let  comp = this.firestore.collection("users").doc(currentUser?.uid).collection('loisirs').valueChanges({idField: 'id'});
  return comp;
}

getLoisirById(id: string | undefined){
  let currentUser = firebase.default.auth().currentUser;
  let comp = this.firestore.collection("users").doc(currentUser?.uid).collection("loisirs").doc(id).valueChanges();
  console.log(comp);
  comp.subscribe((data)=>console.log(data));
  return comp;
}

createLoisir(comp: ILoisir){
  return new Promise<any>((resolve, reject) => {
    var currentUser = firebase.default.auth().currentUser;
    console.log(currentUser);
    this.firestore.collection('users').doc(currentUser?.uid).collection('loisirs').add(comp)
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

updateLoisir(ancien:ILoisir ,comp: ILoisir){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('loisirs').doc(ancien.id).update(comp);
}

deleteLoisir(comp: ILoisir){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('loisirs').doc(comp.id).delete();
}

//Langues............................................................................

getLangues(): Observable<DocumentData[]> {
  let currentUser = firebase.default.auth().currentUser;
    let  comp = this.firestore.collection("users").doc(currentUser?.uid).collection('langues').valueChanges({idField: 'id'});
  return comp;
}

getLangueById(id: string | undefined){
  let currentUser = firebase.default.auth().currentUser;
  let comp = this.firestore.collection("users").doc(currentUser?.uid).collection("langues").doc(id).valueChanges();
  console.log(comp);
  comp.subscribe((data)=>console.log(data));
  return comp;
}

createLangue(comp: ILangage){
  return new Promise<any>((resolve, reject) => {
    var currentUser = firebase.default.auth().currentUser;
    console.log(currentUser);
    this.firestore.collection('users').doc(currentUser?.uid).collection('langues').add(comp)
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

updateLangue(ancien:ILangage ,comp: ILangage){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('langues').doc(ancien.id).update(comp);
}

deleteLangue(comp: ILangage){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('langues').doc(comp.id).delete();
}

//Liens............................................................................

getLiens(): Observable<DocumentData[]> {
  let currentUser = firebase.default.auth().currentUser;
    let  comp = this.firestore.collection("users").doc(currentUser?.uid).collection('liens').valueChanges({idField: 'id'});
  return comp;
}

getLiensById(id: string | undefined){
  let currentUser = firebase.default.auth().currentUser;
  let comp = this.firestore.collection("users").doc(currentUser?.uid).collection("liens").doc(id).valueChanges();
  console.log(comp);
  comp.subscribe((data)=>console.log(data));
  return comp;
}

createLien(comp: ILien){
  return new Promise<any>((resolve, reject) => {
    var currentUser = firebase.default.auth().currentUser;
    console.log(currentUser);
    this.firestore.collection('users').doc(currentUser?.uid).collection('liens').add(comp)
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

updateLien(ancien:ILien ,comp: ILien){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('liens').doc(ancien.id).update(comp);
}

deleteLien(comp: ILien){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('liens').doc(comp.id).delete();
}

//Informations............................................................................

getInformations(): Observable<DocumentData[]> {
  let currentUser = firebase.default.auth().currentUser;
    let  comp = this.firestore.collection("users").doc(currentUser?.uid).collection('informations').valueChanges({idField: 'id'});
  return comp;
}

getInformationById(id: string | undefined){
  let currentUser = firebase.default.auth().currentUser;
  let comp = this.firestore.collection("users").doc(currentUser?.uid).collection("informations").doc(id).valueChanges();
  console.log(comp);
  comp.subscribe((data)=>console.log(data));
  return comp;
}

createInformation(comp: IUser){
  return new Promise<any>((resolve, reject) => {
    var currentUser = firebase.default.auth().currentUser;
    console.log(currentUser);
    this.firestore.collection('users').doc(currentUser?.uid).collection('informations').add(comp)
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

updateInformation(ancien:IUser ,comp: IUser){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('informations').doc(ancien.id).update(comp);
}

deleteInformation(comp: IUser){
  let currentUser = firebase.default.auth().currentUser;
  this.firestore.collection('users').doc(currentUser?.uid).collection('informations').doc(comp.id).delete();
}



}
