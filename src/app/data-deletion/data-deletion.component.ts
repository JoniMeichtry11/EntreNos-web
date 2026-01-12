import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-data-deletion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './data-deletion.component.html',
})
export class DataDeletionComponent {
  isDeleting = false;
  error: string | null = null;
  success = false;

  constructor(private authService: AuthService, private router: Router) {}

  async onDeleteAccount() {
    if (!confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer y perderás todos tus datos.')) {
      return;
    }

    this.isDeleting = true;
    this.error = null;

    try {
      await this.authService.deleteAccount();
      this.success = true;
      // Redirect after a short delay
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    } catch (err: any) {
      this.error = err.message || 'Ocurrió un error al eliminar la cuenta.';
    } finally {
      this.isDeleting = false;
    }
  }
}
