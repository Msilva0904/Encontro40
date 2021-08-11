package Entregas.Entregas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Entregas.Entregas.entity.Motorista;
import Entregas.Entregas.repositorio.MotoristaRepositorio;

@RestController
@RequestMapping("motorista")
@CrossOrigin(origins = {"http://localhost:4200"} )
public class MotoristaController {

	@Autowired
	private MotoristaRepositorio motoristarepositorio;
	
	@GetMapping ("listar")
	public List<Motorista> listarmotorista(){
		
		return motoristarepositorio.findAll();
	}
	
	@PostMapping("incluir")
	public void Incluir (@RequestBody Motorista novoMotorista) {
		
		motoristarepositorio.save(novoMotorista);
		motoristarepositorio.flush();
	}
}
