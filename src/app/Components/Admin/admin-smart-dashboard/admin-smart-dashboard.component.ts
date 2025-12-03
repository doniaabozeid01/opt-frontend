import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-smart-dashboard',
  templateUrl: './admin-smart-dashboard.component.html',
  styleUrls: ['./admin-smart-dashboard.component.scss'],
})
export class AdminSmartDashboardComponent {

  /**
   *
   */
  constructor(private router:Router) {}
  tabs = [
    {
      id: 1,
      title: 'الذكاء الاصطناعي',
      icon: 'fa-brain', // FontAwesome icon لو حبيتي
      route: 'ai-dashboard',
      active: false,
    },
    {
      id: 2,
      title: 'التنبيهات الذكية',
      icon: 'fa-bell',
      route: 'smart-alerts',
      active: false,
    },
    {
      id: 3,
      title: 'لوحة المعلومات',
      icon: 'fa-table-columns',
      route: 'info-board',
      active: false,
    },
    {
      id: 4,
      title: 'إدارة المستخدمين',
      icon: 'fa-users',
      route: 'users',
      active: false,
    },
    {
      id: 5,
      title: 'المحاسبة',
      icon: 'fa-chart-line',
      route: 'accounting',
      active: false,
    },
    {
      id: 6,
      title: 'التنبؤات',
      icon: 'fa-chart-area',
      route: 'predictions',
      active: false,
    },
    {
      id: 7,
      title: 'إدارة الطلبات',
      icon: 'fa-list-check',
      route: 'orders',
      active: false,
    },
    {
      id: 8,
      title: 'إدارة المدارس',
      icon: 'fa-school',
      route: 'schools',
      active: false,
    },
    {
      id: 9,
      title: 'إدارة الموردين',
      icon: 'fa-truck',
      route: 'suppliers',
      active: false,
    },
    {
      id: 10,
      title: 'مقارنة العروض',
      icon: 'fa-balance-scale',
      route: 'offers-compare',
      active: false,
    },
    {
      id: 11,
      title: 'المرتجعات',
      icon: 'fa-box-open',
      route: 'returns',
      active: false,
    },
    {
      id: 12,
      title: 'المستودعات',
      icon: 'fa-warehouse',
      route: 'stores',
      active: false,
    },
    {
      id: 13,
      title: 'الخرائط',
      icon: 'fa-map',
      route: 'maps',
      active: false,
    },
    {
      id: 14,
      title: 'WhatsApp',
      icon: 'fa-whatsapp',
      route: 'whatsapp',
      active: false,
    },
    {
      id: 15,
      title: 'التقارير المالية',
      icon: 'fa-file-invoice',
      route: 'financial-reports',
      active: false,
    },
    {
      id: 16,
      title: 'سحب التقارير',
      icon: 'fa-download',
      route: 'reports-export',
      active: false,
    },
  ];

  setActiveTab(tab: any) {
    this.tabs.forEach((t) => (t.active = false));
    tab.active = true;

    // لو عايز يروح ل route
    this.router.navigate([`/admin/${tab.route}`]);
  }
}
