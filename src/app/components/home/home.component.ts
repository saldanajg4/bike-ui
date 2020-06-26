import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade'
  ];
  bikeform: FormGroup;
  validMessage: string = "";

  constructor(private bikeSvc: BikeService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl(),
      feedback: new FormControl()
    })
  }

  submitRegistration(){
    if(this.bikeform.valid){
      this.bikeSvc.createBikeRegistration(this.bikeform.value).subscribe(
        data => {
          this.bikeform.reset();
          this.validMessage = "Submitted successfully";
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } 
    else{
      this.validMessage = "Please fill out the form before submitting.";
      // this.msgs = [];
      // this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
      this.messageService.add({severity:'error', summary:'Form Error ', detail:'Fill out all fields.'});
    }
    
  }

}
