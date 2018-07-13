export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number,
  from?: number,
  to?: number,
  total?: number
}