import React from "react";
import ResumeItem, { ResumeItemType } from "./types/Resume";
import { AccountBalance, Computer, School, SchoolOutlined, StorefrontOutlined, TipsAndUpdates } from '@mui/icons-material';

export const resumeItemList: ResumeItem[]  = [
    {
      name: "Itaú unibanco",
      icon: <AccountBalance />,
      aboutText: 'Software enginier',
      type: ResumeItemType.WORK,
      selectedIndex: 0
    },
    {
      name: "B2W Digital",
      icon: <StorefrontOutlined />,
      aboutText: `- Uso das linguagens de programação Java 8 e 11 com Spring Cloud e Angular com Typescript para desenvolvimento de produtos internos da companhia.
      - Apache Kafka. 
      - Nuvem AWS.`,
      type: ResumeItemType.WORK,
      selectedIndex: 1
    },
    {
      name: "IBM Brasil",
      icon: <Computer />,
      aboutText: `- Outsourcing Itaú Unibanco (One of the largest bank in Latin America)
      - Java 8, RxJava
      - Spring Boot, Spring Cloud, Junit 4, Mockito, Fixture
      - Java instructor for interns`,
      type: ResumeItemType.WORK,
      selectedIndex: 2
    },
    {
      name: "TI+ Soluções",
      icon: <TipsAndUpdates />,
      aboutText: `- Manutenção em WebApps com AngularJS e APIs com ASP.NET Framework.
      - Criação de aplicativos Android com Ionic 3/4. 
      - Manutenção em projetos PHP com os frameworks FuelPHP e Yii 2.
      - Desenvolvimento com a linguagem de programação Informix 4GL para o ERP Totvs Logix.`,
      type: ResumeItemType.WORK,
      selectedIndex: 3
    },
    {
      name: "Fatec Americana",
      icon: <School />,
      aboutText: `Segurança da informação`,
      type: ResumeItemType.STUDY,
      selectedIndex: 4
    },
    {
      name: "Etec Americana",
      icon: <SchoolOutlined />,
      aboutText: `- Formatação e manutenção de computadores
      - Conceito de POO
      - Redes
      - Java, C, C#, HTML, PHP e Android básico`,
      type: ResumeItemType.STUDY,
      selectedIndex: 5
    }
  ] 