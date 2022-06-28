import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bfb5542550f045ee9fe9116a8af214dd',
        });
    }
}

export default AppLoader;
