package Entregas.Entregas;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EntregasApplication {

	public static void main(String[] args) {
		System.out.print("Olá Motorista");
		SpringApplication.run(EntregasApplication.class, args);
	}

}
