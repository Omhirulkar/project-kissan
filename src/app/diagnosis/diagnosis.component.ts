import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonButton, IonCardSubtitle, IonTitle, IonToolbar, IonHeader, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonCardSubtitle, IonButton,IonCard,IonCardHeader,IonCardContent,IonCardTitle, FormsModule, CommonModule]
})
export class DiagnosisComponent  {

 selectedImage: string | ArrayBuffer | null = null;
  diagnosisResult: any = null;

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  diagnoseImage() {
    // Mock diagnosis result
    this.diagnosisResult = {
      name: 'Yellow Leaf Spot',
      solution: 'Spray neem oil every 3 days. Avoid overwatering. 🌿'
    };
  }
}
