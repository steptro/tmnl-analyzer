import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import Graph from "./pages/graph";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/graph",
    element: <Graph />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const client = new ApolloClient({
  uri: "https://7qxmu4nsivabnpsfimfzvs6hqm.appsync-api.eu-west-1.amazonaws.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-api-key": "da2-bfrgstfluzfifkcygjtsqfmm3u",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
