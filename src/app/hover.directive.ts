import {Directive, ElementRef, OnInit, Inject, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

 @Input() appHover:string = "red";

  // @ts-ignore
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor',this.appHover);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
  }
  @HostListener('mouseenter') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }
}
