import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { AgentItemComponent } from './components/agent-item';
import { AgentDetailComponent } from './components/agent-detail';
import { FilterPipe } from './filter.pipe';

@NgModule({
    imports: [
        BrowserModule, FormsModule
    ],
    declarations: [
        AppComponent, AgentItemComponent, AgentDetailComponent, FilterPipe
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}
