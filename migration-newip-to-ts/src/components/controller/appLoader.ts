import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'bfb5542550f045ee9fe9116a8af214dd',
        });
    }
}

export default AppLoader;
