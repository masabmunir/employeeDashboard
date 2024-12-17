import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Menu } from '../../menu.model';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [MatListModule,RouterModule,MatIconModule,MatExpansionModule,CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {

  @Input() menu: Menu = [];
}
