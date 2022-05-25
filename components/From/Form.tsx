import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  onFinish: (values: any) => void;
}

const Form = ({ children, onFinish }: LayoutProps) => {
  return (
    <div>
      <form action="" onSubmit={onFinish}>
        {children}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
