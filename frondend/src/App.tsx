import React from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import RegisterPage from "./pages/Register";
import MyPage from "./pages/Mypage";
import ChatRoom from "./pages/chat-room";
import Chat from "./test/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/chatroom",
        element: <ChatRoom />,
      },
      {
        path: "/test",
        element: <Chat />,
      }
      

    ],
  },
]);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
