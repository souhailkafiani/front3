import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
commandes:Array<Object>;
line_of_commandes:Array<Object> ;
names :Array<Object> ;
show:boolean =false;
  constructor(
    private http:HttpClient

  ) { 
  }
private  link = "http://127.0.0.1:8000";
  ngOnInit(): void {
    this.http.get(`${this.link}/api/all_commands`)
    .subscribe(
      data=>{this.commandes=data["data"];console.log(this.commandes);
    }
      
    )
    
    
   
  }
  line(id){
    this.http.get(`${this.link}/api/line_of_commandes/${id}`)
    .subscribe(
      data=>{this.line_of_commandes=data["data1"];
    this.names=data["data2"];

    })
        this.show=true;
  }
  remove_div(){
    this.show=false;
    this.line_of_commandes=[];

  }
  payer(id,i){
    this.commandes[i]["status"]="facture payée";

    this.http.get(`${this.link}/api/payer/${id}`)
    .subscribe(
      data=>{
        
      }
    );
  }


}
