import News from './news/news';
import Sources from './sources/sources';
import {ArticleData, ArticleItem, SourcesData, SourcesItem} from "../base/base";

export class AppView {
    public news: News;
    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticleData) {
        const values: ArticleItem[] = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData) {
        const values: SourcesItem[] = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
