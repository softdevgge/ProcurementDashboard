import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { TemplateEngagementAmountChartComponent } from './template-engagement-amount-chart.component';

describe('SalesTrafficChartComponent', () => {
  let component: TemplateEngagementAmountChartComponent;
  let fixture: ComponentFixture<TemplateEngagementAmountChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEngagementAmountChartComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEngagementAmountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
