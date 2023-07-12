import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpolyeeComponent } from './empolyee/empolyee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';

const routes: Routes = [
  { path: 'employee', component: EmpolyeeComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'rooms/add', component: RoomsAddComponent},
  { path: 'rooms/:id', component: RoomsBookingComponent},
  { path: '', redirectTo: '/rooms', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
