import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoReadComponent } from './produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './produto/produto-create/produto-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProdutoReadComponent, ProdutoCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }

