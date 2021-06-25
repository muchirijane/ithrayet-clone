const SearchComponent = () => {
  return (
    <div className="search_wrap full_bg flex">
      <div
        className="filters_close zero-font flex mg _el"
        data-dist="2"
        id="search_close"
      >
        <i>-</i>
        <i>-</i>
        <i>-</i>
      </div>

      <div className="search_input _el">
        <form action="search_en.php" method="post" id="form_search">
          <input type="text" name="query" placeholder="Type something.." />
        </form>
      </div>

      <div className="inner_circle_set mg _el" data-dist="6">
        <div className="circle_mag flex full_bg">
          <span className="f_14 uppercase">Search</span>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
