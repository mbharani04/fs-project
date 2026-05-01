import Child from "./components/Child";
import Student from "./components/Student";
import Product from "./components/Product";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
import CardUI from "./components/CardUI";
import Navbar from "./components/Navbar";
import TwoColumn from "./components/TwoColumn";
import ButtonStyles from "./components/ButtonStyles";
import FormUI from "./components/FormUI";

function App() {
  return (
    <div className="space-y-6 p-4">
      <Navbar />

      <Child name="Bharani" />

      <Student name="Bharani" age={22} course="MERN" />

      <Product title="Laptop" price={50000} />

      <Greeting isLoggedIn={true} />

      <Button text="Click Me" />

      <CardUI />

      <TwoColumn />

      <ButtonStyles />

      <FormUI />
    </div>
  );
}

export default App;