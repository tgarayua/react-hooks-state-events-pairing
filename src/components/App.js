import video from "../data/video.js";
import Headers from "./Header.js"
import Buttons from "./Buttons.js"
import Comments from "./Comments.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <Headers title={video.title}
      views={video.views}
      createdAt={video.createdAt}/>
      <Buttons />
      <Comments key={video.comments.id} comments={video.comments}/>
    </div>
  );
}

export default App;

