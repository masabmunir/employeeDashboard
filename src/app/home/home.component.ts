import { Component } from '@angular/core';
import { PageHeaderComponent } from "../layout/page-header/page-header.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageHeaderComponent,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
