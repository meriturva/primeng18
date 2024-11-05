import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';
import { ButtonModule } from 'primeng/button';

import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
     <main>
      <h1>Playground</h1>
        <hr>
        <input pInputText type="text" [(ngModel)]="msg" />
        <p class="h-layout"><i style="color: green" class="pi pi-info-circle"></i> Message is: <b>{{ msg }}</b></p>
        <hr>

        <h3>Standard Usage of button</h3>
        <p class="h-layout">
          <p-button label="Label" icon="pi pi-check" />
        </p>

        <h3>Wrong Usage of button content</h3>
        <p class="h-layout">
          <p-button>Content</p-button>
          <p-button icon="pi pi-check">Content & Icon</p-button>
        </p>

        <h3>Right Usage of button content for custom buttons</h3>
        <p class="h-layout">
          <p-button>
              <span class="h-layout">
                 <i class="pi pi-check"></i>
                 <span class="label">Custom</span>
              </span>
        </p-button>
        </p>
    </main>
  `,
  imports: [InputTextModule, FormsModule, ButtonModule],
})
export class PlaygroundComponent {
  constructor(private config: PrimeNGConfig) {
    const MyPreset = definePreset(Aura, {
      //Your customizations, see the following sections for examples
    });

    this.config.theme.set({ preset: MyPreset });
  }
  msg = 'Hello World!!!';
}

bootstrapApplication(PlaygroundComponent);
