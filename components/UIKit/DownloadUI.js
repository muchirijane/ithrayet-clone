const DownloadUI = (props) => {
  return (
    <>
      <div className="fixed_block right">
        <strong className="f_14 uppercase">Scan to open it on your mobile</strong>
        <div className="fixed_circle flex">
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 0H0V23.75H23.75V0ZM19 19H4.75V4.75H19V19Z"
              fill="currentColor"
            ></path>
            <path
              d="M14.25 9.5H9.5V14.25H14.25V9.5Z"
              fill="currentColor"
            ></path>
            <path
              d="M52.25 0V23.75H76V0H52.25ZM71.25 19H57V4.75H71.25V19Z"
              fill="currentColor"
            ></path>
            <path
              d="M66.5 9.5H61.75V14.25H66.5V9.5Z"
              fill="currentColor"
            ></path>
            <path
              d="M0 76H23.75V52.25H0V76ZM4.75 57H19V71.25H4.75V57Z"
              fill="currentColor"
            ></path>
            <path
              d="M14.25 61.75H9.5V66.5H14.25V61.75Z"
              fill="currentColor"
            ></path>
            <path d="M47.5 0H38V4.75H47.5V0Z" fill="currentColor"></path>
            <path
              d="M38 19H42.75V14.25H47.5V9.5H33.25V4.75H28.5V9.5V11.875V14.25H38V19Z"
              fill="currentColor"
            ></path>
            <path d="M33.25 19H28.5V23.75H33.25V19Z" fill="currentColor"></path>
            <path
              d="M47.5 23.75H42.75V28.5H28.5V33.25H47.5V23.75Z"
              fill="currentColor"
            ></path>
            <path
              d="M4.75 42.75H9.5V38H4.75V28.5H0V47.5H4.75V42.75Z"
              fill="currentColor"
            ></path>
            <path
              d="M14.25 28.5H9.5V33.25H14.25V28.5Z"
              fill="currentColor"
            ></path>
            <path
              d="M28.5 47.5H38V42.75H33.25V38H23.75V28.5H19V38H14.25V47.5H19V42.75H21.375H23.75H28.5V47.5Z"
              fill="currentColor"
            ></path>
            <path d="M47.5 38H42.75V47.5H47.5V38Z" fill="currentColor"></path>
            <path
              d="M42.75 52.25H28.5V57H38V71.25H28.5V76H42.75V71.25H52.25V66.5H42.75V52.25Z"
              fill="currentColor"
            ></path>
            <path
              d="M33.25 61.75H28.5V66.5H33.25V61.75Z"
              fill="currentColor"
            ></path>
            <path
              d="M52.25 52.25H47.5V61.75H52.25V52.25Z"
              fill="currentColor"
            ></path>
            <path
              d="M71.25 61.75H57V76H61.75V66.5H71.25V61.75Z"
              fill="currentColor"
            ></path>
            <path d="M76 71.25H66.5V76H76V71.25Z" fill="currentColor"></path>
            <path d="M76 52.25H71.25V57H76V52.25Z" fill="currentColor"></path>
            <path
              d="M57 57H61.75V42.75H52.25V47.5H57V57Z"
              fill="currentColor"
            ></path>
            <path
              d="M66.5 33.25H61.75V28.5H57V33.25H52.25V38H71.25V33.25H76V28.5H66.5V33.25Z"
              fill="currentColor"
            ></path>
            <path d="M76 42.75H66.5V47.5H76V42.75Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <div className="fixed_block left">
        <a
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
