import './news.css';
import { ArticleItem, Nullable } from "../../base/base";
import { setElementParam } from "../../base/functions";

class News {
    draw(data: ArticleItem[]) {
        const news: ArticleItem[] = data.length >= 10 ? data.filter((_item: ArticleItem, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: Nullable<HTMLTemplateElement> = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item: ArticleItem, idx: number) => {
                const newsClone: Nullable<HTMLTemplateElement> = newsItemTemp?.content?.cloneNode(true) as HTMLTemplateElement;
                const newsMetaPhoto: Nullable<HTMLElement> = newsClone.querySelector<HTMLElement>('.news__meta-photo');

          if (idx % 2) {
                  newsClone.querySelector<HTMLElement>('.news__item')?.classList.add('alt');
                }

                if (newsMetaPhoto) {
                  newsMetaPhoto.style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                  })`;
                }

                setElementParam('.news__meta-author', 'textContent', item.author || item.source.name, newsClone);

                setElementParam(
                  '.news__meta-date',
                  'textContent',
                  item.publishedAt.slice(0, 10).split('-').reverse().join('-'),
                  newsClone
                );

                setElementParam('.news__description-title', 'textContent', item.title, newsClone);

                setElementParam('.news__description-source', 'textContent', item.source.name, newsClone);

                setElementParam('.news__description-content', 'textContent', item.description, newsClone);

                newsClone.querySelector<HTMLElement>('.news__read-more a')?.setAttribute('href', item.url);

                fragment.append(newsClone);

        });

        setElementParam('.news', 'innerHTML', '');

        document.querySelector<HTMLElement>('.news')?.appendChild(fragment);
    }
}

export default News;
