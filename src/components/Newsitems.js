// import React, { Component } from 'react'

// export default class Newsitems extends Component {
//   render() {
//       let {title, description, imageurl, newsUrl, publishedAt, author} = this.props;
//     return (
//       <div className="my-3">
//         <div className="card" style={{width : "18rem"}}>
//             <img src={!imageurl?"https://png.pngtree.com/png-vector/20221117/ourmid/pngtree-breaking-news-vector-icon-illustration-logo-design-png-image_6461447.png":imageurl} className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title">{title}
//                 <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                   99+
//                   <span class="visually-hidden"></span>
//                 </span>
//                 {/* <span className="badge rounded-pill bg-success">Success </span> */}
//                 </h5>
//                 <p className="card-text">{description}</p>
//                 <p class="card-text"><small class="text-body-secondary">By - {!author? "unknown":author} On {new Date(publishedAt).toGMTString().slice(0, 17)}</small></p>
//                 <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Details</a>
//             </div>
//         </div>
//         </div>
//     )
//   }
// }



import React from 'react';

const NewsItems = (props) =>{
    const { title, description, imageurl, newsUrl, publishedAt, author, source } = props;
    return (
      <div className="my-3">
        <div className="card position-relative" style={{ width: "18rem" }}>
          <img
            src={!imageurl ? "https://png.pngtree.com/png-vector/20221117/ourmid/pngtree-breaking-news-vector-icon-illustration-logo-design-png-image_6461447.png" : imageurl}
            className="card-img-top"
            alt="..."
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-rectangle bg-success" style={{ transform: "translate(-50%, -50%)" }}>
            {source}
            <span className="visually-hidden"></span>
          </span>
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By - {!author ? "unknown" : author} On {new Date(publishedAt).toGMTString().slice(0, 17)}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Details
            </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItems;
