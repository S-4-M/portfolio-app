import React from "react";

const shortTxt =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quos unde aperiam voluptatem dolore sint enim provident debitis consequatur recusandae. Earum corporis rem praesentium consequuntur temporibus exercitationem eum, minus voluptatum.";

const longTxt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore corporis nostrum necessitatibus illo, voluptatem harum velit quod, ducimus dolorem neque, dignissimos voluptatibus aliquid iste fugiat? Earum sequi repellat expedita magni sapiente qui architecto autem? Harum porro, omnis ullam vero quis itaque. Eligendi nisi iste exercitationem harum autem sunt culpa nobis repellendus quod saepe, quo ab dolorum magnam fugit quis officiis! Et quas culpa veritatis enim esse, excepturi quo magnam ipsa dolorum totam eaque provident quidem consequuntur ullam ex quaerat pariatur a sint velit magni vero error. Et, itaque molestiae voluptate rerum repellendus sapiente quod quis animi corrupti sunt minima.";

export default function Main(props) {
  return (
    <main>
      <div className="main-container">
        <img src="./websiteBg.jpg" alt="background" className="bg" />
        <div className="main-container-body">
          <div className="main-header">
            <div className="main-heading">
              HELLO
              <br />
              WORLD
            </div>
            <div className="main-content">
              <p className="explain">{shortTxt}</p>
            </div>
          </div>
          <div className="main-content">
            <h2>What the world is</h2>
            <p className="explain">{longTxt}</p>
            <h2>why living in the world</h2>
            <p className="explain">{longTxt}</p>
            <h2>The world is yours</h2>
            <p className="explain">{shortTxt}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
