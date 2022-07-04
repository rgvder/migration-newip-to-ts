import AppController from "../controller/controller";
import { AppView } from "../view/appView";
import { ArticleData, Nullable, SourcesData, SourcesItem } from "../base/base";

class App {
  public controller: AppController;
  public view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public filterSources(value: string): SourcesItem[] {
    return this.controller.sources.filter((item: SourcesItem) => item.name.toLowerCase().includes(value.toLowerCase()));
  }

  public start() {
    const filterInput: Nullable<HTMLInputElement> = document.querySelector(".filter__input");
    document
      ?.querySelector(".sources")
      ?.addEventListener("click", (e: Event) => this.controller.getNews(e, (data: ArticleData) => this.view.drawNews(data)));
    this.controller.getSources((data: SourcesData) => this.view.drawSources(data?.sources));

    filterInput
      ?.addEventListener("input", (e: Event) => {
        const input: Nullable<HTMLInputElement> = e.target as HTMLInputElement;

        const sources: SourcesItem[] = input.value.length > 1 ? this.filterSources(input.value) : this.controller.sources;

        this.view.drawSources(sources);
      });

    document
      ?.querySelector<HTMLElement>(".filter__button")
      ?.addEventListener("click", () => this.view.drawSources(this.controller.sources));
  }
}

export default App;
