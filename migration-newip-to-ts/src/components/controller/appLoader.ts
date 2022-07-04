import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://nodenews.herokuapp.com/", {
      apiKey: "0b2d4cbb26b240c0bf5eb6c3df4da6ca"
    });
  }
}

export default AppLoader;
