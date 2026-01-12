import { Injectable } from '@angular/core';
import { auth } from '../firebase.config';
import { deleteUser, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async deleteAccount(): Promise<void> {
    const user = auth.currentUser;
    if (user) {
      try {
        await deleteUser(user);
        console.log('User deleted successfully');
      } catch (error: any) {
        console.error('Error deleting user:', error);
        if (error.code === 'auth/requires-recent-login') {
          throw new Error('Esta operación es sensible y requiere una autenticación reciente. Por favor, vuelve a iniciar sesión e intenta de nuevo.');
        }
        throw error;
      }
    } else {
      throw new Error('No hay un usuario autenticado.');
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
  
  get currentUser() {
    return auth.currentUser;
  }
}
