import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TestService} from "./service/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws-angular-learning';

  textTest = "Text";

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.retrieveText().subscribe(
      response => {
        console.log(response);
        this.textTest = response;
      }
    );
  }

}
