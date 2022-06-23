// 引数で文字列を受け取って、その文字列をconsole.logに出すHOCS
// withLog("hello")(Component)
// 引数に文字列を受け取って、コンポーネントを引数に受け取って文字列をconsole.logで出力するコンポーネントを返す
import React from 'react';

export const withLog = (message) => {
  return (Component) => {
    const WrapperComponent = () => {
      return (
        <>
          <Component message={message} />
        </>
      );
    };

    return WrapperComponent;
  };
};
