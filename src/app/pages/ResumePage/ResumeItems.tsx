import React from "react";
import ResumeItem, { ResumeItemType } from "./types/Resume";
import { AccountBalance, Computer, School, SchoolOutlined, StorefrontOutlined, TipsAndUpdates } from '@mui/icons-material';
import TechChip from "../../components/TechChip";

export const resumeItemList: ResumeItem[] = [
  {
    name: "resume.resumeItems.itau.name",
    icon: <AccountBalance />,
    imageUrl: './resume-page/itau-logo.png',
    date: 'resume.resumeItems.itau.date',
    chips: [
      <TechChip label="Java" imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" />,
      <TechChip label="Java Cucumber" imageUrl="https://static.javatpoint.com/tutorial/cucumber/images/cucumber-testing-tutorial.png" />,
      <TechChip label="Spring" imageUrl="https://pluralsight2.imgix.net/paths/images/corespring-f9a00f4516.png" />,
      <TechChip label="AWS S3" imageUrl="https://cloudfront.romexsoft.com/wp-content/uploads/2019/09/aws-s3-icon.svg" />,
      <TechChip label="AWS EMR" imageUrl="https://d1.awsstatic.com/house-ads/events/jp/career/console_emr_icon.8a25d95334333fcb6582f7eaf5e3f396b7e32153.png" />,
      <TechChip label="AWS ECS" imageUrl="https://solidops.io/wp-content/uploads/2022/02/ecs-626x410.png" />,
      <TechChip label="AWS DynamoDB" imageUrl="https://www.datarain.com.br/wp-content/uploads/2020/08/DybamoDB-logo.png" />,
      <TechChip label="AWS Lambda" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/1200px-Amazon_Lambda_architecture_logo.svg.png" />,
      <TechChip label="JavaScript" imageUrl="data:image/png;base64,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" />,
      <TechChip label="Python" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />,
      <TechChip label="Kotlin" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" />,
      <TechChip label="Terraform" imageUrl="https://blog.o2b.com.br/content/images/2022/09/terraform-logo-1.png" />,
    ],
    aboutText: ['resume.resumeItems.itau.aboutText.1'],
    type: ResumeItemType.WORK,
    selectedIndex: 0
  },
  {
    name: "resume.resumeItems.b2w.name",
    icon: <StorefrontOutlined />,
    imageUrl: './resume-page/americanas-sa-logo.png',
    date: 'resume.resumeItems.b2w.date',
    chips: [
      <TechChip label="Java" imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" />,
      <TechChip label="Spring" imageUrl="https://pluralsight2.imgix.net/paths/images/corespring-f9a00f4516.png" />,
      <TechChip label="Angular" imageUrl="https://angular.io/assets/images/logos/angular/angular.svg" />,
      <TechChip label="Kafka" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka.svg/1200px-Apache_kafka.svg.png" />,
      <TechChip label="AWS Fargate" imageUrl="https://www.skyarch.net/blog/wp-content/uploads/2019/04/fargate_logo.png" />,
    ],
    aboutText: ['resume.resumeItems.b2w.aboutText.1', 'resume.resumeItems.b2w.aboutText.2'],
    type: ResumeItemType.WORK,
    selectedIndex: 1
  },
  {
    name: "resume.resumeItems.ibm.name",
    icon: <Computer />,
    imageUrl: './resume-page/ibm-logo.png',
    date: 'resume.resumeItems.ibm.date',
    chips: [
      <TechChip label="Java" imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" />,
      <TechChip label="Spring" imageUrl="https://pluralsight2.imgix.net/paths/images/corespring-f9a00f4516.png" />,
    ], aboutText: ['resume.resumeItems.ibm.aboutText.1', 'resume.resumeItems.ibm.aboutText.2'],
    type: ResumeItemType.WORK,
    selectedIndex: 2
  },
  {
    name: "resume.resumeItems.timais.name",
    icon: <TipsAndUpdates />,
    imageUrl: './resume-page/timais-logo.png',
    date: 'resume.resumeItems.timais.date',
    chips: [
      <TechChip label="C#" imageUrl="https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png" />,
      <TechChip label="ASP.NET" imageUrl="https://runcode.io/_next/image?url=https%3A%2F%2Fruncode-app-public.s3.amazonaws.com%2Fimages%2Fpngegg.original.png&w=1080&q=75" />,
      <TechChip label="AngularJS" imageUrl="data:image/png;base64,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" />,
      <TechChip label="Ionic" imageUrl="https://www.aalpha.net/wp-content/uploads/2020/01/ionic.png" />,
      <TechChip label="PHP" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1280px-Webysther_20160423_-_Elephpant.svg.png" />,
      <TechChip label="Informix 4GL" imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/4f/Logo-totvs.jpg" />,
    ],
    aboutText: ['resume.resumeItems.timais.aboutText.1', 'resume.resumeItems.timais.aboutText.2'],
    type: ResumeItemType.WORK,
    selectedIndex: 3
  },
  {
    name: "resume.resumeItems.fatec.name",
    icon: <School />,
    imageUrl: 'https://www.fatec.edu.br/wp-content/themes/fatec/img/logo-colorido.png',
    date: 'resume.resumeItems.fatec.date',
    aboutText: ['resume.resumeItems.fatec.aboutText.1', 'resume.resumeItems.fatec.aboutText.2'],
    type: ResumeItemType.STUDY,
    selectedIndex: 4
  },
  {
    name: "resume.resumeItems.etec.name",
    icon: <SchoolOutlined />,
    imageUrl: 'https://www.etecpa.com.br/user/themes/g5_helium/images/intro/poli.png',
    date: 'resume.resumeItems.etec.date',
    aboutText: ['resume.resumeItems.etec.aboutText.1'],
    type: ResumeItemType.STUDY,
    selectedIndex: 5
  }
] 