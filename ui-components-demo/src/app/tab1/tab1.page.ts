import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AlertController, IonicModule, ToastController, AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,  ExploreContainerComponent],
})
export class Tab1Page {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private animationController: AnimationController
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Are you sure you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelled');
          }
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            console.log('Deleted');
          }
        },
        {
          text: 'Save',
          cssClass: 'primary',
          handler: () => {
            console.log('Saved');
          }
        }
      ]
    });
    await alert.present();
  }
  async showToast() {
    const toast = await this.toastController.create({
      message: 'Task completed successfully',
      duration: 3000,
      buttons: [
        {
          text: 'UNDO',
          role: 'cancel',
          handler: () => { console.log('Undo clicked'); }
        }
      ]
    });
    await toast.present();
  }

  async showCustomToast() {
    const toast = await this.toastController.create({
      message: 'This is a custom toast',
      duration: 2000,
      position: 'top', // Try: 'top', 'middle', or 'bottom'
      cssClass: 'custom-toast', // Add your own CSS class
      enterAnimation: (baseEl) => this.customEnterAnimation(baseEl),
      leaveAnimation: (baseEl) => this.customLeaveAnimation(baseEl)
    });
    await toast.present();
  }

  customEnterAnimation(baseEl: any): Animation {
    const backdropAnimation = this.animationController.create()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', 0.01, 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationController.create()
      .addElement(baseEl.querySelector('.toast-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'translateY(-100%)' },
        { offset: 1, opacity: '1', transform: 'translateY(0)' }
      ]);

    return this.animationController.create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  }

  customLeaveAnimation(baseEl: any): Animation {
    return this.customEnterAnimation(baseEl).direction('reverse');
  }
  
  // In your CSS:
  // .custom-toast { 
  //   --background: rgba(0,0,0,0.7);
  //   --box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
  // }
}
