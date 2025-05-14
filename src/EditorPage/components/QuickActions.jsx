// import React from 'react';
// import './QuickActions.css';
// import { ViewIcon, SendIcon, MessageIcon, DocumentIcon } from './Icons';

// const QuickActions = ({ onReviewClick, onPublishClick }) => {
//   const actions = [
//     {
//       name: "Review Articles",
//       icon: <ViewIcon />,
//       bgColor: "#EFF6FF",
//       textColor: "#2563EB",
//       onClick: onReviewClick
//     },
//     {
//       name: "Publish Article",
//       icon: <SendIcon />,
//       bgColor: "#ECFDF5",
//       textColor: "#059669",
//       onClick: onPublishClick
//     },
//     {
//       name: "Message Authors",
//       icon: <MessageIcon />,
//       bgColor: "#F5F3FF",
//       textColor: "#7C3AED",
//       onClick: () => console.log("Message authors clicked")
//     },
//     {
//       name: "Generate Report",
//       icon: <DocumentIcon />,
//       bgColor: "#F9FAFB",
//       textColor: "#4B5563",
//       onClick: () => console.log("Generate report clicked")
//     }
//   ];

//   return (
//     <div className="quick-actions-container">
//       <div className="quick-actions-title">Quick Actions</div>
//       <div className="quick-actions-buttons">
//         {actions.map((action, index) => (
//           <div 
//             key={index} 
//             className="quick-action-button"
//             style={{ 
//               backgroundColor: action.bgColor,
//               color: action.textColor
//             }}
//             onClick={action.onClick}
//           >
//             {action.icon}
//             <span>{action.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuickActions;