import { Directive,Input,HostBinding,ElementRef,HostListener, OnInit, Renderer2,SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appGrade]'
})
export class GradeDirective implements OnInit
 {

  @Input('appGrade') stock:number;

  
  title:string;
  constructor(private e:ElementRef,private r:Renderer2)
   {
  
   }
    ngOnInit(){}

  @HostBinding(`style.backgroundColor`) color='';
  

 
   ngOnChanges(changes: SimpleChanges): void {

  if(this.stock<=10  )
  {
  
    this.color="red";
    this.title="C"
  
  }
  else if((this.stock>=10 && this.stock<20))
  {
    this.color="yellow";
    this.title="B";
    
  }
  
  else
  {
    this.color="green";
    this.title="A";

  }
   //this.r.setStyle(this.e.nativeElement,'background-color',this.color);
    
   this.e.nativeElement.innerHTML=this.title;
   }
  
 
  }


