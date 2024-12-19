import { Component } from '@angular/core';
import { PageHeaderComponent } from "../layout/page-header/page-header.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [PageHeaderComponent,MatIconModule,MatButtonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

}
