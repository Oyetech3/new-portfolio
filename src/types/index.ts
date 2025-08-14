export interface Subscriber {
    id: string;
    email: string;
    isActive: boolean;
    subscribedAt: Date;
    unsubscribeToken: string;
  }
  
  export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
  }
  
  export interface SubscriptionRequest {
    email: string;
  }
  
  export interface EmailTemplateProps {
    email: string;
    unsubscribeUrl?: string;
  }