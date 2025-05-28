import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-tira_estira',
  templateUrl: './tira_estira.component.html',
  styleUrls: ['./tira_estira.component.css']
})
export class Tira_estiraComponent implements AfterViewInit{
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  powerPercent = 0;

  private ctx!: CanvasRenderingContext2D;
  private W!: number;
  private H!: number;
  private anchorA!: { x: number; y: number; };
  private anchorB!: { x: number; y: number; };
  private knot!: { x: number; y: number; };
  private target!: { x: number; y: number; r: number; };
  private projectile = { pos: { x: -100, y: -100 }, vel: { x: 0, y: 0 }, active: false };
  private maxStretch = 150;
  private k = 0.2;
  private dragging = false;
  private animationId!: number;
  hideInstructions = false;
hasWon = false;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.drawLoop();
  }

  @HostListener('window:resize')
  resize() {
    const canvas = this.canvasRef.nativeElement;
    this.W = canvas.width = window.innerWidth;
    this.H = canvas.height = window.innerHeight - 50;
    this.anchorA = { x: this.W / 2 - 100, y: this.H / 2 };
    this.anchorB = { x: this.W / 2 + 100, y: this.H / 2 };
    this.knot = { x: (this.anchorA.x + this.anchorB.x) / 2, y: this.anchorA.y };
    this.target = { x: this.W - 100, y: this.H / 2, r: 20 };
    this.projectile.active = false;
  }

  @HostListener('mousedown', ['$event'])
  onDown(e: MouseEvent) {
    const mx = e.clientX, my = e.clientY - 50;
    if (Math.hypot(mx - this.knot.x, my - this.knot.y) < 15) {
      this.dragging = true;
    }
  }

  @HostListener('mouseup')
  onUp() {
    if (this.dragging) {
      const cx = (this.anchorA.x + this.anchorB.x) / 2, cy = this.anchorA.y;
      const dx = cx - this.knot.x, dy = cy - this.knot.y;
      this.projectile.pos = { x: cx, y: cy };
      this.projectile.vel = { x: dx * this.k, y: dy * this.k };
      this.projectile.active = true;
      this.dragging = false;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent) {
    if (!this.dragging) return;
    const mx = e.clientX, my = e.clientY - 50;
    this.knot.x = Math.min(this.anchorB.x + this.maxStretch, Math.max(this.anchorA.x - this.maxStretch, mx));
    this.knot.y = Math.min(this.anchorA.y + this.maxStretch, Math.max(this.anchorA.y - this.maxStretch, my));
  }

  reset() {
  this.knot.x = (this.anchorA.x + this.anchorB.x) / 2;
  this.knot.y = this.anchorA.y;
  this.projectile.active = false;
  this.powerPercent = 0;
  this.hasWon = false;
  this.drawLoop();
}


  private drawLoop() {
    this.animationId = requestAnimationFrame(() => this.drawLoop());
    this.ctx.clearRect(0, 0, this.W, this.H);

    // Dibuja liga
    this.ctx.strokeStyle = '#444'; this.ctx.lineWidth = 8;
    this.ctx.beginPath();
    this.ctx.moveTo(this.anchorA.x, this.anchorA.y);
    this.ctx.lineTo(this.knot.x, this.knot.y);
    this.ctx.lineTo(this.anchorB.x, this.anchorB.y);
    this.ctx.stroke();

    // Nudo verde
    this.ctx.fillStyle = '#00a86b';
    this.ctx.beginPath();
    this.ctx.arc(this.knot.x, this.knot.y, 15, 0, Math.PI * 2);
    this.ctx.fill();

    // Diana roja
    this.ctx.fillStyle = '#e74c3c';
    this.ctx.beginPath();
    this.ctx.arc(this.target.x, this.target.y, this.target.r, 0, Math.PI * 2);
    this.ctx.fill();

    // Proyectil
    if (this.projectile.active) {
      this.projectile.pos.x += this.projectile.vel.x;
      this.projectile.pos.y += this.projectile.vel.y;
      this.projectile.vel.y += 0.5; // gravedad
      this.ctx.fillStyle = '#333';
      this.ctx.beginPath();
      this.ctx.arc(this.projectile.pos.x, this.projectile.pos.y, 10, 0, Math.PI * 2);
      this.ctx.fill();
      // Colisión
      const dx = this.projectile.pos.x - this.target.x;
      const dy = this.projectile.pos.y - this.target.y;
      if (Math.hypot(dx, dy) < this.target.r + 10) {
        this.projectile.active = false;
        this.hasWon = true;
        cancelAnimationFrame(this.animationId);
      }

    }

    
    // Barra de poder
    const cx = (this.anchorA.x + this.anchorB.x) / 2, cy = this.anchorA.y;
    const stretch = Math.hypot(this.knot.x - cx, this.knot.y - cy);
    this.powerPercent = Math.min(100, Math.max(0, (stretch / this.maxStretch) * 100));
  }
}
