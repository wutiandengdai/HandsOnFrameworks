import { MediaItemComponent } from './media-item/media-item.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    imports: [ 
        BrowserModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}