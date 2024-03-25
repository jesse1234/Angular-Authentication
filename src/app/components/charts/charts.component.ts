import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'; 
import { UsersService } from '../../service/users.service';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent implements OnInit{
  userCreationData: any[] = [];

  constructor(private service: UsersService) {}

  ngOnInit(): void{
    this.fetchUserCreationData();
    this.RenderChart();
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
