import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgPipesModule } from 'ngx-pipes';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './content/header/header.component';
import { PostsComponent } from './content/posts/posts.component';
import { StreamingComponent } from './content/streaming/streaming.component';
import { SinfoniaAlemanhaComponent } from './content/posts/sinfonia-alemanha/sinfonia-alemanha.component';
import { SinfoniaAlemanhaStrComponent } from './content/streaming/sinfonia-alemanha-str/sinfonia-alemanha-str.component';
import { SinfoniaSoriaComponent } from './content/streaming/sinfonia-soria/sinfonia-soria.component';
import { Papa50anosComponent } from './content/posts/papa50anos/papa50anos.component';
import { Celebracao50anosComponent } from './content/posts/celebracao50anos/celebracao50anos.component';
import { Mercaba25comunidadesComponent } from './content/posts/mercaba25comunidades/mercaba25comunidades.component';
import { HistoriaComponent } from './content/posts/historia/historia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    PostsComponent,
    StreamingComponent,
    SinfoniaAlemanhaComponent,
    SinfoniaAlemanhaStrComponent,
    SinfoniaSoriaComponent,
    Papa50anosComponent,
    Celebracao50anosComponent,
    Mercaba25comunidadesComponent,
    HistoriaComponent
  ],
  imports: [
    NgPipesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
