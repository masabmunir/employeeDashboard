import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { Menu } from '../menu.model';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent,MatSidenavModule,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  opened = true;

  toggle(){

  }

  menu: Menu = [{
    
  }]
}
