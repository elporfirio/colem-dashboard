export interface Manga {
  id?: number;
  title: string;
  publishedAt: string;
  volume: number;
  price: number;
  isbn: string;
  series?: object;
  serie_id?: number;
}
