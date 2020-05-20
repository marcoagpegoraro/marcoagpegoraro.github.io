import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['../app.component.sass', './photos.component.sass']
})
export class PhotosComponent implements OnInit {

  certificacoes = [
    {
      title: 'Palestrante no GDG Campinas',
      subtitle: 'Criando uma aplicação backend com Dart',
      description: '',
      image: 'assets/img/gdgonline.gif',
      imageAlt: 'Gif mostrando o final do meetup online',
      link: 'https://www.youtube.com/watch?v=0kKge3K0ZwI'
    },
    {
      title: 'Artigo sobre Aqueduct',
      subtitle: 'Básico, conexão com banco e autenticação JWT',
      description: 'Nesse artigo, explico como é a criação de uma aplicação backend utilizando a linguagem Dart e o framework Aqueduct',
      image: 'assets/img/aqueduct.png',
      imageAlt: 'Logo do Aqueduct',
      link: 'https://medium.com/flutter-comunidade-br/criando-uma-aplica%C3%A7%C3%A3o-web-com-dart-parte-1-aqueduct-b%C3%A1sico-conex%C3%A3o-com-banco-e-autentica%C3%A7%C3%A3o-jwt-bd3afad3ae1a'
    },
    {
      title: 'Artigo sobre Angular Dart',
      subtitle: 'Básico, roteamento e chamadas HTTP',
      description: 'Nesse artigo, explico como é a criação de uma aplicação utilizando a linguagem Dart e o framework Angular Dart',
      image: 'assets/img/angulardart.png',
      imageAlt: 'Logo do Angular Dart',
      link: 'https://medium.com/flutter-comunidade-br/criando-uma-aplica%C3%A7%C3%A3o-web-com-dart-parte-2-angulardart-b%C3%A1sico-roteamento-e-chamadas-http-9a7e7187a477'
    },
    {
      title: 'Badge de Instrutor de Java',
      subtitle: 'Treinamento para novos estagiários da IBM',
      description: '',
      image: 'assets/img/educator.png',
      imageAlt: 'Badge de instrutor',
      link: 'https://www.youracclaim.com/badges/d44e38f6-81cb-4c23-831d-4817b5759a28'
    }
    ,
    {
      title: 'Autenticação no Flutter',
      subtitle: 'Utilizando WebView e Google',
      description: '',
      image: 'assets/img/webview.png',
      imageAlt: 'Demonstração da aplicação',
      link: 'https://www.linkedin.com/posts/marco-antonio-goncalves_flutter-webview-mobile-activity-6609090891527274496-ESnq/'
    },
    {
      title: 'Fatec de portas abertas',
      subtitle: 'Sistema demonstrando o funcionamento de phishing',
      description: '',
      image: 'assets/img/fpa.png',
      imageAlt: 'Grupo da apresentação',
      link: 'https://www.linkedin.com/posts/murilohenriquegomes_hacking-kalilinux-activity-6595643833621467136-Xtak/'
    },
    {
      title: 'Fundamentos Web Frontend',
      subtitle: 'Udacity Nanodegree Program Graduate',
      description: '',
      image: 'assets/img/udacity.png',
      imageAlt: 'Certificado da Udacity',
      link: 'https://graduation.udacity.com/confirm/ZRDXRND5'
    }
  ];

  socialMedias = [
    {
      name : 'Linkedin',
      link: 'https://www.linkedin.com/in/marco-antonio-goncalves/',
      image: '../../assets/icons/linkedin.png'
    },
    {
      name : 'Twitter',
      link: 'https://twitter.com/marcoagpegoraro',
      image: '../../assets/icons/twitter.png'
    },
    {
      name : 'Medium',
      link: 'https://medium.com/@tete5423',
      image: '../../assets/icons/medium.png'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
