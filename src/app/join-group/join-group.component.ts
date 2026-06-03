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

  /** true when the invite code is missing or has an invalid format */
  invalidCode = false;
  /** message shown when code validation fails */
  errorMessage = '';
  /** true while we're trying to open the native app */
  openingApp = false;
  /** true when the deep link timed out and we show the store fallback */
  showStoreFallback = false;

  private readonly PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=com.entrenos.app';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.inviteCode = this.route.snapshot.paramMap.get('inviteCode') || '';
    this.detectDevice();
    this.validateCode();

    if (!this.invalidCode && this.isMobile && this.inviteCode) {
      this.openApp();
    }
  }

  // ── Validation ──────────────────────────────────────────────────────
  private validateCode() {
    if (!this.inviteCode) {
      this.invalidCode = true;
      this.errorMessage = 'El enlace no contiene un código de invitación válido.';
      return;
    }

    // Code must be 6 alphanumeric characters
    const validPattern = /^[A-Za-z0-9]{6}$/;
    if (!validPattern.test(this.inviteCode)) {
      this.invalidCode = true;
      this.errorMessage = 'El código de invitación no tiene un formato válido. Debe ser de 6 caracteres alfanuméricos.';
      return;
    }

    this.invalidCode = false;
    this.errorMessage = '';
  }

  // ── Device detection ────────────────────────────────────────────────
  detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    this.isMobile = /android|ipad|iphone|ipod/i.test(userAgent);
  }

  // ── Open native app with fallback to Play Store ─────────────────────
  openApp() {
    if (!this.inviteCode || this.invalidCode) return;

    this.openingApp = true;
    this.showStoreFallback = false;

    const deepLinkUrl = `entrenos://join-group/${this.inviteCode}`;

    // Record the time so we can detect if the deep link actually opened
    const start = Date.now();

    window.location.href = deepLinkUrl;

    // If the app is installed, the browser loses focus almost immediately.
    // If after ~1.5s we're still here, the app isn't installed → show fallback.
    setTimeout(() => {
      // If more than 2s passed the page was probably hidden (app opened)
      if (Date.now() - start < 2000) {
        this.openingApp = false;
        this.showStoreFallback = true;
      }
    }, 1500);
  }

  goToStore() {
    window.open(this.PLAY_STORE_URL, '_blank');
  }

  // ── Copy code to clipboard ─────────────────────────────────────────
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
