import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './content/posts/posts.component';
import { HeaderComponent } from './content/header/header.component';
import { SinfoniaAlemanhaComponent } from './content/posts/sinfonia-alemanha/sinfonia-alemanha.component';
import { SinfoniaAlemanhaStrComponent } from './content/streaming/sinfonia-alemanha-str/sinfonia-alemanha-str.component';
import { SinfoniaSoriaComponent } from './content/streaming/sinfonia-soria/sinfonia-soria.component';
import { Papa50anosComponent } from './content/posts/papa50anos/papa50anos.component';
import { Celebracao50anosComponent } from './content/posts/celebracao50anos/celebracao50anos.component';
import { Mercaba25comunidadesComponent } from './content/posts/mercaba25comunidades/mercaba25comunidades.component';
import { HistoriaComponent } from './content/posts/historia/historia.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sinfonia-alemanha', component: SinfoniaAlemanhaComponent },
  { path: 'sinfonia-alemanha-str', component: SinfoniaAlemanhaStrComponent },
  { path: 'sinfonia-soria', component: SinfoniaSoriaComponent },
  { path: 'papa50anos', component: Papa50anosComponent },
  { path: 'celebracao50anos', component: Celebracao50anosComponent },
  { path: 'mercaba25comunidades', component: Mercaba25comunidadesComponent },
  { path: 'historia', component: HistoriaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
