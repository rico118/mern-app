import { Route, Routes } from "react-router-dom"

import { Home } from "./Home"

import {Index} from "./product/Index"
import {Show} from "./product/Show"
import {Post} from "./product/Post"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/"  >
        <Route index element={< Index />}/>
        <Route path=":id" element={<Show />}/>
        <Route path="new" element={<Post />}/>
      </Route>
    </Routes>
  )

}
export default App;