import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sync';
  constructor(
  ) { }
  ngOnInit() {
    this.getMockDataFuc()
  }

  async getMockDataFuc() {
    const result = await this.getPromiseData();
    console.log('打印result数据  ' + result,1);
    if (result) {
      for (let i = 0; i < 2; i++) {
        const result1 = await this.getPromiseData();
        console.log(result1,i+2);
      }
      const result1 = await this.getPromiseData();
      console.log(result1,4);
    }
    console.log('最后打印的');
  }
   
  getPromiseData () {
    const result = 5
    return result;
  }
}
