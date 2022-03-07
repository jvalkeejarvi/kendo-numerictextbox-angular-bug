import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const container = $('#gridContainer');
    container.kendoGrid({
      filterable: true,
      dataSource: {
        data: [
          { value: 3 },
          { value: 4 },
          { value: 5 },
          { value: 6 },
        ],
        schema: {
          model: {
            fields: {
              value: { type: 'number' }
            }
          }
        },
      },
      columns: [
        { field: 'value' }
      ],
    })
  }
}
