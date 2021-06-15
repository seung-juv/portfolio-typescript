import React from 'react';

const MenuContext = React.createContext({
  isVisible: {},
  setIsVisible: undefined as React.Dispatch<React.SetStateAction<boolean>> | undefined,
});

export const useMenu = (): Array<any> => {
  const context = React.useContext(MenuContext);
  return [context.isVisible, context.setIsVisible];
};

export default MenuContext;
