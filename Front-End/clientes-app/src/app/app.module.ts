import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { ServicoPrestadoModule} from './servico-prestado/servico-prestado.module'
import { HttpClientModule } from '@angular/common/http';
import { ServicoPrestadoService } from './servico-prestado.service';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AuthService } from './auth.service';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    AuthService,
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
