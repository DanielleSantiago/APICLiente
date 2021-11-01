import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente = new Cliente;

  constructor(
    private service : ClientesService,
    private router : Router) {}

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe( resposta => this.clientes = resposta );
  }

  listarTodos() {
    this.service.getClientes().subscribe((result: Cliente[]) => {
      this.clientes = result;
    });
  }

  novoCadastro() {
    this.router.navigate(['/clientes/form'])
  }

  apagar(id: number) {
    Swal
    .fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, pode apagar!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.service.remover(id).subscribe(result => {
          this.listarTodos();
          Swal.fire(
            'Apagado!',
            'Cliente apagado com sucesso.',
          )
        }, (errorResponse: any) => {
          console.error(errorResponse);
        });
      }
    })
  }
}
