import { Author } from "./author";

export interface Post {
  "id": number,
  "slug": string,
  "title": string,
  "excerpt": string,
  "content": string,
  "category": ("إضاءة" | "بورتريه" | "مناظر طبيعية" | "تقنيات" | "معدات"),
  "author": Author,
  "image": string,
  "date": string,
  "readTime": string,
  "featured": boolean,
  "tags": string[]
}
