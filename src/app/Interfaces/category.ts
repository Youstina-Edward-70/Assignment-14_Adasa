export type catType = 'الكل' | 'إضاءة' | 'بورتريه' | 'مناظر طبيعية' | 'تقنيات' | 'معدات';
export interface Category {
  "name": catType,
  "count": number,
  "color": string,
  "icon": string
}
