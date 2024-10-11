import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule, NgFor } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MenubarModule, CommonModule, NgFor],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
    ];
  }
}
