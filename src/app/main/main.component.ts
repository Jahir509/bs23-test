import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges{
  options: string[] = ['+PM', '+Developer', '+QA'];
  selectedOption: string = '';
  @Input() totalValue:any
  total:number = 0
  list:any[] = [];

  selectOption(option: string) {
    let employeeType = [
      {
        type: '+PM', status: false,
      },
      {
        type: '+Developer', status: false
      },
      {
        type:'+QA',status:false
      }
    ]
    this.selectedOption = option;
    employeeType[employeeType.findIndex(y=>y.type === option)].status = true;
    this.list.push(employeeType);
    switch (option){
      case '+PM':
        this.total += 300
        break
      case '+Developer':
        this.total += 1000
        break
      case '+QA':
        this.total += 500
        break
      default:
        break;
    }
  }

  ngOnChanges() {
    this.total = this.totalValue < 0 ? 0 : this.total;
    this.clear();
  }

  private clear() {
    this.list = []
  }
}
