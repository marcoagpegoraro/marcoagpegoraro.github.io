export default {
  translations: {
    commonWords: {
      period: "Period",
      contactMe: "Contact Me",
      message: "Message"
    },
    presentation: {
      title: `Fullstack Software Developer | AWS | Java | JavaScript`
    },
    aboutMe: {
      message1: `Hello! And welcome to my personal website 🙋‍♂️, my name is Marco, I am %%ANOS%% years old and i currently work as a software developer for Itaú Unibanco, the largest bank in Latin America, i started learning programming since 2014 when I entered high school and I'm always looking to learn new technologies.`,
      message2: `Today at work, I work mainly in the modernization part using Java with Apache Kafka, AWS SQS and AWS SNS, I have basic knowledge in Terraform and i am  an AWS Cloud Practitioner certified, but i also have knowledge with C#, PHP, Dart with Flutter for creating Mobile Apps and JavaScript, witch is the default language that i use to create personal projects, along with Next.js or React framework`,
      message3: `My main hobbies are cars 🚗, music 🎵, watches ⌚ and old technologies like computers 💾 or video games 🎮 from the 90s and 00s, I find it fascinating to research the history of things and see how they evolved to become what they are today. I currently own a 1993 Honda Accord Wagon that my girlfriend and i are very attached to. I have advanced English and I am currently in the process of learning italian.`,
    },
    resume: {
      windowText: `My resume`,
      myProfessionalExperiences: `My professional experiences`,
      myEducation: `My education`,
      chooseAnotherCompany: `Choose another company:`,
      resumeItems: {
        itau: {
          name: "Itaú Unibank",
          date: 'June 2021 - Current',
          aboutText: {
            "1": `
              I joined Itaú — the largest bank in Latin America — as a Software Engineer responsible for developing solutions for data integration between teams using Java with EMR and Kafka, all using the AWS cloud environment.`
            ,"2":`
              I was then assigned to the team responsible for registering credit operations, where I still work today. My day to day routine is to maintain existing systems and also work on creating new systems and flows.
            `,"3": `
              My stack is currently focused on Java version 11, in addition to Kotlin for some applications. The database used is DynamoDB. I also work on creating lambdas made in Python and JavaScript. Communication between microservices is done synchronously with HTTP and asynchronously with AWS SNS, AWS SQS and Kafka. The latter uses Schema Registry and Apache Avro to define contracts.
            `,"4": `
              I was also responsible for implementing Datamesh in the team, using DynamoDB Streams, along with Lambda for parquet conversion and AWS Glue Catalog for data visualization in AWS Athena.
            `
          }
        },
        b2w: {
          name: "B2W Digital",
          date: 'September 2020 - June 2021',
          aboutText: {
            "1": `
              I worked at the team that take care of systems that sent notifications to the client, being
              these notifications via Email and Whatsapp. The systems were made in Java 11
              in conjunction with technologies such as Apache Kafka for asynchronous sending of messages
              and Cloud AWS.`,
            "2": `I also participated in the creation of the new send email and WhatsApp system 
               made with Java and Angular.`
          }
        },
        ibm: {
          name: "IBM Brazil",
          date: 'August 2019 - September 2020',
          aboutText: {
            "1": `
              Java 8 programmer working at IBM for the Itaú Unibank project,
              I participated in application maintenance
              that used HTTP calls, often these calls needed to occur at the same time.
              so the library RxJava was used to do this.`,
            "2": `I also helped teach Java and Object Oriented Programming
              to the new project interns, which earned me an IBM Educator Badge.`
          }
        },
        timais: {
          name: "TI+ Solutions",
          date: 'July 2018 - August 2019',
          aboutText: {
            "1": `
              I started being a C# programmer programming in ASP.NET together with the AngularJS (version 1) framework,
              but then I was responsible for some projects in PHP, and also in mobile programming
               with the Ionic framework, that's when I gained great knowledge in TypeScript.
               I also had the opportunity
              to program in the 4GL language, which is a language used by the company TOTVS in the
              ERP(Enterprise Resource Planning) system Logix, it is a language very similar to database procedures but with
              the addition of methods for screen creation.`,
            "2": `It was my first job as a programmer! I am very grateful for everything I learned at TI+.
              I will always remember the good times we had together.
          `
          }
        },
        fatec: {
          name: "São Paulo State Technological College (FATEC)",
          date: 'January 2017 - June 2020',
          aboutText: {
            "1": `
              Technologist course focused on learning network management and the main
              OSI model protocols like Ethernet, IPV4, IPV6, DHCP, ARP, TCP, UDP, etc.
              as well as implementing subnet rules, firewall in order to guarantee
              a secure network. Learning about the Linux operating system.`,
            "2": `I did my Final Paper with a friend about a system that identifies 
              phishing emails using the Naive Bayes Algorithm.`
          }
        },
        etec: {
          name: "Technical School - Polivalente (ETEC)",
          date: 'January 2014 - December 2016',
          aboutText: {
            "1": `
              It was where I did my secondary education along with the IT technician course, it was here that I had
              the first contact with programming and I always knew that was what I wanted to work on
              in the future, I made friends that I still talk to and i am very proud to have studied here.
              I learned the concepts of programming language with C, object-oriented programming,
              formatting computers, networks, HTML and basic android with java.`
          }
        },
        fiap: {
          name: "FIAP",
          date: 'September 2024 - September 2025',
          aboutText: {
            "1": `
              MBA in solution architecture focused on problem-solving and practical activities
              related to the different types of architecture according to the TOGAF 9.2 framework, in addition to the business
              architecture present in TOGAF 10.`
          }
        }
      }
    },
    projects: {
      title: "Some projects I created or participated in",
      v: {
        name: "Project in VLang",
        description: `Video explaining my project made in V language for the \"Backend Fight\" friendly competition`,
        date: "14/02/2024"
      },
      hugoblog: {
        name: "Article about my Blog made with Hugo",
        description: `Motivators for use it and how the migration was done`,
        date: "28/04/2024"
      },
      golangblog: {
        name: "Article on my old Blog made using Go",
        description: `How I built the blog using Go and the Fiber framework`,
        date: "27/10/2023"
      },
      portfolioarticle: {
        name: "Article about how I made this portfolio website",
        description: `Technologies used and more`,
        date: "30/07/2023"
      },
      awssolutionsarchitect: {
        name: "AWS Solutions Architect",
        description: `Certificate`,
        date: "28/08/2024"
      },
      awscloudpractitioner: {
        name: "AWS Cloud Practitioner",
        description: `Certificate`,
        date: "Aug 23, 2021"
      },
      gorlami: {
        name: "Article about the film Inglorious Bastards",
        description: `Learning Italian with the "Gorlami" cene at Inglorious Bastards`,
        date: "Apr 02, 2023"
      },
      plexMediaServer: {
        name: "Creating a media server with Plex and a Raspberry PI",
        description: "Setup a media server using a Raspberry PI with Docker e Plex",
        date: "Jan 04, 2022"
      },
      gdgCampinas: {
        name: "Online presenter at GDG Campinas",
        description: "Creating a backend web application with Dart",
        date: "Mar 26, 2020"
      },
      aqueduct: {
        name: "Article about the Dart web framework Aqueduct",
        description: "Basic, database connection and JWT auth",
        date: "Oct 26, 2019",
      },
      angularDart: {
        name: "Article about Angular Dart",
        description: "Basic, Routing and HTTP requests",
        date: "Oct 27, 2019",
      },
      badgeJavaInstructor: {
        name: "Badge - Java Instructor IBM",
        description: "Earned by teaching new IBM interns",
        date: "March 30, 2020",
      },
      flutterAuth: {
        name: "Flutter Authentication",
        description: "Utilizing WebView e Google",
        date: "Dec 04, 2020",
      }
      ,
      fatecPortasAbertas: {
        name: "Fatec de portas abertas",
        description: "Presentation of a webApp simulating a phishing",
        date: "May 05, 2020",
      }
      ,
      webFrontEndEssentials: {
        name: "Udacity - Web Frontend Fundamentals",
        description: "Udacity Nanodegree Program Graduate",
        date: "Nov 11, 2018",
      }
    },
    footer: {
      followMeOnSocialNetworks: "Follow me on social networks:",
      text: `
      This site was programmed using the most modern web development technologies,
        like <a href='https://react.dev' target='_blank'>ReactJS</a> and <a href='https://www.typescriptlang.org/' target='_blank'>Typescript</a> together
         
         with recommended componentization practices,
        internationalization with the <a href='https://www.i18next.com/' target='_blank'>i18n</a> library,
        animations with CSS and <a href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' target='_blank'>intersection observer</a>
        , in addition to the <a href='https://mui.com/' target='_blank'>Material UI</a> component library.
        <br/><br/>
        Made with ❤️ by myself, hosted on my <a href='https://pages.github.com/' target='_blank'>GitHub Pages</a> and
        domain registered at <a href='https://registro.br/' target='_blank'>registro.br</a>, feel
          free to see the code <a href='https://github.com/marcoagpegoraro/marcoagpegoraro.github.io' target='_blank'>by clicking on this link</a>.
        <br/><br/>
      `
    }
  }
}