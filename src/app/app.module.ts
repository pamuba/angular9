import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ContentProjComponent } from './content-proj/content-proj.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    MaterialDemoComponent,
    TemplateRefComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    InteractionComponent,
    ContentProjComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
