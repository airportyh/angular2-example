import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WeatherComponent } from './weather/weather.component';

const Routes = RouterModule.forRoot([
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodoListComponent },
  { path: 'ttt', component: TicTacToeComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'weather', component: WeatherComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    TodoListComponent,
    HelloComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
