import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatMenuModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Masab';

  logout(): void {
    console.log('Logged out');
  }
}
