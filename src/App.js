import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import AuthProvider from "./components/context/AuthProvider";
import Destinations from "./components/Destinations/Destinations";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Header from "./components/navigation/Header";
import OrderReview from "./components/orderReview/OrderReview";
import NotFound from "./components/pageNOtFound/NotFound";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route
              path="/destinations/:id"
              element={
                <PrivateRoute>
                  <OrderReview />
                </PrivateRoute>
              }
            />
            <Route path="/tour" element={<Tours />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
