export interface Options {
    [key: string]: string;
}

export interface Config<T> {
    endpoint: string;
    callback?: (data: T) => void;
    options?: Options;
}

export interface SourcesItem {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface SourcesData {
    status: string;
    sources: SourcesItem[];
}

interface ArticleSource {
    id: string;
    name: string;
}

export interface ArticleItem {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: ArticleSource;
    title: string;
    url: string;
    urlToImage: string;
}

export interface ArticleData {
    status: string;
    totalResults: number;
    articles: ArticleItem[];
}

export enum Endpoints {
    Sources = 'sources',
    Everything = 'everything',
}

export type Nullable<T> = T | null;

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';