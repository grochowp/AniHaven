import React, { createContext, useState, useContext, ReactNode } from "react";

interface SelectBarContextType {
  type: string;
  age: string;
  sex: string;
  handleTypeChange: (value: string) => void;
  handleAgeChange: (value: string) => void;
  handleSexChange: (value: string) => void;
  handleReset: () => void;
}

const SelectBarContext = createContext<SelectBarContextType | null>(null);

const SelectBarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [type, setType] = useState<string>("All");
  const [age, setAge] = useState<string>("All");
  const [sex, setSex] = useState<string>("All");

  const handleTypeChange = (value: string) => {
    setType(value);
  };

  const handleAgeChange = (value: string) => {
    setAge(value);
  };

  const handleSexChange = (value: string) => {
    setSex(value);
  };

  const handleReset = () => {
    setType("All");
    setAge("All");
    setSex("All");
  };

  return (
    <SelectBarContext.Provider
      value={{
        type,
        age,
        sex,
        handleTypeChange,
        handleAgeChange,
        handleSexChange,
        handleReset,
      }}
    >
      {children}
    </SelectBarContext.Provider>
  );
};

const useSelectBar = () => {
  const context = useContext(SelectBarContext);
  if (!context) {
    throw new Error("useSelectBar must be used within a SelectBarProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { SelectBarProvider, useSelectBar };
