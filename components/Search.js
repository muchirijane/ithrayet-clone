import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SearchComponent = () => {
  const [search_term, onSearch] = useState();
  const router = useRouter();

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
        <input
          type="text"
          name="query"
          placeholder="Type something.."
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
      </div>

      <div className="inner_circle_set mg _el" data-dist="6">
        <Link href={`/search?search_term=${search_term}`}>
          <a>
            <div className="circle_mag flex full_bg">
              <span className="f_14 uppercase">Search</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SearchComponent;
