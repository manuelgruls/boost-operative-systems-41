
import { Settings, BarChart, Factory, Bot, Globe } from "lucide-react";
import { Service } from "@/types/Service";

export const servicesData: Service[] = [
  {
    id: 'automation',
    icon: <Settings className="w-8 h-8" />,
    title: 'Process Automation',
    description: 'Automate repetitive workflows and boost your internal efficiency.',
    useCases: [
      'Automated inventory management and stock alerts',
      'Order processing workflows from quote to delivery',
      'Quality control checklists and inspection tracking',
      'Employee onboarding and training workflows',
      'Supplier evaluation and procurement processes',
      'Customer service ticket routing and resolution',
      'Financial approval workflows and budget tracking'
    ],
    benefits: [
      'Reduce manual errors by 95%',
      'Save 20+ hours per week',
      'Improve process consistency',
      'Increase operational efficiency by 40%',
      'Enhance compliance and audit trails'
    ]
  },
  {
    id: 'analytics',
    icon: <BarChart className="w-8 h-8" />,
    title: 'Dashboards & Analytics',
    description: 'Understand your data in real time to make faster decisions.',
    useCases: [
      'Real-time production monitoring and alerts',
      'Performance KPI tracking and reporting',
      'Predictive maintenance alerts and scheduling',
      'Sales pipeline analysis and forecasting',
      'Customer behavior tracking and segmentation',
      'Financial performance monitoring and budgeting',
      'Supply chain visibility and optimization'
    ],
    benefits: [
      'Make data-driven decisions faster',
      'Identify bottlenecks instantly',
      'Optimize resource allocation',
      'Increase revenue by 25% through insights',
      'Reduce downtime with predictive analytics'
    ]
  },
  {
    id: 'erp',
    icon: <Factory className="w-8 h-8" />,
    title: 'ERP Custom Modules',
    description: 'Integrate and control your production flow with smart tools.',
    useCases: [
      'Custom production planning and scheduling',
      'Supply chain integration and management',
      'Multi-location inventory synchronization',
      'Customer relationship management integration',
      'Financial accounting and reporting modules',
      'Human resources and payroll management',
      'Project management and resource planning'
    ],
    benefits: [
      'Centralize all operations in one platform',
      'Improve coordination across teams',
      'Scale operations efficiently',
      'Reduce operational costs by 30%',
      'Enhance data accuracy and consistency'
    ]
  },
  {
    id: 'ai',
    icon: <Bot className="w-8 h-8" />,
    title: 'AI Optimization',
    description: 'Use AI to forecast, simulate, and reduce costs.',
    useCases: [
      'Demand forecasting and inventory optimization',
      'Route optimization for delivery and logistics',
      'Predictive quality control and defect detection',
      'Dynamic pricing optimization and strategy',
      'Customer churn prediction and retention',
      'Fraud detection and risk assessment',
      'Energy consumption optimization and monitoring'
    ],
    benefits: [
      'Reduce costs by 15-30%',
      'Improve forecast accuracy by 80%',
      'Prevent quality issues before they occur',
      'Increase customer satisfaction by 35%',
      'Optimize decision-making with AI insights'
    ]
  },
  {
    id: 'integration',
    icon: <Globe className="w-8 h-8" />,
    title: 'Web & System Integrations',
    description: 'Connect tools and centralize your operations in the cloud.',
    useCases: [
      'API integrations with existing business tools',
      'Cloud migration and modernization solutions',
      'Multi-platform data synchronization',
      'E-commerce platform integrations',
      'Payment gateway and financial system connections',
      'CRM and marketing automation integrations',
      'Social media and communication platform links'
    ],
    benefits: [
      'Eliminate data silos completely',
      'Access systems from anywhere',
      'Reduce IT maintenance costs by 50%',
      'Improve data flow and accuracy',
      'Enable seamless team collaboration'
    ]
  }
];
