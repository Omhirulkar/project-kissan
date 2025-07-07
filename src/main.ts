import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ projectId: "kissan-75c1d", appId: "1:790751710232:web:c48aff0cd51331f978c76d", storageBucket: "kissan-75c1d.firebasestorage.app", apiKey: "AIzaSyAiJ9HMAi7n6vUTqL93kH97m3asJ4BfcxM", authDomain: "kissan-75c1d.firebaseapp.com", messagingSenderId: "790751710232", measurementId: "G-MP4QCYKRCJ" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideVertexAI(() => getVertexAI()),
    provideHttpClient(),
  ],
});
