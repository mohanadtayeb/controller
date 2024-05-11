import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { ThemedLayoutV2 as Layout } from "./components/layout";
import { ThemedTitleV2 } from "./components/layout/title";

import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";

import {
  UsersCreate,
  UsersEdit,
  UsersList,
  UsersShow,

} from "./pages/users";

import {
  TopicsCreate,
  TopicsEdit,
  TopicsList,
  TopicsShow,
} from "./pages/topics";

function App() {
  return (
    (<BrowserRouter>
      {/* custom banner:
      project created by: mohaanad tayeb without using github banner */}
      
      <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24292e",
    color: "#fff",
    padding: "5px",
  }}
>
  <h2 style={{
    margin: "0",
    animation: "fadeIn 1s",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",  // Adds a white glow
  }}> <a href="https://mohanad-tayeb.com/" style={{
    color: "inherit",  // Inherits the white color from the parent
    textDecoration: "none",  // Removes underline
    textShadow: "inherit"  // Inherits the glowing effect
  }}>project created by: mohanad tayeb</a></h2>
</div>

      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            {/* <DevtoolsProvider> */}
              <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                resources={[{
                  name: "blog_posts",
                  list: "/blog-posts",
                  create: "/blog-posts/create",
                  edit: "/blog-posts/edit/:id",
                  show: "/blog-posts/show/:id",
                  meta: {
                    canDelete: true,
                  },
                }, {
                  name: "categories",
                  list: "/categories",
                  create: "/categories/create",
                  edit: "/categories/edit/:id",
                  show: "/categories/show/:id",
                  meta: {
                    canDelete: true,
                  },
                }, {
                  name: "users",
                  list: "/users",
                  create: "/users/create",
                  edit: "/users/edit/:id",
                  show: "/users/show/:id"
                }, {
                  name: "topics",
                  list: "/topics",
                  create: "/topics/create",
                  edit: "/topics/edit/:id",
                  show: "/topics/show/:id"
                }]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "MoRix3-pvD7iv-MTQbPf",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2 Header={() => <Header sticky />}  Title={() => <ThemedTitleV2  collapsed={false}/>}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="blog_posts" />}
                    />
                    <Route path="/blog-posts">
                      <Route index element={<BlogPostList />} />
                      <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} />
                    </Route>
                    <Route path="/categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route>
                    <Route path="/users">
                      <Route index element={<UsersList />} />
                      <Route path="create" element={<UsersCreate />} />
                      <Route path="edit/:id" element={<UsersEdit />} />
                      <Route path="show/:id" element={<UsersShow />} />
                    </Route>
                      <Route path="/topics">
                      <Route index element={<TopicsList />} />
                      <Route path="create" element={<TopicsCreate />} />
                      <Route path="edit/:id" element={<TopicsEdit />} />
                      <Route path="show/:id" element={<TopicsShow />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            {/* </DevtoolsProvider> */}
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>)
  );
}

export default App;
