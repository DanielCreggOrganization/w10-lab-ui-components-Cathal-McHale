[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17357441)
# Ionic UI Components Lab: Essential Components

## Agenda
1. [Project Setup](#1-project-setup)
2. [Ion-Tabs: App Navigation](#2-ion-tabs-app-navigation)
3. [Ion-Card: Basic Content Display](#3-ion-card-basic-content-display)
4. [Ion-List: Interactive Lists](#4-ion-list-interactive-lists)
5. [Ion-Modal: Popup Dialogs](#5-ion-modal-popup-dialogs)
6. [Ion-Alert & Ion-Toast: User Notifications](#6-ion-alert--ion-toast-user-notifications)
7. [Final Challenge: Choose Your Component](#7-final-challenge-choose-your-component)

## Overview
In this lab, you'll learn about essential Ionic UI components by implementing them one at a time. Each section includes a demonstration followed by a hands-on DIY task to enhance your understanding.

## 1. Project Setup
Create a new project with tabs:
```bash
ionic start ui-components-demo tabs --type=angular
cd ui-components-demo
```

## 2. Ion-Tabs: App Navigation

### Introduction
Ion-Tabs provide a consistent way to organize and navigate between different sections of your app.

### Implementation
Update `src/app/tabs/tabs.page.ts`:
```typescript
import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, person, notifications } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge], // Added IonBadge to imports
})
export class TabsPage {
  notificationCount = 3; // This will be displayed in the badge
  
  constructor() {
    addIcons({ home, person, notifications });
  }
}
```

Update `src/app/tabs/tabs.page.html`:
```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1" href="/tabs/tab1">
      <ion-icon name="home"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2" href="/tabs/tab2">
      <ion-icon name="person"></ion-icon>
      <ion-label>Profile</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3" href="/tabs/tab3">
      <ion-icon name="notifications"></ion-icon>
      <ion-label>Notifications</ion-label>
      <ion-badge color="danger">{{notificationCount}}</ion-badge> <!-- Added color="danger" to make it red -->
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

Add some style in `tabs.page.scss`:
```scss
ion-tab-button {
  --color-selected: #ff4081;
  
  &.tab-selected {
    ion-icon {
      transform: scale(1.1);
    }
  }
}
```

### DIY Task
1. Add a fourth tab for "Settings" with an appropriate icon

2. Add a custom animation when tabs are selected
   <details>
   <summary>💡 Hint</summary>
   
   Use CSS transform and transition properties in the .tab-selected class. Try something like:
   ```scss
   ion-tab-button {
     &.tab-selected {
       ion-icon {
         transition: all 0.3s ease;
         transform: rotate(360deg) scale(1.1);
       }
     }
   }
   ```
   </details>

3. Change the color scheme to use different colors for selected and unselected states
   <details>
   <summary>💡 Hint</summary>
   
   Use Ionic CSS variables in your scss file to customize the colors:
   ```scss
   ion-tab-button {
     --color: #666666;              // Unselected state
     --color-selected: #ff4081;     // Selected state
     
     &.tab-selected {
       ion-icon {
         color: var(--color-selected);
       }
     }
   }
   ```
   </details>

## 3. Ion-Card: Basic Content Display

### Introduction
Ion-Card is used to display content in a card format with various elements like headers, content, and actions.

### Implementation
Create a simple card in `tab1.page.html`:
```html
<ion-content>
  <ion-card>
    <img alt="card-image" src="https://picsum.photos/300/200"/>
    <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Here's some content for the card. This is a basic example of an Ion-Card.
    </ion-card-content>

    <ion-button fill="clear">Action</ion-button>
  </ion-card>
</ion-content>
```

### DIY Task
1. Add multiple action buttons to the card
2. Implement a card with a different layout (e.g., horizontal instead of vertical)
3. Add hover effects to make the card interactive

## 4. Ion-List: Interactive Lists

### Introduction
Ion-Lists are perfect for displaying rows of information with various interactive features.

### Implementation
Add this to `tab2.page.html`:
```html
<ion-content>
  <ion-list>
    <ion-item>
      <ion-label>
        <h2>Item Title</h2>
        <p>Item Description</p>
      </ion-label>
      <ion-badge slot="end">New</ion-badge>
    </ion-item>

    <ion-item-sliding>
      <ion-item>
        <ion-label>Slidable Item</ion-label>
      </ion-item>
      
      <ion-item-options side="end">
        <ion-item-option color="primary">
          <ion-icon slot="icon-only" name="heart"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger">
          <ion-icon slot="icon-only" name="trash"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</ion-content>
```

### DIY Task
1. Add different types of items (with avatars, thumbnails, icons)

2. Implement sliding options on both sides of items
   <details>
   <summary>💡 Hint</summary>
   
   Use ion-item-options with different sides and colors:
   ```html
   <ion-item-sliding>
     <ion-item-options side="start">
       <ion-item-option color="success">
         <ion-icon slot="icon-only" name="star"></ion-icon>
       </ion-item-option>
     </ion-item-options>

     <ion-item>
       <ion-label>Slide me both ways!</ion-label>
     </ion-item>

     <ion-item-options side="end">
       <ion-item-option color="danger">
         <ion-icon slot="icon-only" name="trash"></ion-icon>
       </ion-item-option>
       <ion-item-option color="primary">
         <ion-icon slot="icon-only" name="share"></ion-icon>
       </ion-item-option>
     </ion-item-options>
   </ion-item-sliding>
   ```
   </details>

3. Add different interaction states (selected, disabled)

## 5. Ion-Modal: Popup Dialogs

### Introduction
Ion-Modal provides a way to show detailed content or forms in a popup overlay.

### Implementation
In `tab3.page.html`:
```html
<ion-content>
  <ion-button id="open-modal" expand="block">
    Open Modal
  </ion-button>

  <ion-modal trigger="open-modal">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal Title</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="modal.dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h2>Modal Content</h2>
        <p>This is a basic modal example.</p>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```

### DIY Task
1. Create a modal with a form inside
   <details>
   <summary>💡 Hint</summary>
   
   Add form controls inside your modal template:
   ```html
   <ion-modal trigger="open-modal">
     <ng-template>
       <ion-header>
         <ion-toolbar>
           <ion-title>Contact Form</ion-title>
           <ion-buttons slot="end">
             <ion-button onclick="modal.dismiss()">Close</ion-button>
           </ion-buttons>
         </ion-toolbar>
       </ion-header>
       
       <ion-content class="ion-padding">
         <form>
           <ion-item>
             <ion-label position="floating">Name</ion-label>
             <ion-input type="text" placeholder="Enter your name"></ion-input>
           </ion-item>

           <ion-item>
             <ion-label position="floating">Email</ion-label>
             <ion-input type="email" placeholder="Enter your email"></ion-input>
           </ion-item>

           <ion-button expand="block" class="ion-margin-top">Submit</ion-button>
         </form>
       </ion-content>
     </ng-template>
   </ion-modal>
   ```
   </details>

2. Add animations to the modal enter/exit
3. Implement a half-sheet modal style

## 6. Ion-Alert & Ion-Toast: User Notifications

### Introduction
Alerts and toasts are essential for providing feedback to users.

### Implementation
Add to any page component:
```typescript
import { AlertController, ToastController } from '@ionic/angular/standalone';

export class YourPage {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'This is a toast message',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}
```

### DIY Task
1. Create an alert with multiple buttons and different actions
   <details>
   <summary>💡 Hint</summary>
   
   Use the buttons array to define multiple actions:
   ```typescript
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
   ```
   </details>

2. Implement a toast with a custom close button
   <details>
   <summary>💡 Hint</summary>
   
   Add buttons to your toast and handle the dismiss event:
   ```typescript
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
   ```
   </details>

3. Add different positions and animations for the toast
   <details>
   <summary>💡 Hint</summary>
   
   Experiment with different positions and animations:
   ```typescript
   async showCustomToast() {
     const toast = await this.toastController.create({
       message: 'This is a custom toast',
       duration: 2000,
       position: 'top', // Try: 'top', 'middle', or 'bottom'
       cssClass: 'custom-toast', // Add your own CSS class
       enterAnimation: customEnterAnimation, // Optional custom animation
       leaveAnimation: customLeaveAnimation
     });
     await toast.present();
   }

   // In your CSS:
   // .custom-toast { 
   //   --background: rgba(0,0,0,0.7);
   //   --box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
   // }
   ```
   </details>

## 7. Final Challenge: Choose Your Component

Now that you've learned about several essential Ionic components, it's time for a challenge!

1. Visit the [Ionic UI Components Documentation](https://ionicframework.com/docs/components)
2. Browse through the available components and choose one that we haven't covered in this lab
3. Implement that component in your app, making sure to:
   - Use proper imports
   - Add appropriate styling
   - Include at least one interactive feature
   - Add your own creative twist to make it unique
4. Bonus: Try combining your chosen component with one of the components we covered in the lab

### Some Component Suggestions:
- Ion-Chip: For creating compact elements that can contain text and icons
- Ion-Datetime: For handling date and time selection
- Ion-Segment: For creating a segmented control
- Ion-Range: For selecting from a range of values

## Additional Resources
- [Ionic UI Components Documentation](https://ionicframework.com/docs/components)
- [Ionic Forum](https://forum.ionicframework.com/)
- [Angular Documentation](https://angular.io/docs)

---
End of Lab
