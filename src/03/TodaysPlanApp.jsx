import React from "react";
// class TodaysPlanApp extends React.Component {
//   render() {
//     const { onButtonClick, hasPlan } = this.props;
//     return (
//       <div className="body">
//         {hasPlan ? <TodaysPlan /> : null}
//         <button onClick={onButtonClick}>계획없음</button>
//       </div>
//     );
//   }
// }

function TodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  );
}
