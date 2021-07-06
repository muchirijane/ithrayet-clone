import { useState } from "react";
import { useEffect, useRef } from "react";
import QRCode from "react-qr-code";
const DownloadUI = (props) => {
  const linkRef = useRef();
  const [curURL, setURL] = useState("ithraeyat");

  useEffect(() => {
    if (linkRef.current) {
      var observer = new MutationObserver(function (mutations) {
        mutations.map((mutation) => {
          if (mutation.attributeName === "href") {
            setURL(mutation.target.href);
          }
        });
      });
      observer.observe(linkRef.current, {
        attributes: true,
      });
    }
  }, []);

  return (
    <>
      <div className="fixed_block right">
        <strong className="f_14 uppercase">
          Scan to open it on your mobile
        </strong>
        <div className="fixed_circle flex">
          <QRCode value={curURL} size={76} />
        </div>
      </div>
      <div className="fixed_block left">
        <a
          ref={linkRef}
          href="#"
          className="fixed_circle solid flex _up"
          target="_blank"
          id="getURL"
        >
          <strong className="f_14 uppercase">Digital version</strong>
        </a>
      </div>
    </>
  );
};

export default DownloadUI;
