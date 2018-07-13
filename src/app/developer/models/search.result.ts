export interface SearchResult {
    page: number;
    total_results: number;
    total_pages: number;
    data: Array<any>;
    meta: {
      current_page: number,
      total: number,
      from: number,
      to: number,
      last_page: number
    }
  }