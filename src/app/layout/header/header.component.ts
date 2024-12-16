import { Component, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Masab';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }
}
