import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { definePreset, updatePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import 'zone.js';

export const appConfig: ApplicationConfig = {
  providers: [
      // Other providers...
      provideAnimationsAsync(),
  ],
};


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
     <main>
      <h1>Playground</h1>
      <p-select [options]="colors" [ngModel]="primary" (ngModelChange)="primaryChanged($event)" placeholder="Primary Color" class="w-full md:w-56" />
        <hr>
        <input pInputText type="text" [(ngModel)]="msg" />
        <p class="h-layout"><i style="color: green" class="pi pi-info-circle"></i> Message is: <b>{{ msg }}</b></p>
        <hr>

        <h3>Standard Usage of button</h3>
        <p class="h-layout">
          <p-button label="Label" icon="pi pi-check" />
          <p-button icon="pi pi-check" />
        </p>

        <h3>Wrong Usage of button content</h3>
        <p class="h-layout">
          <p-button [loading]="true">Content</p-button>
          <p-button icon="pi pi-check" iconPos="right">Content & Icon</p-button>
        </p>

        <h3>Right Usage of button content for custom buttons</h3>
        <p class="h-layout">
          <p-button [loading]="true">
            <i class="pi pi-check"></i>
            Custom
          </p-button>

          <p-button>
            <i class="pi pi-check"></i>
            Custom
          </p-button>

          <p-button>
            Custom
            <i class="pi pi-check"></i>
          </p-button>

          <p-button>
            Custom
          </p-button>

          <p-button>
            <i class="pi pi-check"></i>
          </p-button>
        </p>
    </main>
  `,
  imports: [InputTextModule, FormsModule, ButtonModule, SelectModule]
})
export class PlaygroundComponent {

  colors: string[] = ["emerald", "green", "lime", "red", "orange", "amber", "yellow", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone"]
  primary: string = "sky"
  
  constructor(private config: PrimeNGConfig) {
    const MyPreset = definePreset(Aura, this.getConfig(this.primary));
    this.config.theme.set({ preset: MyPreset });
  }
  
  msg = 'Hello World!!!';
  
  public primaryChanged(value: string) {
    this.primary = value;
    updatePreset(this.getConfig(this.primary));
  }

  public getConfig(color: string)  {
    return {
      semantic: {
        primary: {
            50: `{${color}.50}`,
            100: `{${color}.100}`,
            200: `{${color}.200}`,
            300: `{${color}.300}`,
            400: `{${color}.400}`,
            500: `{${color}.500}`,
            600: `{${color}.600}`,
            700: `{${color}.700}`,
            800: `{${color}.800}`,
            900: `{${color}.900}`,
            950: `{${color}.950}`
        }
      }
    };
  }
}

bootstrapApplication(PlaygroundComponent, appConfig);
