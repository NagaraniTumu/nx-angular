import { Component, Input } from '@angular/core';

@Component({
  selector: 'first-nx-app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  @Input() title: string = '';
}
