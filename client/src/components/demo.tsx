import React from "react";

const Demo: React.FC = () => {
  return (
    <div>
      <div>Demo Component</div>
      <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href='/SignIn';
        }}
      > Click here to Log In</button>
    </div>
  );
};

export default Demo;
