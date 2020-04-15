import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: Observable<User[]>;
  constructor(private httpClientService: HttpClientService,
              private router: Router) { }

  ngOnInit() { this.reloadData();
  }

  reloadData() {
    this.details =  this.httpClientService.getDetailsList();
  }

  deleteDetails(id: number) {
    this.httpClientService.deleteDetails(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  handleSuccessfulResponse(response: any) {
    this.details = response;
  }

  getUserDetail(id: number) {
    this.router.navigate(['getdetail', id]);
  }

  updateDetails(id: number) {
    this.router.navigate(['updatedetail', id]);
  }
}
