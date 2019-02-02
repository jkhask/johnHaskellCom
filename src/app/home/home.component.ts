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
      { name: 'Express', target: '' },
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

}
