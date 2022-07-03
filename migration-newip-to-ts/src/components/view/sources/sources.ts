import './sources.css';
import { Nullable, SourcesItem } from "../../base/base";
import { setElementParam } from "../../base/functions";

class Sources {
    draw(data: SourcesItem[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: Nullable<HTMLTemplateElement> = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item: SourcesItem) => {
            const sourceClone: Nullable<HTMLTemplateElement> = sourceItemTemp?.content?.cloneNode(true) as HTMLTemplateElement;

            setElementParam('.source__item-name', 'textContent', item.name, sourceClone);

            sourceClone.querySelector<HTMLElement>('.source__item')?.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector<HTMLElement>('.sources')?.append(fragment);
    }
}

export default Sources;
