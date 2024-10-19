import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  currentIndex = 0;
  slider: HTMLElement | null = null;
  cards: NodeListOf<HTMLElement> | undefined;

  ngOnInit(): void {
    window.scrollTo(0, 0);
   }
   
  ngAfterViewInit() {
    this.slider = document.getElementById('slider');
    this.cards = document.querySelectorAll('.card');

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => this.moveToPrev());
      nextBtn.addEventListener('click', () => this.moveToNext());
    }
    this.updateSlider(this.currentIndex);
  }

  updateSlider(index: number) {
    if (this.slider) {
      const offset = -index * 20; // Desplazar el slider horizontalmente por cada tarjeta
      this.slider.style.transform = `translateX(${offset}%)`;
    }

    this.cards?.forEach(card => card.classList.remove('active'));
    this.cards?.[index]?.classList.add('active');
  }

  moveToPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlider(this.currentIndex);
    }
  }

  moveToNext() {
    if (this.cards && this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.updateSlider(this.currentIndex);
    }
  }
}
