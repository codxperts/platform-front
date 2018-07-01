import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from './../../shared/shared.module';

import { MapsComponent } from './maps/maps.component';

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD93SJH6VHw_8pP2M8Ug19m3RSMDLuNJuY'
    }),
  ],
  declarations: [MapsComponent]
})
export class MapsModule { }
