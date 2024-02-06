import { useState } from "react";

function App() {
  const [url, setUrl] = useState("https://computer-extra.de");
  const [realUrl, setRealUrl] = useState("https://computer-extra.de");

  const click = (url: string) => {
    if (url == null || url == "") {
      setRealUrl("https://computer-extra.de");
      return;
    }
    setRealUrl(url);
  };

  return (
    <>
      <input
        type="text"
        placeholder={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={() => click(url)}>reload</button>
      <div className="container">
        <div className="mockup-wrapper" id="imapicture">
          <div className="inner-wrapper">
            <div
              className="desktop-wrapper ui-draggable ui-draggable-handle"
              style={{ zIndex: "auto", cursor: "pointer", left: 830, top: -5 }}
            >
              <div className="desktop-inner">
                <iframe
                  id="frame"
                  src={realUrl}
                  width="600"
                  height="342"
                ></iframe>
                \n
              </div>
            </div>

            <div className="mac-wrapper ui-draggable ui-draggable-handle">
              <div className="mac-inner">
                <iframe
                  id="frame_mac"
                  src={realUrl}
                  width="600"
                  height="342"
                ></iframe>
                \n
              </div>
            </div>

            <div
              className="ipad-wrapper ui-draggable ui-draggable-handle"
              style={{ zIndex: "auto", cursor: "pointer", left: 713, top: 261 }}
            >
              <div className="ipad-inner">
                <iframe
                  id="frame_ipad"
                  src={realUrl}
                  width="200"
                  height="260"
                ></iframe>
                \n
              </div>
            </div>

            <div
              className="iphone-wrapper ui-draggable ui-draggable-handle"
              style={{ zIndex: 2, cursor: "pointer", left: 991, top: 369 }}
            >
              <div className="iphone-notch"></div>
              <div className="iphone-inner">
                <iframe
                  id="frame_iphone5"
                  src={realUrl}
                  width="105"
                  height="181"
                ></iframe>
                \n
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
