package com.github.DanielleSantiago.service;

import com.github.DanielleSantiago.model.Cliente;
import com.github.DanielleSantiago.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientesService {

    public void salvarCliente(Cliente cliente) {
        validarCliente(cliente);
        ClientesRepository clientesRepository = new ClientesRepository();
        clientesRepository.persistir(cliente);
    }
    public void validarCliente(Cliente cliente){
    // aplica validações

    }
}
