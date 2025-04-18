import React from "react";
import ResumeItem, { ResumeItemType } from "./types/Resume";
import { AccountBalance, Computer, School, SchoolOutlined, SchoolTwoTone, StorefrontOutlined, TipsAndUpdates } from '@mui/icons-material';
import TechChip from "../../components/TechChip";

export const resumeItemList: ResumeItem[] = [
  {
    name: "resume.resumeItems.itau.name",
    icon: <AccountBalance />,
    imageUrl: './resume-page/itau.png',
    date: 'resume.resumeItems.itau.date',
    chips: [
      <TechChip label="Java" imageUrl="./resume-page/tech-logos/java.png"/>,
      <TechChip label="Java Cucumber" imageUrl="./resume-page/tech-logos/cucumber.png"/>,
      <TechChip label="Spring" imageUrl="./resume-page/tech-logos/spring.png"/>,
      <TechChip label="AWS S3" imageUrl="./resume-page/tech-logos/s3.png"/>,
      <TechChip label="AWS EMR" imageUrl="./resume-page/tech-logos/emr.png"/>,
      <TechChip label="AWS ECS" imageUrl="./resume-page/tech-logos/ecs.png"/>,
      <TechChip label="AWS DynamoDB" imageUrl="./resume-page/tech-logos/dynamo.png"/>,
      <TechChip label="AWS Lambda" imageUrl="./resume-page/tech-logos/lambda.png"/>,
      <TechChip label="JavaScript" imageUrl="./resume-page/tech-logos/javascript.png"/>,
      <TechChip label="Python" imageUrl="./resume-page/tech-logos/python.png"/>,
      <TechChip label="Kotlin" imageUrl="./resume-page/tech-logos/kotlin.png"/>,
      <TechChip label="Terraform" imageUrl="./resume-page/tech-logos/terraform.png"/>,
    ],
    aboutText: ['resume.resumeItems.itau.aboutText.1'],
    type: ResumeItemType.WORK,
    selectedIndex: 0
  },
  {
    name: "resume.resumeItems.b2w.name",
    icon: <StorefrontOutlined />,
    imageUrl: './resume-page/b2w.png',
    date: 'resume.resumeItems.b2w.date',
    chips: [
      <TechChip label="Java" imageUrl="./resume-page/tech-logos/java.png" />,
      <TechChip label="Spring" imageUrl="./resume-page/tech-logos/spring.png" />,
      <TechChip label="Angular" imageUrl="./resume-page/tech-logos/angular.svg" />,
      <TechChip label="Kafka" imageUrl="./resume-page/tech-logos/kafka.png" />,
      <TechChip label="AWS Fargate" imageUrl="./resume-page/tech-logos/fargate.png" />,
    ],
    aboutText: ['resume.resumeItems.b2w.aboutText.1', 'resume.resumeItems.b2w.aboutText.2'],
    type: ResumeItemType.WORK,
    selectedIndex: 1
  },
  {
    name: "resume.resumeItems.ibm.name",
    icon: <Computer />,
    imageUrl: './resume-page/ibm.png',
    date: 'resume.resumeItems.ibm.date',
    chips: [
      <TechChip label="Java" imageUrl="./resume-page/tech-logos/java.png" />,
      <TechChip label="Spring" imageUrl="./resume-page/tech-logos/spring.png" />,
    ], aboutText: ['resume.resumeItems.ibm.aboutText.1', 'resume.resumeItems.ibm.aboutText.2'],
    type: ResumeItemType.WORK,
    selectedIndex: 2
  },
  {
    name: "resume.resumeItems.timais.name",
    icon: <TipsAndUpdates />,
    imageUrl: './resume-page/timais.png',
    date: 'resume.resumeItems.timais.date',
    chips: [
      <TechChip label="C#" imageUrl="./resume-page/tech-logos/csharp.png" />,
      <TechChip label="ASP.NET" imageUrl="./resume-page/tech-logos/aspnet.jpg" />,
      <TechChip label="AngularJS" imageUrl="./resume-page/tech-logos/angularjs.png" />,
      <TechChip label="Ionic" imageUrl="./resume-page/tech-logos/ionic.png" />,
      <TechChip label="PHP" imageUrl="./resume-page/tech-logos/php.png" />,
      <TechChip label="Informix 4GL" imageUrl="./resume-page/tech-logos/totvs.jpg" />,
    ],
    aboutText: ['resume.resumeItems.timais.aboutText.1', 'resume.resumeItems.timais.aboutText.2'],
    type: ResumeItemType.WORK,
    selectedIndex: 3
  },
  {
    name: "resume.resumeItems.fiap.name",
    icon: <School />,
    imageUrl: './resume-page/fiap.jpg',
    date: 'resume.resumeItems.fiap.date',
    aboutText: ['resume.resumeItems.fiap.aboutText.1'],
    type: ResumeItemType.STUDY,
    selectedIndex: 4
  },
  {
    name: "resume.resumeItems.fatec.name",
    icon: <SchoolTwoTone />,
    imageUrl: './resume-page/fatec.png',
    date: 'resume.resumeItems.fatec.date',
    aboutText: ['resume.resumeItems.fatec.aboutText.1', 'resume.resumeItems.fatec.aboutText.2'],
    type: ResumeItemType.STUDY,
    selectedIndex: 5
  },
  {
    name: "resume.resumeItems.etec.name",
    icon: <SchoolOutlined />,
    imageUrl: './resume-page/poli.png',
    date: 'resume.resumeItems.etec.date',
    aboutText: ['resume.resumeItems.etec.aboutText.1'],
    type: ResumeItemType.STUDY,
    selectedIndex: 6
  }
] 