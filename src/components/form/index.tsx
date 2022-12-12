import { useUnit } from "effector-react";
import { $currentValue, $suggestions, getCurrentValue } from "models/form";
import { useState } from "react";
import { Container } from "./conatainer";
import s from "./styles.module.css";
import { Suggestion } from "./suggestion";

export const Form = () => {
  const [isVisble, setIsVisible] = useState(false)

  const value = useUnit($currentValue);
  const suggestions = useUnit($suggestions);

  const onClickHandler = (name: string) => {
    getCurrentValue(name)
    setIsVisible(false)
  }

  return (
    <div className={s.form}>
      <h1 className={s.form__title}>Компания</h1>
      <input
        value={value}
        onChange={(e) => getCurrentValue(e.currentTarget.value)}
        className={s.form__input}
        onFocus={()=>setIsVisible(true)}
      />
      {value && isVisble &&
        <Container>
          {suggestions.map(({ domain, name, logo }) => (
            <Suggestion 
              key={Math.random()} 
              domain={domain} 
              name={name} 
              logo={logo} 
              onClick={()=>onClickHandler(name)}
            />
          ))}
        </Container>
      }
    </div>
  );
};
