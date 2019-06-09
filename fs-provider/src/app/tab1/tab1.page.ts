import { Component, OnInit } from '@angular/core';
import { Provider } from '../models/provider.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public provider: Provider = new Provider();

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

ngOnInit() {
  const providerId = localStorage.getItem("provider_id");
  this.http.get(`http://localhost:3000/providers/${providerId}`).subscribe((response : Provider) => {
    this.provider.name = response[0].name;
    this.provider.email = response[0].email;
    this.provider.id = response[0].id;
  })
}
}
