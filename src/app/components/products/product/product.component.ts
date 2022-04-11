import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() singleproduct : any = {}

  currentStyles = {}
  customClasses = {}

  promoted=true
  showextended = false
  active=true
  mystyle='blue'

  constructor() { }

  ngOnInit(): void {
this.setCurrentStyles()
this.setCustomClasses ()
      }

      setShowExtended()
      {
        this.showextended = !this.showextended
        this.setCurrentStyles()
        console.log(this.showextended)
      }

      setCurrentStyles()
      {
        console.log(this.showextended)
        this.currentStyles=
        {
          'padding-top' : this.showextended ? '0' : '60px',
          'color' : this.showextended ? 'red': 'blue',
          'cursor' : 'pointer'
        }

        setCustomClasses ()
        {
          this.customClasses =
          {
            "myBackground" : this.promoted ? 'green' : 'red',
            "border-success" : this.active
          }
        }
      }


}
