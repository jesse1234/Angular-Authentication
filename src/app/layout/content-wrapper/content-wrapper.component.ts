import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Chart, registerables } from 'chart.js';
import { HttpClient } from '@angular/common/http';
Chart.register(...registerables);

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrl: './content-wrapper.component.css'
})
export class ContentWrapperComponent implements OnInit{
  userCount: number = 0;
  inactiveUserCount: number = 0;
  branchCount: number = 0;
  groupCount: number = 0;

  userCreationData: any[] = [];

  constructor(private service: UsersService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getActiveUserCount();
    this.getUserGroupCount();
    this.getBranchCount();
    this.getInactiveUserCount();
    this.fetchUserCreationData();
    this.RenderChart();
  }

  getActiveUserCount(): void {
    this.service.getAllUsers().subscribe((response: any) => {
      console.log(response);
      if (response.code === 200 && response.users) {
        const allUsers = response.users;
        const activeUsers = allUsers.filter((user: any) => user.status == 1);
        this.userCount = activeUsers.length;
      } else {
        console.error("Failed to retrieve users from the response");
      }
    }, (error) => {
      console.error("Failed to fetch user count");
    });
  }
  
  getInactiveUserCount(): void {
    this.service.getAllUsers().subscribe((response: any) => {
      console.log(response);
      if (response.code === 200 && response.users) {
        const allUsers = response.users;
        const activeUsers = allUsers.filter((user: any) => user.status == 0);
        this.inactiveUserCount = activeUsers.length;
      } else {
        console.error("Failed to retrieve users from the response");
      }
    }, (error) => {
      console.error("Failed to fetch user count");
    });
  }

  getUserGroupCount(): void {
    this.service.getAllUserGroups().subscribe((response: any) => {
      console.log(response);
      if(response.code == 200 && response.user_group_masters) {
        this.groupCount = response.user_group_masters.length;
      } else {
        console.error("Failed to retrieve user group masters");
      }
    }, (error) => {
      console.error("Failed to fetch user group count");
    })
  }

  getBranchCount() {
    this.httpClient.get<any>('http://localhost:8080/bank-branch').subscribe((response: any) => {
      console.log(response);
      if(response.code == 200 && response.branches) {
        this.branchCount = response.branches.length;
      } else {
        console.error("Failed to retrieve bank branches");
      }
    }, (error) => {
      console.error("Failed to retrieve branch count")
    })
  }

  fetchUserCreationData():void {
    this.service.getAllUsers().subscribe((response: any) => {
      if(response.code == 200 && response.users) {
        this.userCreationData = response.users.map((user: any) => ({
          createdAt: user.created_at,
          userId: user.id
        }));
      } else {
        console.error("Failed to fetch user creation data");
      }
    }, (error) => {
      console.error("Failed to fetch user creation data");
    });
  }

  RenderChart(): void{
    console.log('hello')
    const ctx = document.getElementById('myChart')
    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: this.userCreationData.map((data) => data.createdAt),
        datasets: [{
          label: 'No. of users created',
          data: this.userCreationData.map(() => 1),
          backgroundColor: 'rgba(54,162,235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Users Created'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date of Creation'
            }
          }
        }
      }
    })
  }
}
