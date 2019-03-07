import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerInfo } from './serverInfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: Array<ServerInfo> = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(2017, 6, 1)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2017, 1, 1)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2017, 2, 1)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2017, 7, 1)
    }
  ];
  filteredStatus = '';

  time: Observable<Date> = new Observable((observer) => {
    setInterval(() => observer.next(new Date()), 1000);
  });

  stringToReverse = 'A string to reverse';
  sortByKeys: Array<String> = Object.keys(new ServerInfo());
  sortBy: String = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date()
    });
  }



}
