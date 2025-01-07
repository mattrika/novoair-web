import { CommonModule } from '@angular/common'
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-default',
  imports: [CommonModule],
  templateUrl: './header-default.component.html',
  styleUrl: './header-default.component.scss'
})
export class HeaderDefaultComponent {

  isMobileMenuOpen = false;
  isServicesDropdownOpen = false;
  mobileMenuHeight = 0;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        this.mobileMenuHeight = mobileMenu.scrollHeight;
      }
    } else {
      this.mobileMenuHeight = 0;
    }
  }

  toggleServicesDropdown() {
    this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768) {
      this.isMobileMenuOpen = false;
      this.isServicesDropdownOpen = false;
      this.mobileMenuHeight = 0;
    }
  }
}


