import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DirectiveComponent } from './directive/directive.component';
import { routingComponent } from './app-routing.module';
import { CustService } from './cust.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule }from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule} from '@angular/material/select';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectiveComponent,
    routingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule, 
    MatCheckboxModule,
    MatFormFieldModule, 
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
    MatSelectModule,
    
  ],
  providers: [CustService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
