import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { 

  constructor() { }


  users = [
  
    { firstname : 'Arul',
      lastname : 'Seeli',
      address : {
        door : '27, North Street',
        place : 'Subramaniapuram, Sawyerpuram',
        city : 'Tuticorin'
      },
      image:'https://www.google.com/search?q=image&rlz=1C1VDKB_enIN988IN988&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253Bn5hAWsQ-sgKo_M%252C-UStXW0dQEx4SM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253B0DzWhtJoQ1KWgM%252CcIQ7wXCEtJiOWM%252C_%253BuD-WKhoPb7taoM%252CVjlu6XxRvRb4lM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kSZM0VD-o5J_jMdi02WEwmt4bNYYw&sa=X&ved=2ahUKEwjoy7aN4YP3AhV5IrkGHblUC5cQ9QF6BAgCEAE#imgrc=gxFxsvFBmxeZ9M',
      mobile : 9898767898
    },
  
    { firstname : 'Michael',
      lastname : 'Churchill',
      age : 48,
      address : {
        door : '30P/4',
        place : 'III street, Annanagar',
        city : 'Tuticorin'
      },
      image:'https://www.google.com/search?q=image&rlz=1C1VDKB_enIN988IN988&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253Bn5hAWsQ-sgKo_M%252C-UStXW0dQEx4SM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253B0DzWhtJoQ1KWgM%252CcIQ7wXCEtJiOWM%252C_%253BuD-WKhoPb7taoM%252CVjlu6XxRvRb4lM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kSZM0VD-o5J_jMdi02WEwmt4bNYYw&sa=X&ved=2ahUKEwjoy7aN4YP3AhV5IrkGHblUC5cQ9QF6BAgrEAE#imgrc=2DNOEjVi-CBaYM',
      mobile : 9898767898
    },
  
    { firstname : 'Eric',
      lastname : 'Erin',
      age : 19,
      address : {
        door : '30P/4',
        place : 'Annanagar',
        city : 'Tuticorin'
      },
      image:'https://www.google.com/search?q=image&rlz=1C1VDKB_enIN988IN988&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253Bn5hAWsQ-sgKo_M%252C-UStXW0dQEx4SM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253B0DzWhtJoQ1KWgM%252CcIQ7wXCEtJiOWM%252C_%253BuD-WKhoPb7taoM%252CVjlu6XxRvRb4lM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kSZM0VD-o5J_jMdi02WEwmt4bNYYw&sa=X&ved=2ahUKEwjoy7aN4YP3AhV5IrkGHblUC5cQ9QF6BAgmEAE#imgrc=DH7p1w2o_fIU8M',
      mobile : 9090909098
    }
  
  ]

  ngOnInit(): void {
  }
}
