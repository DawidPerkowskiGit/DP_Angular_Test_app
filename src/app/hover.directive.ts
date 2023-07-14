import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  @Input() color: string = 'red';



  constructor(private element: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2) {
    console.log(element.nativeElement);
    
   }

  ngOnInit(): void {
    this.element.nativeElement.style.color = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'magenta'
    );
  }

  @HostListener('mouseenter') onmousemove() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'lime'
    );
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'magenta'
    );
  }


}

