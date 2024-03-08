import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { OfficeEngagementsChartComponent } from './office-engagement-chart.component';

describe('OfficeEngagementsChartComponent', () => {
  let component: OfficeEngagementsChartComponent;
  let fixture: ComponentFixture<OfficeEngagementsChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeEngagementsChartComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeEngagementsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
