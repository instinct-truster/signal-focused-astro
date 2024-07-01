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
import { selectCategory } from "./reducer/todosSlice";

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

function AppContent() {
  const category = useAppSelector(selectCategory);
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
        <div style={classes.rightSideContainer}>
          <Card col>
            <h3 className={styles.progressTitle}>PROGRESS TRACKER</h3>
            <ProgressBar />
          </Card>
          <Form />
        </div>
      </MainContainer>
    </MainContainer>
  );
}

const classes = {
  rightSideContainer: {
    width: "100%",
    gap: 20,
    display: "flex",
    flexDirection: "column",
  },
};

export default App;
