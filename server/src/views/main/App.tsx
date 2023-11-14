import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Task from "./pages/Task";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Admin from "./pages/Admin";
import "./index.css";
import "./App.css"
import Setting from "./pages/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="admin" element={<Admin />} />
          <Route path="profile" element={<Setting />} />
          <Route path="task/:task_id" element={<Task />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
