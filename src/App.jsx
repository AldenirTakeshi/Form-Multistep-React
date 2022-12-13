import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Thanks from "./components/Thanks";
import ReviewForm from "./components/ReviewForm";
import UserForm from "./components/UserForm";
import "./App.css";

//Hooks
import { useForm } from "./hooks/useForm";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponents } = useForm(formComponents);
  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliaçção</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>Etapas</p>
        <form>
          <div className="inputs-container">{currentComponents}</div>
          <div className="action">
            <button type="button">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
