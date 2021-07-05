import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { MUTATION_FeedBackForm } from "../../graphql/mutations/feedBackForm";
import client from "../../lib/apollo";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import ThankYouMessage from "./ThankYou";
import { StripPTags } from "../../helpers/arrayHelper";

const FeedbackForm = (props) => {
  const { sectionData } = props;
  const [isThankYou, setThankYou] = useState(false);

  const [formFeedbackSubmit, { error, data }] = useMutation(
    MUTATION_FeedBackForm,
    {
      client: client,
    }
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (data) {
      setThankYou(true);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      error.graphQLErrors.map(({ message }, i) => {
        if (message === "ValidationError") {
          errors.email = "Please input valid email";
        }
      });
    }
  }, [error]);

  const onSubmit = (formData) => {
    formFeedbackSubmit({
      variables: {
        message: formData.message,
        name: formData.name,
        email: formData.emailAddress,
      },
    });
  };
  const formRef = useRef(null);

  return (
    <section>
      <div className="section_content">
        <div className="content_a">
          {isThankYou ? (
            <ThankYouMessage
              title={"All done, we received your feedback"}
              description={`Thank you for your message. we will contact you soon `}
              onClose={setThankYou}
            />
          ) : (
            <>
              <div className="hero_text flex">
                <strong
                  className="f_80 uppercase"
                  dangerouslySetInnerHTML={{
                    __html: StripPTags(sectionData.title),
                  }}
                />

                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{ __html: sectionData.description }}
                />
              </div>
              <div className="form_set inner_form">
                <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                  <div className="input_set">
                    <input
                      type="text"
                      id="fb_name"
                      {...register("name", {
                        required: "Name is required.",
                      })}
                    />
                    <label for="fb_name" className="full_bg flex">
                      Name
                    </label>
                    <div className="input_border">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                      >
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="0"
                          y1="100%"
                          x2="0"
                          y2="0"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="0"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="100%"
                          y1="0"
                          x2="100%"
                          y2="100%"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="100%"
                          y1="100%"
                          x2="0"
                          y2="100%"
                        ></line>
                      </svg>
                    </div>
                  </div>
                  <pre>
                    {errors?.name && (
                      <span style={{ color: "#fd3838" }}>
                        {errors.name.message}
                      </span>
                    )}
                  </pre>
                  <div className="input_set">
                    <input
                      type="email"
                      id="fb_email"
                      {...register("emailAddress", {
                        required: "Email is required.",
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      })}
                    />
                    <label for="fb_email" className="full_bg flex">
                      Email Address
                    </label>
                    <div className="input_border">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                      >
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="0"
                          y1="100%"
                          x2="0"
                          y2="0"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="0"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="100%"
                          y1="0"
                          x2="100%"
                          y2="100%"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="100%"
                          y1="100%"
                          x2="0"
                          y2="100%"
                        ></line>
                      </svg>
                    </div>
                  </div>
                  <pre>
                    {errors?.emailAddress && (
                      <span style={{ color: "#fd3838" }}>
                        {errors.emailAddress.message}
                      </span>
                    )}
                  </pre>
                  <div className="input_set long">
                    <textarea
                      id="fb_message"
                      {...register("message", {
                        required: "Message is required.",
                      })}
                    ></textarea>
                    <label for="fb_message" className="full_bg flex">
                      Message..
                    </label>

                    <div className="input_border">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                      >
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="0"
                          y1="100%"
                          x2="0"
                          y2="0"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="0"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="100%"
                          y1="0"
                          x2="100%"
                          y2="100%"
                        ></line>
                        <line
                          className="svg-stroke"
                          fill="none"
                          strokeMiterlimit="50"
                          x1="100%"
                          y1="100%"
                          x2="0"
                          y2="100%"
                        ></line>
                      </svg>
                    </div>
                  </div>
                  <pre>
                    {errors?.message && (
                      <span style={{ color: "#fd3838" }}>
                        {errors.message.message}
                      </span>
                    )}
                  </pre>

                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      formRef.current.dispatchEvent(
                        new Event("submit", { cancelable: true, bubbles: true })
                      );
                    }}
                    className="circle_btn_set mg submitThis flex"
                    data-dist="5"
                  >
                    <div className="btn circle_btn flex _ele">
                      <span>Submit</span>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
