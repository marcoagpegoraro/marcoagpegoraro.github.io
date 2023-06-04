export default {
  translations: {
    commonWords: {
      period: "Periodo",
      contactMe: "Contattami",
      message: "Messaggio"
    },
    presentation: {
      title: `Sviluppatore software fullstack | AWS | Java | JavaScript`
    },
    aboutMe: {
      message1: `Ciao! E benvenuto nel mio sito personale 🙋‍♂️, mi chiamo Marco, ho %%ANOS%% anni e attualmente lavoro come sviluppatore software per Itaú Unibanca, la più grande banca dell'America Latina, ho iniziato a imparare a programmare dal 2014 quando Sono entrato al liceo e cerco sempre di imparare nuove tecnologie.`,
      message2: `Oggi al lavoro, lavoro principalmente nella parte di modernizzazione utilizzando Java con Apache Kafka, AWS SQS e AWS SNS, ho conoscenze di base in Terraform e sono certificato AWS Cloud Practitioner, ma ho anche conoscenze con C#, PHP, Dart con Flutter per la creazione di app mobili e JavaScript, la strega è il linguaggio predefinito che utilizzo per creare progetti personali, insieme a Next.js o al framework React`,
      message3: `I miei hobby principali sono le auto 🚗, la musica 🎵, gli orologi ⌚ e le vecchie tecnologie come i computer 💾 o i videogiochi 🎮 degli anni '90 e '00, trovo affascinante ricercare la storia delle cose e vedere come si sono evolute per diventare quello che sono oggi. Attualmente possiedo una Honda Accord Wagon del 1993 a cui io e la mia ragazza siamo molto legati. Ho un inglese avanzato e attualmente sto imparando l'italiano.`,
    },
    resume: {
      windowText: `Il mio curriculum`,
      myProfessionalExperiences: `Le mie esperienze professionali`,
      myEducation: `La mia educazione`,
      chooseAnotherCompany: `Scegli un'altra compagnia:`,
      resumeItems: {
        itau: {
          name: "Itaú Unibanca",
          date: 'Giugno 2021 - Attuale',
          aboutText: {
            "1": `Sono entrato in Itaú come sviluppatore Java 11 focalizzato sui progetti
            utilizzando i servizi AWS Cloud come S3 ed EMR. Poi sono stato indirizzato a
            un altro team che utilizza progetti con Java e AWS Lambda programmati in JavaScript e Python.
            Avevo anche bisogno di eseguire la messaggistica SNS e SQS, l'accesso a DynamoDB e la migrazione
          Applicazioni Java a Kotlin.
            `
          }
        },
        b2w: {
          name: "B2W Digitale",
          date: 'Settembre 2020 - Giugno 2021',
          aboutText: {
            "1": `
            Ho lavorato presso il team che si occupa dei sistemi che inviavano notifiche al cliente, being
            queste notifiche via Email e Whatsapp. I sistemi sono stati realizzati in Java 11
            in combinazione con tecnologie come Apache Kafka per l'invio asincrono di messaggi
            e Cloud AWS.`,
            "2": `Ho anche partecipato alla creazione del nuovo sistema di invio email e WhatsApp
            realizzato con Java e Angular.`
          }
        },
        ibm: {
          name: "IBM Brasile",
          date: 'Agosto 2019 - Settembre 2020',
          aboutText: {
            "1": `
            Programmatore Java 8 che lavora presso IBM per il progetto Itaú Unibank,
            Ho partecipato alla manutenzione dell'applicazione
            che utilizzava chiamate HTTP, spesso queste chiamate dovevano avvenire contemporaneamente.
            quindi la libreria RxJava è stata usata per fare questo.`,
            "2": `Ho anche aiutato a insegnare Java e la programmazione orientata agli oggetti
            ai nuovi stagisti del progetto, che mi hanno fatto guadagnare un IBM Educator Badge.`
          }
        },
        timais: {
          name: "TI+ Soluzioni",
          date: 'Luglio 2018 - Agosto 2019',
          aboutText: {
            "1": `
            Ho iniziato a fare il programmatore C# programmando in ASP.NET insieme al framework AngularJS (versione 1),
            ma poi sono stato responsabile di alcuni progetti in PHP, e anche nella programmazione mobile
             con il framework Ionic, è stato allora che ho acquisito una grande conoscenza di TypeScript.
             Ho avuto anche l'opportunità
            per programmare nel linguaggio 4GL, che è un linguaggio utilizzato dalla società TOTVS nel
            Il sistema ERP (Enterprise Resource Planning) Logix, è un linguaggio molto simile alle procedure di database ma con
            l'aggiunta di metodi per la creazione dello schermo.`,
            "2": `Era il mio primo lavoro come programmatore! Sono molto grato per tutto ciò che ho imparato in TI+.
            Ricorderò sempre i bei momenti passati insieme.
        `
          }
        },
        fatec: {
          name: "Collegio tecnologico statale di San Paolo (FATEC)",
          date: 'Gennaio 2017 - Giugno 2020',
          aboutText: {
            "1": `
            Corso di tecnologo incentrato sulla gestione della rete di apprendimento e il principale
            Protocolli del modello OSI come Ethernet, IPV4, IPV6, DHCP, ARP, TCP, UDP, ecc.
            così come l'attuazione delle regole di sottorete, firewall al fine di garantire
            una rete sicura. Informazioni sul sistema operativo Linux.`,
            "2": `Ho fatto il mio Final Paper con un amico su un sistema che identifica
            e-mail di phishing utilizzando l'algoritmo Naive Bayes.`
          }
        },
        etec: {
          name: "Scuola Tecnica - Polivalente (ETEC)",
          date: 'Gennaio 2014 - Dicembre 2016',
          aboutText: {
            "1": `
            È stato lì che ho fatto la mia istruzione secondaria insieme al corso di tecnico informatico, è stato qui che ho avuto
            il primo contatto con la programmazione e ho sempre saputo che era quello su cui volevo lavorare
            in futuro mi sono fatto degli amici con cui parlo ancora e sono molto orgoglioso di aver studiato qui.
            ho appreso i concetti del linguaggio di programmazione con C, programmazione orientata agli oggetti,
            formattazione di computer, reti, HTML e Android di base con java.`
          }
        }

      }
    },
    projects: {
      title: "Alcuni progetti che ho creato o a cui ho partecipato",
      awscloudpractitioner: {
        name: "AWS Cloud Practitioner",
        description: `Certificato`,
        date: "23/08/2021"
      },
      gorlami: {
        name: "Articolo sul film Bastardi senza gloria",
        description: `Imparare l'italiano con la scena "Gorlami" a Bastardi Senza Gloria`,
        date: "02/04/2023"
      },
      plexMediaServer: {
        name: "Creazione di un media server con Plex e un Raspberry PI",
        description: "Configura un media server utilizzando un Raspberry PI con Docker e Plex",
        date: "04/01/2022"
      },
      gdgCampinas: {
        name: "Presentatore online al GDG Campinas",
        description: "Creazione di un'applicazione Web di back-end con Dart",
        date: "26/03/2020"
      },
      aqueduct: {
        name: "Articolo sul framework web Dart Aqueduct",
        description: "Di base, connessione al database e autenticazione JWT",
        date: "26/10/2019",
      },
      angularDart: {
        name: "Articolo su Angular Dart",
        description: "Richieste di base, di instradamento e HTTP",
        date: "27/10/2019",
      },
      badgeJavaInstructor: {
        name: "Badge - Istruttore Java IBM",
        description: "Guadagnato insegnando ai nuovi stagisti IBM",
        date: "30/03/2020",
      },
      flutterAuth: {
        name: "Autenticazione Flutter",
        description: "Utilizzare WebView e Google",
        date: "04/12/2020",
      }
      ,
      fatecPortasAbertas: {
        name: "Fatec de portas abertas",
        description: "Presentazione di una webApp che simula un phishing",
        date: "05/05/2020",
      }
      ,
      webFrontEndEssentials: {
        name: "Udacity - Nozioni di base sul frontend Web",
        description: "Udacity Nanodegree Program Graduate",
        date: "25/11/2018",
      }
    },
    footer: {
      followMeOnSocialNetworks: "Seguimi sui social network:",
      text: `
      Questo sito è stato programmato utilizzando le più moderne tecnologie di sviluppo web,
      come <a href='https://react.dev' target='_blank'>ReactJS</a> e <a href='https://www.typescriptlang.org/' target='_blank'>Typescript</a> insieme
       
       con pratiche di componentizzazione raccomandate,
      internazionalizzazione con la libreria <a href='https://www.i18next.com/' target='_blank'>i18n</a>,
      animazioni con CSS e <a href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' target='_blank'>intersection observer</a>
      , oltre alla libreria dei componenti <a href='https://mui.com/' target='_blank'>Material UI</a>.
      <br/><br/>
      Realizzato con ❤️ da me stesso, ospitato sulle mie <a href='https://pages.github.com/' target='_blank'>GitHub Pages</a> e
      dominio registrato su <a href='https://registro.br/' target='_blank'>registro.br</a>, rimani
       sentiti libero di vedere il codice del sito <a href='https://github.com/marcoagpegoraro/marcoagpegoraro.github.io' target='_blank'>cliccando su questo link</a>.
      <br/><br/>
      `
    }
  }
}