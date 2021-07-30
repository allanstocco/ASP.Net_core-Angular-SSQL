import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCreateComponent } from './cadastro/produto/produto-create/produto-create.component';
import { ProdutoReadComponent } from './cadastro/produto/produto-read/produto-read.component';
import { ProdutoService } from './cadastro/produto/produto.service';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'produto/cadastro', component: ProdutoCreateComponent },
  { path: 'produto/cadastro/:id', component: ProdutoCreateComponent },
  { path: 'produtos', component: ProdutoReadComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
