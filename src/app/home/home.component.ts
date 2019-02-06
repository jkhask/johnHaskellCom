import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  target: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills: Skill[];

  constructor() { }

  ngOnInit() {
    this.skills = [
      { name: 'Agile', target: '' },
      { name: 'AngularJS', target: '' },
      { name: 'Angular', target: '' },
      { name: 'ColdFusion', target: '' },
      { name: 'CSS3 / SCSS', target: '' },
      { name: 'Express', target: 'https://expressjs.com' },
      { name: 'Firebase', target: '' },
      { name: 'HTML', target: '' },
      { name: 'JavaScript', target: '' },
      { name: 'MongoDB', target: 'https://www.mongodb.com/what-is-mongodb' },
      { name: 'MySQL', target: '' },
      { name: 'Node', target: 'https://nodejs.org' },
      { name: 'PHP', target: '' },
      { name: 'TypeScript', target: '' },
    ];
  }

  openTarget(skill: Skill) {
    if (skill.target) {
      window.open(skill.target, '_blank');
    }
  }

  openSocial(target: string) {
    if (target === 'linkedin') {
      window.open('https://www.linkedin.com/in/john-haskell-b7323591', '_blank');
    } else if (target === 'github') {
      window.open('https://github.com/jkhask', '_blank');
    }
  }

}
