import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-getdetail',
  templateUrl: './getdetail.component.html',
  styleUrls: ['./getdetail.component.css']
})
export class GetdetailComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  id: number;
  details: User;
  constructor(private route: ActivatedRoute, private router: Router,
              private httpClientService: HttpClientService) { }

  ngOnInit() { this.reloadData();
 }

  reloadData() {
    this.details = new User();

    // tslint:disable-next-line: no-string-literal
    this.id = this.route.snapshot.params['id'];

    this.httpClientService.getDetails(this.id)
      .subscribe(data => {
        console.log(data);
        this.details = data;
      }, error => console.log(error));
      // this.details =  this.httpClientService.getDetails(this.id);
  }

  getDetail(id: number) {
    this.httpClientService.getDetails(this.id).subscribe(data => {
      console.log(data);
      this.details = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['viewDetails']);
  }
}
