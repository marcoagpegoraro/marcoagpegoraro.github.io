export default {
  translations: {
    commonWords: {
      period: "Período",
      contactMe: "Me contate",
      message: "Mensagem"
    },
    presentation: {
      title: `Desenvolvedor de software Fullstack | AWS | Java | JavaScript`
    },
    aboutMe: {
      message1: `Olá, seja bem vindo ao meu site pessoal 🙋‍♂️, meu nome é Marco, tenho %%ANOS%% anos, trabalho atualmente como desenvolvedor de software para o Itaú Unibanco, começei a aprender programação desde 2014 quando entrei no ensino médio e sempre estou procurando aprender novas tecnologias.`,
      message2: `Hoje no trabalho, atuo principalmente na parte de modernização utilizando Java junto com as tecnologias de Kafka e mensageria, tenho conhecimento basico em Terraform e sou certificado AWS Cloud Practitioner, mas também tenho conhecimento com as linguagens C#, PHP, Dart com Flutter para criação de Apps Mobile e JavaScript, essa ultima na qual é a linguagem padrão que utilizo para a criação de projetos pessoais, junto com o framework Next.js`,
      message3: `Meus principais hobbies são carros 🚗, musica 🎵, relogios ⌚ e tecnologias antigas, como computadores 💾 ou videogames 🎮 da decada de 90 e 00, acho fascinante pesquisar sobre a história das coisas e ver como elas evoluiram até se tornar o que é hoje. atuamente tenho um Honda Accord 1993 Wagon no qual eu e minha namorada somos muito apegados. Tenho ingles avançado e atualmente estou em processo de aprendizado da lingua italiana.`,
    },
    resume: {
      windowText: `Meu curriculo`,
      myProfessionalExperiences: `Minhas experiencias profissionais`,
      myEducation: `Meus estudos`,
      chooseAnotherCompany: `Escolher Outra empresa:`,
      resumeItems: {
        itau: {
          name: "Itaú Unibanco",
          date: 'Junho de 2021 - Atual',
          aboutText: {
            "1": `Entrei no Itaú como desenvolvedor Java 11 focado bastante em projetos 
            utilizando serviços da Cloud AWS, como S3, EMR. Em seguida fui direcionado a
            um projeto que consistia em projetos com Java e AWS Lambdas programadas em JavaScript.
            Também precisei realizar o envio de mensagens SNS e SQS, acesso ao DynamoDB e migração
            de aplicações Java para Kotlin.
            `
          }
        },
        b2w: {
          name: "B2W Digital",
          date: 'Setembro de 2020 - Junho de 2021',
          aboutText: {
            "1": `
            Trabalhei na parte dos sistemas que enviavam notificações para o cliente, sendo 
            essas notificações via Email e Whatsapp. Os sistemas eram feitos em Java 11
            em conjunto com tecnologias como Apache Kafka para envio assíncrono das mensagens
            e Cloud AWS.`,
            "2": `Participei também da criação do novo sistemas de envio e parametrizações de 
            Email feito em Java com Angular.`
          }
        },
        ibm: {
          name: "IBM Brasil",
          date: 'Agosto de 2019 - Setembro de 2020',
          aboutText: {
            "1": `
            Programador Java 8 trabalhando na IBM para o projeto do Itaú Unibanco, 
            participei da manutenção de aplicações
            que utilizavam chamadas HTTP, muitas vezes essas chamadas precisavam ocorrer ao 
            mesmo tempo, era utilizado então a biblioteca RxJava.`,
            "2": `Também ajudei a ensinar Java, programação orientada a objetos
            para os os novos estagiários do projeto, o que me rendeu uma Badge de educador da IBM `
          }
        },
        timais: {
          name: "TI+ Soluções",
          date: 'Julho de 2018 - Agosto de 2019',
          aboutText: {
            "1": `
            Começei sendo programador C# programando em ASP.NET junto com o framework AngularJS, 
            mas em seguida já fiquei responsáveis por alguns projetos em PHP, e também em programação
            mobile com o framework Ionic, foi ai que obtive grande conhecimento em TypeScript.
             também tive a oportunidade
            de programar na linguagem 4GL, que é uma linguagem utilizada pela empresa TOTVS no 
            ERP Logix, é uma linguagem muito semelhante a procedures de banco de dados porém com 
            o adicional de criar telas.`,
            "2": `Foi meu primeiro emprego como programador! Sou muito grato por tudo que aprendi na TI+.
            Sempre vou me lembrar dos bons momentos que tivemos juntos.
        `
          }
        },
        fatec: {
          name: "FATEC Americana",
          date: 'Janeiro de 2017 - Junho de 2020',
          aboutText: {
            "1": `
            Curso de tecnologo focado no aprendizado de gerenciamento de redes e os principais 
            protocolos do modelo OSI como Ethernet, IPV4, IPV6, DHCP, ARP, TCP, UDP, etc. 
            assim como implementar regras de sub-redes, firewall com o objetivo de garantir
            uma rede segura. Aprendizado sobre o sistema operacional Linux.`,
            "2": `Fiz meu TCC com um amigo a respeito de um sistema que roda o algoritmo de 
            Naive Bayes para identificar emails que são phishings ou não.`
          }
        },
        etec: {
          name: "ETEC Americana",
          date: 'Janeiro de 2014 - Dezembro de 2016',
          aboutText: {
            "1": `
            Foi onde fiz meu ensino médio junto ao curso de técnico de informática, foi aqui que tive
            o primeiro contato com programação e desde sempre soube que era isso que queria trabalhar 
            no futuro, fiz amigos que tenho até hoje e tenho muito orgulho de ter estudado aqui. 
            Aprendi os conceitos de Linguagem de programação com C, programação orientada a objetos, 
            formatação de computadores, redes, HTML e android básico com java.`
          }
        },
        fiap: {
          name: "Faculdade de Informática e Administração Paulista (FIAP)",
          date: 'Setembro de 2024 - Setembro de 2025',
          aboutText: {
            "1": `
            MBA de arquitetura de soluções focado em resolução de problemas e atividades práticas 
            referente aos diversos tipos de arquitetura segundo o framework TOGAF 9.2, alem da arquitetura
            de negócios presente no TOGAF 10.`
          }
        }
      }
    },
    projects: {
      title: "Alguns projetos que criei ou participei",
      hugoblog: {
        name: "Artigo sobre meu Blog feito com Hugo",
        description: `Motivadores para utilizar e como foi feito a migração`,
        date: "28/04/2024"
      },
      golangblog: {
        name: "Artigo sobre meu antigo Blog feito usando Go",
        description: `Como eu construi o blog usando Go e o framework Fiber`,
        date: "27/10/2023"
      },
      portfolioarticle: {
        name: "Artigo sobre como fiz esse site portfólio",
        description: `Tecnologias utilizadas e mais`,
        date: "30/07/2023"
      },
      awssolutionsarchitect: {
        name: "AWS Solutions Architect",
        description: `Certificado`,
        date: "28/08/2024"
      },
      awscloudpractitioner: {
        name: "AWS Cloud Practitioner",
        description: `Certificado`,
        date: "23/08/2021"
      },
      gorlami: {
        name: "Artigo sobre cena do filme Inglorious Bastards",
        description: `Aprendendo italiano com base na cena do "Gorlami" em Inglorious Bastards`,
        date: "02/04/2023"
      },
      plexMediaServer: {
        name: "Artigo sobre Plex em um Raspberry PI",
        description: "Configurando do inicio ao fim um media server com Raspberry PI, Docker e Plex",
        date: "04/01/2022"
      },
      gdgCampinas: {
        name: "Palestrante online GDG Campinas",
        description: "Criando uma aplicação backend com Dart",
        date: "26/03/2020"
      },
      aqueduct: {
        name: "Artigo sobre Framework Web em Dart Aqueduct",
        description: "Básico, conexão com banco e autenticação JWT",
        date: "26/10/2019",
      },
      angularDart: {
        name: "Artigo sobre Angular Dart",
        description: "Básico, roteamento e chamadas HTTP",
        date: "27/10/2019",
      },
      badgeJavaInstructor: {
        name: "Badge de Instrutor de Java",
        description: "Treinamento para novos estagiários da IBM",
        date: "30/03/2020",
      },
      flutterAuth: {
        name: "Autenticação no Flutter",
        description: "Utilizando WebView e Google",
        date: "04/12/2020",
      }
      ,
      fatecPortasAbertas: {
        name: "Fatec de portas abertas",
        description: "Sistema demonstrando o funcionamento de phishing",
        date: "05/05/2020",
      }
      ,
      webFrontEndEssentials: {
        name: "Udacity - Fundamentos Web Frontend",
        description: "Udacity Nanodegree Program Graduate",
        date: "25/11/2018",
      }
    },
    footer: {
      followMeOnSocialNetworks: "Me siga nas redes sociais:",
      text: `
      Esse site foi programado utilizando as mais modernas tecnologias de desenvolvimento web,
        como <a href='https://react.dev' target='_blank'>ReactJS</a> e <a href='https://www.typescriptlang.org/' target='_blank'>Typescript</a> junto 
         
         com as praticas recomendadas de componentização,
        internacionalização com a biblioteca <a href='https://www.i18next.com/' target='_blank'>i18n</a>, 
        animações com CSS e <a href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' target='_blank'>intersection observer</a>
        , alem da biblioteca de componentes <a href='https://mui.com/' target='_blank'>Material UI</a>.
        <br/><br/>
        Feito com ❤️ por mim mesmo, hosteado no meu <a href='https://pages.github.com/' target='_blank'>GitHub Pages</a> e 
        dominio registrado no <a href='https://registro.br/' target='_blank'>registro.br</a>, fique
         a vontade para ver o código do site <a href='https://github.com/marcoagpegoraro/marcoagpegoraro.github.io' target='_blank'>clicando neste link</a>.
        <br/><br/>
      `
    }
  }
}