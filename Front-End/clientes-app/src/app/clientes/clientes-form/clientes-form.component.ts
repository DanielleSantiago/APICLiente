import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'
import { ClientesService } from '../../clientes.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[] = [];
  id!: number;


  constructor(
    private service : ClientesService,
    private router : Router,
    private activatedRoute : ActivatedRoute) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.service.acharPorId(Number(id)).subscribe((result: Cliente) => {
        this.cliente = result;
      }, errorResponse => {
        this.cliente = new Cliente();
      });
    }
  }


  voltarParaLista() {
    this.router.navigate(['/clientes-lista'])
  }


  onSubmit() {
    if(this.id){
      this.service
        .atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
        })
    } else{
    this.service
      .salvar(this.cliente)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
  }
}
