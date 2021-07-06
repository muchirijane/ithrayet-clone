import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
const Filters = (props) => {
  const { t } = useTranslation("common");

  const { data } = props;
  const router = useRouter();
  const { locale } = router;
  return (
    data && (
      <div className="filters_wrap full_bg">
        <div className="filters_set">
          <div className="filters_head _ele flex">
            <div
              className="filters_close zero-font flex mg"
              data-dist="2"
              id="filters_close"
            >
              <i>-</i>
              <i>-</i>
              <i>-</i>
            </div>

            <div className="f_80 alt uppercase">{t("filters")}</div>
          </div>

          <div className="filters_body">
            <div className="filters_scroll">
              {data.alphabet && (
                <div className="filter_block _ele" id="alphabet">
                  <div className="filter_head flex">
                    <strong className="f_20 uppercase">
                      {t("by_alphabet")}
                    </strong>
                    <div className="filter_side">
                      <div className="filter_count flex">0</div>
                      <div className="filter_arrow">
                        <svg
                          width="14"
                          height="26"
                          viewBox="0 0 14 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3543 11.9368L1.67084 0.285648C1.28804 -0.0958645 0.66829 -0.0952232 0.286136 0.287622C-0.0957223 0.670417 -0.0947356 1.29052 0.288109 1.67233L11.2761 12.63L0.287714 23.5877C-0.0950811 23.9695 -0.0960678 24.5892 0.285741 24.9721C0.477311 25.164 0.728282 25.26 0.979253 25.26C1.22958 25.26 1.47957 25.1646 1.67079 24.9741L13.3543 13.3232C13.5387 13.1398 13.6421 12.8901 13.6421 12.63C13.6421 12.3699 13.5384 12.1206 13.3543 11.9368Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="filter_options f_16 uppercase">
                    {locale === "en" ? (
                      <div className="letters flex">
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>E</span>
                        <span>F</span>
                        <span>G</span>
                        <span>H</span>
                        <span>I</span>
                        <span>J</span>
                        <span>K</span>
                        <span>L</span>
                        <span>M</span>
                        <span>N</span>
                        <span>O</span>
                        <span>P</span>
                        <span>Q</span>
                        <span>R</span>
                        <span>S</span>
                        <span>T</span>
                        <span>U</span>
                        <span>V</span>
                        <span>W</span>
                        <span>X</span>
                        <span>Y</span>
                        <span>Z</span>
                      </div>
                    ) : (
                      <div class="letters flex">
                        <span>أ</span>
                        <span>ب</span>
                        <span>ج</span>
                        <span>د</span>
                        <span>ه</span>
                        <span>و</span>
                        <span>ز</span>
                        <span>ح</span>
                        <span>ط</span>
                        <span>ي</span>
                        <span>ك</span>
                        <span>ل</span>
                        <span>م</span>
                        <span>ن</span>
                        <span>س</span>
                        <span>ع</span>
                        <span>ف</span>
                        <span>ص</span>
                        <span>ق</span>
                        <span>ر</span>
                        <span>ش</span>
                        <span>ت</span>
                        <span>ث</span>
                        <span>خ</span>
                        <span>ذ</span>
                        <span>ض</span>
                        <span>ظ</span>
                        <span>غ</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {data.filter_authors && (
                <div className="filter_block _ele" id="writer">
                  <div className="filter_head flex">
                    <strong className="f_20 uppercase">{t("by_writer")}</strong>
                    <div className="filter_side">
                      <div className="filter_count flex">0</div>
                      <div className="filter_arrow">
                        <svg
                          width="14"
                          height="26"
                          viewBox="0 0 14 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3543 11.9368L1.67084 0.285648C1.28804 -0.0958645 0.66829 -0.0952232 0.286136 0.287622C-0.0957223 0.670417 -0.0947356 1.29052 0.288109 1.67233L11.2761 12.63L0.287714 23.5877C-0.0950811 23.9695 -0.0960678 24.5892 0.285741 24.9721C0.477311 25.164 0.728282 25.26 0.979253 25.26C1.22958 25.26 1.47957 25.1646 1.67079 24.9741L13.3543 13.3232C13.5387 13.1398 13.6421 12.8901 13.6421 12.63C13.6421 12.3699 13.5384 12.1206 13.3543 11.9368Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="filter_options f_16 uppercase">
                    <div className="options_wrap">
                      <div className="options_list">
                        {data.filter_authors.map((author, key) => (
                          <div
                            className="option flex"
                            key={`fil-author_${key}`}
                          >
                            <div
                              className="option_side"
                              data-id={`${author.firstName},${author.lastName}`}
                            >
                              {`${author.firstName} ${author.lastName}`}
                            </div>
                            <div className="option_side">
                              <span className="op_circle flex">
                                <svg
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.8204 0.195398C15.5748 -0.0588526 15.1697 -0.0659025 14.9154 0.179648C14.9101 0.184785 14.9048 0.190035 14.8997 0.195398L4.47214 10.6229L1.08461 7.23542C0.830363 6.98987 0.425213 6.99692 0.179663 7.25117C-0.0598875 7.4992 -0.0598875 7.89239 0.179663 8.14041L4.01966 11.9804C4.2696 12.2303 4.67471 12.2303 4.92461 11.9804L15.8046 1.10039C16.0589 0.854798 16.0659 0.449648 15.8204 0.195398Z"
                                    fill="#1D1D1D"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data.filter_tags && (
                <div className="filter_block _ele" id="catID">
                  <div className="filter_head flex">
                    <strong className="f_20 uppercase">{t("by_cat")}</strong>
                    <div className="filter_side">
                      <div className="filter_count flex">0</div>
                      <div className="filter_arrow">
                        <svg
                          width="14"
                          height="26"
                          viewBox="0 0 14 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3543 11.9368L1.67084 0.285648C1.28804 -0.0958645 0.66829 -0.0952232 0.286136 0.287622C-0.0957223 0.670417 -0.0947356 1.29052 0.288109 1.67233L11.2761 12.63L0.287714 23.5877C-0.0950811 23.9695 -0.0960678 24.5892 0.285741 24.9721C0.477311 25.164 0.728282 25.26 0.979253 25.26C1.22958 25.26 1.47957 25.1646 1.67079 24.9741L13.3543 13.3232C13.5387 13.1398 13.6421 12.8901 13.6421 12.63C13.6421 12.3699 13.5384 12.1206 13.3543 11.9368Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="filter_options f_16 uppercase">
                    <div className="options_wrap">
                      <div className="options_list">
                        {data.filter_tags.map((tag, key) => (
                          <div className="option flex" key={`fil-cat_${key}`}>
                            <div
                              className="option_side"
                              data-id={`${tag.name}`}
                            >
                              {`${tag.name}`}
                            </div>
                            <div className="option_side">
                              <span className="op_circle flex">
                                <svg
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.8204 0.195398C15.5748 -0.0588526 15.1697 -0.0659025 14.9154 0.179648C14.9101 0.184785 14.9048 0.190035 14.8997 0.195398L4.47214 10.6229L1.08461 7.23542C0.830363 6.98987 0.425213 6.99692 0.179663 7.25117C-0.0598875 7.4992 -0.0598875 7.89239 0.179663 8.14041L4.01966 11.9804C4.2696 12.2303 4.67471 12.2303 4.92461 11.9804L15.8046 1.10039C16.0589 0.854798 16.0659 0.449648 15.8204 0.195398Z"
                                    fill="#1D1D1D"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data.date && (
                <div className="filter_block _ele" id="date">
                  <div className="filter_head flex">
                    <strong className="f_20 uppercase">{t("by_date")}</strong>
                    <div className="filter_side">
                      <div className="filter_arrow">
                        <svg
                          width="14"
                          height="26"
                          viewBox="0 0 14 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3543 11.9368L1.67084 0.285648C1.28804 -0.0958645 0.66829 -0.0952232 0.286136 0.287622C-0.0957223 0.670417 -0.0947356 1.29052 0.288109 1.67233L11.2761 12.63L0.287714 23.5877C-0.0950811 23.9695 -0.0960678 24.5892 0.285741 24.9721C0.477311 25.164 0.728282 25.26 0.979253 25.26C1.22958 25.26 1.47957 25.1646 1.67079 24.9741L13.3543 13.3232C13.5387 13.1398 13.6421 12.8901 13.6421 12.63C13.6421 12.3699 13.5384 12.1206 13.3543 11.9368Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="filter_options f_16 uppercase">
                    {locale === "en" ? (
                      <div className="dates_block flex">
                        <div className="date_side">
                          <div className="date_label">From</div>
                          <div className="date_select flex">
                            <div className="select_set">
                              <select id="monthFrom">
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                              </select>
                            </div>
                            <div className="select_set">
                              <select id="yearFrom">
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="date_side">
                          <div className="date_label">To</div>
                          <div className="date_select flex">
                            <div className="select_set">
                              <select id="monthTo">
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                              </select>
                            </div>
                            <div className="select_set">
                              <select id="yearTo">
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div class="dates_block flex">
                        <div class="date_side">
                          <div class="date_label">من</div>
                          <div class="date_select flex">
                            <div class="select_set">
                              <select id="monthFrom">
                                <option value="1">يناير</option>
                                <option value="2">فبراير</option>
                                <option value="3">مارس</option>
                                <option value="4">ابريل</option>
                                <option value="5">مايو</option>
                                <option value="6">يوتيو</option>
                                <option value="7">يوليو</option>
                                <option value="8">اغسطس</option>
                                <option value="9">سبتمبر</option>
                                <option value="10">اكتوبر</option>
                                <option value="11">
                                  تشرين الثاني (نوفمبر)
                                </option>
                                <option value="12">ديسمبر</option>
                              </select>
                            </div>
                            <div class="select_set">
                              <select id="yearFrom">
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="date_side">
                          <div class="date_label">الي</div>
                          <div class="date_select flex">
                            <div class="select_set">
                              <select id="monthTo">
                                <option value="1">يناير</option>
                                <option value="2">فبراير</option>
                                <option value="3">مارس</option>
                                <option value="4">ابريل</option>
                                <option value="5">مايو</option>
                                <option value="6">يوتيو</option>
                                <option value="7">يوليو</option>
                                <option value="8">اغسطس</option>
                                <option value="9">سبتمبر</option>
                                <option value="10">اكتوبر</option>
                                <option value="11">
                                  تشرين الثاني (نوفمبر)
                                </option>
                                <option value="12">ديسمبر</option>
                              </select>
                            </div>
                            <div class="select_set">
                              <select id="yearTo">
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="filters_action _ele">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {data.alphabet && (
                <input type="hidden" name="alphabet" value="" />
              )}
              {data.filter_authors && (
                <input type="hidden" name="writer" value="" />
              )}
              {data.filter_tags && (
                <input type="hidden" name="catID" value="" />
              )}
              {data.date && <input type="hidden" name="dateFrom" value="" />}
              {data.date && <input type="hidden" name="dateTo" value="" />}

              <div className="form_btn _up">
                <strong className="f_16 uppercase">{t("done")}</strong>
              </div>
            </form>
          </div>
        </div>

        <i className="full_bg"></i>
      </div>
    )
  );
};

export default Filters;
