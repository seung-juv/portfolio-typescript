import React from 'react';

type StateType<T = string | number | readonly string[] | undefined> = T;

type OnChangeType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>;

interface InputReturnProps<T = any> {
  value: StateType<T>;
  onChange: React.ChangeEventHandler;
}

const useInput = (initialState?: StateType): InputReturnProps => {
  const [value, setValue] = React.useState<StateType>(initialState);

  const onChange = React.useCallback((e: OnChangeType): void => {
    const {
      target: { value },
    } = e;
    setValue(value ?? e);
  }, []);

  return { value, onChange };
};

export default useInput;
