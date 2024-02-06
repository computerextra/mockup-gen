function App() {
  return (
    <>
      <p>Hier wird ein INPUT sein, der die URL ändert.</p>
      <div className="container">
        <div className="mockup-wrapper">
          <div className="inner-wrapper">
            <div
              className="desktop-wrapper ui-draggable ui-draggable-handle"
              style={{ zIndex: "auto", cursor: "pointer", left: 830, top: -5 }}
            >
              <div className="desktop-inner">
                <iframe
                  id="frame"
                  src="https://computer-extra.de"
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
                  src="https://computer-extra.de"
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
                  src="https://computer-extra.de"
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
                  src="https://computer-extra.de"
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
