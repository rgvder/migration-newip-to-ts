import News from "./news/news";
import Sources from "./sources/sources";
import { ArticleData, ArticleItem, SourcesItem } from "../base/base";

export class AppView {
  public news: News;
  public sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: ArticleData) {
    const values: ArticleItem[] = data?.articles ?? [];
    this.news.draw(values);
  }

  public drawSources(values: SourcesItem[] = []) {
    this.sources.draw(values);
  }
}

export default AppView;
