import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-join-group',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './join-group.component.html',
})
export class JoinGroupComponent implements OnInit {
  inviteCode: string = '';
  copied = false;
  isMobile = false;
  currentYear = new Date().getFullYear();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.inviteCode = this.route.snapshot.paramMap.get('inviteCode') || '';
    this.detectDevice();
    
    if (this.isMobile && this.inviteCode) {
      this.openApp();
    }
  }

  detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    this.isMobile = /android|ipad|iphone|ipod/i.test(userAgent);
  }

  openApp() {
    if (!this.inviteCode) return;
    const deepLinkUrl = `entrenos://join-group/${this.inviteCode}`;
    window.location.href = deepLinkUrl;
  }

  async copyCode() {
    if (!this.inviteCode) return;
    try {
      await navigator.clipboard.writeText(this.inviteCode);
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    } catch (err) {
      console.error('Error al copiar el código:', err);
    }
  }
}
