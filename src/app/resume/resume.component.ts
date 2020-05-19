import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['../app.component.sass', './resume.component.sass']
})
export class ResumeComponent implements OnInit {

  resume = [
    {
      title : 'Experiência profissional',
      itens : [
        {
          title: 'Desenvolvedor Java',
          description: 'Desenvolvimento na linguagem Java 8 com o framework Spring Boot.',
          place: 'IBM',
          start: 'Dez/2019',
          end: 'Atual'
        },
        {
          title: 'Estagiário',
          description: 'Desenvolvedor Java',
          place: 'IBM',
          start: 'Ago/2019',
          end: 'Dez/2019'
        },
        {
          title: 'Desenvolvedor Técnico',
          description: `Experiência com os frameworks AngularJS e Ionic 3/4. Criação de APIs utilizando ASP.NET
          Framework/Core. Manutenção em projetos PHP com os frameworks FuelPHP e Yii.
          Desenvolvimento com a linguagem de programação Informix 4GL para o ERP Totvs Logix.`,
          place: 'TI+ Soluções',
          start: 'Jul/2018',
          end: 'Ago/2019'
        },
        {
          title: 'Técnico em informática',
          description: `Instalação de equipamentos, manutenção de computadores, instalação de hardwares,
          softwares e redes, Active Directory e suporte ao usuário.`,
          place: 'Objetivo Americana',
          start: 'Mar/2017',
          end: 'Jul/2018'
        }
      ]
    },
    {
      title : 'Formação acadêmica',
      itens : [
        {
          title: 'Segurança da informação',
          description: '',
          place: 'FATEC Americana',
          start: 'Jan/2017',
          end: 'Jul/2020'
        },
        {
          title: 'Técnico em informática',
          description: '',
          place: 'ETEC Polivalente de Americana',
          start: 'Jan/2014',
          end: 'Dez/2016'
        }
      ]
    },
    {
      title : 'Idiomas',
      itens : [
        {
          title: 'Inglês avançado',
          description: '',
          place: '',
          start: '',
          end: ''
        }
      ]
    }


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
