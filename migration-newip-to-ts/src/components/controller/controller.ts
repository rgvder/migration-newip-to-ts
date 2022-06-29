import AppLoader from './appLoader';
import { ArticleData, Endpoints, SourcesData } from "../base/base";

class AppController extends AppLoader {
    public getSources(callback: (data: SourcesData) => void): void {
        super.getResp<SourcesData>(
            {
                endpoint: Endpoints.Sources,
                callback
            },

        );
    }

    public getNews(e: Event, callback: (data: ArticleData) => void): void {
        let target: HTMLElement | null = e.target as HTMLElement;
        const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<ArticleData>(
                        {
                            endpoint: Endpoints.Everything,
                            options: {
                                sources: sourceId,
                            },
                            callback
                        },

                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
