import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  currentYear = new Date().getFullYear();
  isMenuOpen = false;

  features = [
    { 
      title: 'Cuentas Claras', 
      description: 'Visualiza balances en tiempo real para saber quién debe dinero.',
      icon: '📊' 
    },
    { 
      title: 'Multigrupo', 
      description: 'Gestiona diferentes presupuestos (Hogar, Vacaciones, Salidas) en una sola app.',
      icon: '🏘️' 
    },
    { 
      title: 'Funcionamiento Offline', 
      description: 'No dependas de internet para registrar tus movimientos.',
      icon: '📡' 
    },
    { 
      title: 'Sincronización en la Nube', 
      description: 'Todos los miembros ven los mismos datos actualizados al instante.',
      icon: '☁️' 
    },
    { 
      title: 'Exportación de Datos', 
      description: 'Genera reportes en PDF para archivo o revisión.',
      icon: '📄' 
    },
    { 
      title: 'Acceso Simple', 
      description: 'Ingreso rápido con Google, Apple o Correo Electrónico.',
      icon: '🔐' 
    },
    { 
      title: 'Liquidación Simplificada', 
      description: 'Algoritmo que simplifica las deudas cruzadas entre miembros.',
      icon: '💸' 
    }
  ];

  faqs = [
    {
      question: '¿Necesito internet para usar EntreNos?',
      answer: 'No es obligatorio. Puedes registrar gastos en "Modo Offline" y la aplicación guardará los datos en tu dispositivo. En cuanto recuperes la conexión, todo se subirá a la nube automáticamente.'
    },
    {
      question: '¿Puedo usar la app solo o es solo para grupos?',
      answer: 'Puedes usarla individualmente para llevar tus propios gastos personales creando un presupuesto donde (solo estés tú), pero su mayor potencial está en compartir gastos con otros.'
    },
    {
      question: '¿Cómo invito a alguien a mi presupuesto?',
      answer: 'Dentro de tu presupuesto, ve a la sección de "Miembros" y selecciona "Invitar". Se generará un código o enlace que puedes enviar por WhatsApp o correo.'
    },
    {
      question: '¿Qué pasa si me equivoco al cargar un gasto?',
      answer: 'Puedes editarlo o eliminarlo en cualquier momento si eres el creador del gasto o el administrador del grupo. El balance se recalculará automáticamente.'
    },
    {
      question: '¿Es seguro ingresar mis gastos aquí?',
      answer: 'Sí. EntreNos no se conecta con tus cuentas bancarias reales. Solo registra la información que tú escribes manualmente para ayudarte a organizar tus cuentas.'
    },
    {
      question: '¿Cómo exporto mis gastos?',
      answer: 'En la vista de tu presupuesto, busca la opción "Exportar" para generar un archivo PDF con el detalle de todos los movimientos del periodo.'
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showPrivacy = false;

  togglePrivacy() {
    this.showPrivacy = !this.showPrivacy;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
