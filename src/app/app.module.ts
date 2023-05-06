import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { StatsComponent } from './stats/stats.component';
import { PartnersComponent } from './partners/partners.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { MethodComponent } from './method/method.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, IntroComponent, StatsComponent, PartnersComponent, ClientsComponent, ServicesComponent, TestimonialsComponent, MethodComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
