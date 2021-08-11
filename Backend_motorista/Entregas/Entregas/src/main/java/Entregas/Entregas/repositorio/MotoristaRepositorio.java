package Entregas.Entregas.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Entregas.Entregas.entity.Motorista;

@Repository
public interface MotoristaRepositorio extends JpaRepository<Motorista, Integer>{

}
