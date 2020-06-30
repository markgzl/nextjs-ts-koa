export interface Common {
	code: number;
  msg?: string
}

export interface NewsItem{
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  author?: string;
  source?: string;
  imgurl?: string
}
export interface NewsData{
  total: number;
  hasMore: Boolean;
  data: NewsItem[]
}

export interface NewsInterface extends Common {
	data: NewsData
}

