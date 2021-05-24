import Elements from "../elements";

const MainBlock = ({ editions }) => {
  return (
    <section id="main">
      <div className="main_heading flex full_bg">
        <p>Every artist was first an amateur</p>
        <h3>
          A true artist is not one who <br />
          is inspired, but one who <br />
          inspires others
        </h3>
      </div>

      <div id="container"></div>

      <div className="main_wrap scale">
        <div className="main_wrap_animated full_bg">
          {editions.map((val, key) => {
            return (
              <Elements.EditionHomepage
                key={key}
                id={key}
                imgUrl={val.cover.url}
                title={val.title}
                subTitle={"Febuary 2021"}
              />
            );
          })}
        </div>
      </div>

      <div className="circle_set no-select buildup">
        Hold here to <br />
        Explore Editions
      </div>
    </section>
  );
};

export default MainBlock;
