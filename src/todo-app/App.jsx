import {
  MainContainer,
  Title,
  Card,
  TodosList,
  ProgressBar,
  Form,
  CategoriesList,
} from "./components/index.js";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useAppSelector } from "./hooks/useAppSelector";
import styles from "./App.module.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

function AppContent() {
  const category = useAppSelector((state) => state.todos.category);
  return (
    <MainContainer>
      <Title />
      <span className={styles.goalCategory}>
        YOUR <span style={{ textTransform: "uppercase" }}>{category}</span>{" "}
        GOALS
      </span>

      <MainContainer flexrow>
        <TodosList />
        <MainContainer flexcol>
          <Card col>
            <h3 className={styles.progressTitle}>Progress Tracker</h3>
            <ProgressBar />
          </Card>
          <Form />
        </MainContainer>
      </MainContainer>
      <CategoriesList />
    </MainContainer>
  );
}

export default App;
