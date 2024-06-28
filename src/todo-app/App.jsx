import { Provider } from "react-redux";
import { store } from "./store/store";
import { useAppSelector } from "./hooks/useAppSelector";
import styles from "./App.module.css";
import Card from "./components/Card";
import CategoriesList from "./components/CategoriesList";
import Form from "./components/Form";
import MainContainer from "./components/MainContainer";
import ProgressBar from "./components/ProgressBar";
import Title from "./components/Title";
import TodosList from "./components/TodosList";

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

function AppContent() {
  const category = useAppSelector((state) => state.todos.category);
  return (
    <MainContainer>
      <Title />
      <CategoriesList />
      <span className={styles.goalCategory}>
        YOUR <span style={{ textTransform: "uppercase" }}>{category}</span>{" "}
        GOALS
      </span>

      <MainContainer flexrow>
        <TodosList />
        <MainContainer flexcol>
          <Card col>
            <h3 className={styles.progressTitle}>PROGRESS TRACKER</h3>
            <ProgressBar />
          </Card>
          <Form />
        </MainContainer>
      </MainContainer>
    </MainContainer>
  );
}

export default App;
