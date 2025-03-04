// import { appConfig } from './app/app.config';
// import { enableProdMode, importProvidersFrom } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// // import { environment } from './environments/environment';
// import { AppComponent } from './app/app.component';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

// bootstrapApplication(AppComponent, {
//   providers: [
//       importProvidersFrom(BrowserModule, MatToolbarModule, MatSlideToggleModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule),
//       provideAnimations()
//   ]
// })

// //  bootstrapApplication(AppComponent)
// //   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

// Angular Material Modules
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule, 
      MatToolbarModule, 
      MatSlideToggleModule, 
      ReactiveFormsModule, 
      MatButtonModule, 
      MatCardModule, 
      MatIconModule, 
      MatDialogModule, 
      MatFormFieldModule, 
      MatInputModule, 
      MatCheckboxModule, 
      MatExpansionModule
    ),
    provideAnimations()
  ]
}).catch((err) => console.error(err));
