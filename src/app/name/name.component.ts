import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['../app.component.sass', './name.component.sass']
})
export class NameComponent implements OnInit {

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
