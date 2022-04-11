import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  message ='This is my HOME component';

  product = 'Lenova Laptop..';

  products = [{

        name : 'Pen Drive',
        price : 650,
        brand : 'SamSung'
       },
       {
        name : 'Wireless mouse',
        price : 250,
        brand : 'HP'
       },
       {
        name : '14\' Laptop',
        price : 22250,
        brand : 'HCL'
       }
       
  ];
  
  enabled=false;
  updateProduct()
  {
   console.log ('Update Product function is called')
  }
  getResponse()
  {
    return 'Function is called';
  }
  
  enableButton()
  {
    this.enabled=!this.enabled;
  }

fname='';
lname='';
fullname='';
age=0;

checkUser()
{
  var res;
  res=this.fname+this.lname;
  // if (this.age>=18)
  //    this.fullname=this.fullname + " is eligible"
  // else
  //   this.fullname=this.fullname + " is not eligible"  

if (this.age>=18)
    res=res + " is eligible"
else
    res=res + " is not eligible"

this.fullname=res;
return res;  
}


dynamicBackground='';
showRed()
{
this.dynamicBackground='redTheme';
}
showGreen()
{
this.dynamicBackground='greenTheme';
}

// Describing user details



  ngOnInit(): void {
  }

}

