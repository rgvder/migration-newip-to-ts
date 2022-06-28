import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import {ArticleData, SourcesData} from "../base/base";

class App {
    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        document
            ?.querySelector('.sources')
            ?.addEventListener('click', (e: Event) => this.controller.getNews(e, (data: ArticleData) => this.view.drawNews(data)));
        this.controller.getSources((data: SourcesData) => this.view.drawSources(data));
    }
}

export default App;
