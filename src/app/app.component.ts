import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeComprar! : Array<Item>
  itemParaSerEditado! : Item;

  constructor(
    public listaService: ListaDeCompraService
  ) { }
  ngDoCheck(): void {
    console.log('DoCheck foi chamado.')
    this.listaService.atualizarLocalStorage();
  }

  ngOnInit(): void{
    this.listaDeComprar = this.listaService.getListaDeCompra();
    console.log(this.listaDeComprar)

  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number){
    const index = this.listaDeComprar.findIndex((item) => item.id === id);
    this.listaDeComprar.splice(index, 1);
  }

  limparLista(){
    this.listaDeComprar = [];
  }
}
