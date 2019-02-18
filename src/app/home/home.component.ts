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
      { name: 'Agile', target: 'https://en.wikipedia.org/wiki/Agile_software_development' },
      { name: 'Angular', target: 'https://angular.io/' },
      { name: 'ColdFusion', target: 'https://coldfusion.adobe.com/' },
      { name: 'CSS3 / SCSS', target: 'https://sass-lang.com/' },
      { name: 'Express', target: 'https://expressjs.com' },
      { name: 'Firebase', target: 'https://firebase.google.com/' },
      { name: 'HTML', target: 'https://en.wikipedia.org/wiki/HTML' },
      { name: 'JavaScript', target: 'https://en.wikipedia.org/wiki/JavaScript' },
      { name: 'MongoDB', target: 'https://www.mongodb.com/what-is-mongodb' },
      { name: 'MySQL', target: 'https://www.mysql.com/' },
      { name: 'Node', target: 'https://nodejs.org' },
      { name: 'PHP', target: 'http://www.php.net/' },
      { name: 'TypeScript', target: 'https://www.typescriptlang.org/' },
      { name: 'Wordpress', target: 'https://developer.wordpress.org/' },
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
