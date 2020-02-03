import { Directive,HostBinding,ElementRef,SimpleChanges,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appInputDirective]'
})
export class InputDirectiveDirective {

  @Input('appInputDirective') stock:number;
  constructor() { }
  @HostBinding(`style.border-color`) bcolor='';
  ngOnChanges(changes: SimpleChanges): void {

    if(this.stock<=10  )
    {
    
      this.bcolor="red";
      
    
    }
    else if((this.stock>=10 && this.stock<20))
    {
      this.bcolor="yellow";
    
      
    }
    
    else
    {
      this.bcolor="green";
  
  
    }
}
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.OnLoad()
}
@HostListener('window:resize', []) OnLoad()
   {
      console.log("input load");
   }
}