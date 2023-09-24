import { QuizForm } from "./QuizForm";
import { SearchBar } from "./SearchBar";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <QuizForm />
      <SearchBar/>
    </div>
  );
};
