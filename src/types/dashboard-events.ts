export interface DashboardEvents {
  id: string | null,
  title: string;
  content: string;
  orderView: number;
  attachment: string | null;
  validFrom: Date | null;
  validTo: Date | null;
  type: DashboardItemType;
}

export enum DashboardItemType {
  News = "NEWS",
  Faq = "FAQ",
  Forms = "FORMS",
}
