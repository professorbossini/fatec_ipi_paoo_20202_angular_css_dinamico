import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [`
    .titulo{
      font-size: 1.5rem
    }
    .corpo{
      padding: 12px;
      font-size: 1.1rem;
      border: 1px solid #EEE;
    }
  `],
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  valor;
  gerarValor (){
    this.valor = Math.round(Math.random() * 100) + 1;
  }
  obterEstilosParaOBotao (){
    return {
      backgroundColor: '#EEE6FF',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px'
    }
  }

  obterClassesRodape() {
    return ['rodape'];
  }

  obterClassesValor(){
    return {
      'numero-par': this.valor % 2 == 0,
      'numero-impar': this.valor % 2 == 1
    }
  }
}
