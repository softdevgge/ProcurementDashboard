import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { TemplateEngagementCountChartComponent } from './template-engagement-count-chart.component';

describe('TemplateEngagementCountChartComponent', () => {
  let component: TemplateEngagementCountChartComponent;
  let fixture: ComponentFixture<TemplateEngagementCountChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEngagementCountChartComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEngagementCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
