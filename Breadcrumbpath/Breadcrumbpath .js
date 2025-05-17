// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Breadcrumbpath.css';

// const Breadcrumb = ({ paths }) => {
//   return (
//     <nav className="breadcrumb-container">
//       <ol className="breadcrumb">
//         {paths.map((path, index) => (
//           <React.Fragment key={index}>
//             {index > 0 && <span className="breadcrumb-separator">/</span>}
//             {index === paths.length - 1 ? (
//               <li className="breadcrumb-item current">{path.label}</li>
//             ) : (
//               <li className="breadcrumb-item">
//                 <Link to={path.url}>{path.label}</Link>
//               </li>
//             )}
//           </React.Fragment>
//         ))}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumb;