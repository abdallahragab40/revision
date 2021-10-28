import { Provider } from "react-redux";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container text-center">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    </>
  );
}

export default App;
