import { Component ,OnInit} from '@angular/core';
import { AccountService } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

accounts:{name:string,status:string}[] = [];

constructor(private accountsService:AccountService){}

ngOnInit(){
  this.accounts = this.accountsService.accounts;
}
}
