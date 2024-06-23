import {
  MainContainer,
  Title,
  Typography,
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
  const { category } = useAppSelector((state) => state.todos);
  return (
    <MainContainer>
      <Title />
      <Typography fontSize={24} bold marginTop={38} marginBottom={17}>
        Your list of{" "}
        <span style={{ textTransform: "uppercase" }}>{category}</span> goals
      </Typography>

      <MainContainer flexrow>
        <TodosList />
        <MainContainer flexcol>
          <Card col>
            <Typography fontSize={24} bold>
              Progress Tracker
            </Typography>
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
