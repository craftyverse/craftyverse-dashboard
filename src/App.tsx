import { Input } from './components/atoms/Input';
import './styles.css';

const App = () => {
  return (
    <div>
      <Input
        labelName="count"
        inputType="number"
        placeholderName="number"
        inputErrorMsg={'Please provide a email'}
      />
    </div>
  );
};

export { App };
