import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-adddetail',
  templateUrl: './adddetail.component.html',
  styleUrls: ['./adddetail.component.css']
})
export class AdddetailComponent implements OnInit {

  details: User = new User();
  submitted = false;

  constructor(private httpClientService: HttpClientService,
              private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.details = new User();
  }

  save() {
    this.httpClientService.createdetail(this.details)
      .subscribe(data => console.log(data), error => console.log(error));
    this.details = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    }

  gotoList() {
    this.router.navigate(['/viewDetails']);
  }
}
