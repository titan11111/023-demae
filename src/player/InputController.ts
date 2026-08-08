export class InputController {
  private readonly down = new Set<string>();
  private readonly pressed = new Set<string>();
  private readonly pointerCodes = new Map<number, string>();

  constructor() {
    window.addEventListener('keydown', (event) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(event.code)) event.preventDefault();
      if (!this.down.has(event.code)) this.pressed.add(event.code);
      this.down.add(event.code);
    });
    window.addEventListener('keyup', (event) => this.down.delete(event.code));
    window.addEventListener('blur', () => this.down.clear());
    document.addEventListener('pointerdown', (event) => {
      const button = (event.target as HTMLElement).closest<HTMLElement>('[data-input]');
      const code = button?.dataset.input;
      if (!button || !code) return;
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      this.pointerCodes.set(event.pointerId, code);
      this.down.add(code);
      this.pressed.add(code);
      button.classList.add('is-pressed');
    });
    const release = (event: PointerEvent) => {
      const code = this.pointerCodes.get(event.pointerId);
      if (!code) return;
      this.pointerCodes.delete(event.pointerId);
      if (![...this.pointerCodes.values()].includes(code)) this.down.delete(code);
      (event.target as HTMLElement).closest<HTMLElement>('[data-input]')?.classList.remove('is-pressed');
    };
    document.addEventListener('pointerup', release);
    document.addEventListener('pointercancel', release);
  }

  isDown(...codes: string[]): boolean { return codes.some((code) => this.down.has(code)); }
  consume(code: string): boolean {
    const result = this.pressed.has(code);
    this.pressed.delete(code);
    return result;
  }
}
