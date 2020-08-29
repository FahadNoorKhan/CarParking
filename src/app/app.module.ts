import { NgModule } from '@angular/core';
import { FormComponentComponent } from './form-component/form-component.component';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [ MaterialsModule],
  providers: [],
  bootstrap: [AppComponent],
   // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
