import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule, NgFor } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MenubarModule, CommonModule, NgFor],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements OnInit {
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          route: 'account/login',
          style: { 'margin-left': 'auto' },
          class: 'p-submenu-list',
          command: () => this.logout(),
        },
      ];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
