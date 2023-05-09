import { Routes, Route } from 'react-router-dom';
import SinglePage from '@/routes/SinglePage';

import Home from '../routes/Home';
import About from '../routes/About';
import Login from '../routes/Login';
import Profile from '../routes/Profile';
import NotMatch from '../routes/NotMatch';
import Layout from './components/Layout';

const TodoApp = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />} />
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
      <Route path="about" element={<About />} />
      <Route path="about-app" element={<AboutPage1 />} />
  <Route path="about-developer" element={<AboutPage2 />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
};
export default TodoApp;
