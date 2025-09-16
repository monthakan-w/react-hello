import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import TouchList from './components/TodoList.tsx'
// import Coures from './components/Course.tsx';
// import TodoApp from './components/TodoListHookForm.tsx';
// import MemberList from './components/MemberList.tsx';

import Govermment from './components/Govermment';



createRoot(document.getElementById('root')!).render(

  <StrictMode>
      {/* <App /> */}

      {/* <TodoApp /> */}

      {/* <TouchList /> */}

      {/* <Coures/> */}
{/* 
      <MemberList members={[]} group="Bus"/>
      <MemberList members={[]} group="SajaBoys"/> */}


      <Govermment />
      
  </StrictMode>
)
