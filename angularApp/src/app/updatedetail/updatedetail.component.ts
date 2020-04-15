import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-updatedetail',
  templateUrl: './updatedetail.component.html',
  styleUrls: ['./updatedetail.component.css']
})
export class UpdatedetailComponent implements OnInit {
  id: number;
  details: User;

  constructor(private route: ActivatedRoute, private router: Router,
              private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.details = new User();

    // tslint:disable-next-line: no-string-literal
    this.id = this.route.snapshot.params['id'];

    this.httpClientService.getDetails(this.id)
      .subscribe(data => {
        console.log(data);
        this.details = data;
      }, error => console.log(error));
  }

  updateIt() {
    this.httpClientService.updateDetails(this.id, this.details)
      .subscribe(data => console.log(data), error => console.log(error));
    this.details = new User();
    this.gotoList();
  }

  onSubmit() {
    this.updateIt();
  }

  gotoList() {
    this.router.navigate(['/viewDetails']);
  }
}
