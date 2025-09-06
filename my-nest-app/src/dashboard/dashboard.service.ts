import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getDashboardData() {
    // You can replace this with actual database queries
    return {
      summary: [96, 87, 64, 52],
      benefitsVerificationChart: [
        { name: 'Series A', data: [44, 120, 41, 64, 150, 80] },
        { name: 'Series B', data: [53, 95, 33, 52, 140, 100] },
        { name: 'Series C', data: [72, 110, 85, 130, 90, 150] },
        { name: 'Series D', data: [20, 45, 70, 80, 60, 95] },
      ],
      productOrderAnalysis: [120, 95, 150, 80],
      productOrderByUnits: [
        {
          name: 'Series A',
          data: [44, 120, 41, 64, 150, 80, 95, 110, 130, 160, 140, 100],
        },
        {
          name: 'Series B',
          data: [53, 95, 33, 52, 140, 100, 120, 85, 140, 180, 170, 150],
        },
        {
          name: 'Series C',
          data: [72, 110, 85, 130, 90, 150, 160, 190, 170, 200, 210, 180],
        },
        {
          name: 'Series D',
          data: [20, 45, 70, 80, 60, 95, 100, 120, 90, 140, 130, 110],
        },
      ],
    };
  }
}
