import './App.css';
import { Route, Switch } from "react-router-dom";
import Products from "../src/components/Products";
import Video from "../src/components/VideoPage";

export const config = {
  endpoint: `https://3dec0dae-41c5-4b9d-bfbd-43d396ff6f17.mock.pstmn.io`,
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/video/:id">
          <Video />
        </Route>
        <Route path="/" exact component={Products} />      
      </Switch>
      
    </div>
  );
}

export default App;
