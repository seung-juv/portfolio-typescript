import React from 'react';

type stateType = string | number | readonly string[] | undefined;

type onChangeType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>;

type inputType = {
  value: stateType;
  onChange: React.ChangeEventHandler;
  setValue: React.Dispatch<React.SetStateAction<stateType>>;
};

const useInput = (initialState?: stateType): inputType => {
  const [value, setValue] = React.useState<stateType>(initialState);

  const onChange = React.useCallback((e: onChangeType): void => {
    const {
      target: { value },
    } = e;
    setValue(value);
  }, []);

  return { value, onChange, setValue };
};

export default useInput;
