const ThankYouMessageHomepage = (props) => {
  const { title, description, onClose } = props;

  const handleClose = () => {
    onClose(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="nf_object"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <svg
          width="107"
          height="108"
          viewBox="0 0 107 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 53.9999C0.5 24.4484 24.2331 0.500143 53.4996 0.5C82.7536 0.531715 106.469 24.4619 106.5 54.0004C106.499 83.5517 82.7663 107.5 53.4999 107.5C24.2332 107.5 0.5 83.5514 0.5 53.9999Z"
            stroke="white"
          />
          <path
            d="M23.9551 60.4895C23.9858 60.5216 24.0171 60.5533 24.0489 60.5842L39.3347 76.0129C40.8268 77.5187 43.246 77.5187 44.7381 76.0129L82.9525 37.4414"
            stroke="white"
          />
        </svg>
      </div>

      <h3 className="_inOut" dangerouslySetInnerHTML={{ __html: title }} />
      <h6
        className="_inOut"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <br />
      <div
        className="filters_close zero-font flex mg _el"
        data-dist="2"
        onClick={handleClose}
      >
        <i>-</i>
        <i>-</i>
        <i>-</i>
      </div>
    </div>
  );
};

export default ThankYouMessageHomepage;
