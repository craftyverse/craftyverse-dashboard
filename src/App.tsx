import { Input } from './components/atoms/Input';
import './styles.css';

const App = () => {
  return (
    <div>
      <Input
        labelName="First Name"
        inputType="text"
        placeholderName="First Name"
        inputErrorMsg={'Please provide a email'}
      />
    </div>
  );
};

export { App };
