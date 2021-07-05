import ThankYouMessage from "./ThankYou";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import client from "../../lib/apollo";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { MUTATION_collaborateForm } from "../../graphql/mutations/collaborateForm";
import { StripPTags } from "../../helpers/arrayHelper";

const CollaborateForm = (props) => {
  const { sectionData } = props;
  const [isThankYou, setThankYou] = useState(false);

  const [formCollaborateSubmit, { error, data }] = useMutation(
    MUTATION_collaborateForm,
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
    formCollaborateSubmit({
      variables: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        nameEntityInstitution: formData.nameEntityInstitution,
        emailAddress: formData.emailAddress,
        contact: formData.contact,
        jobTitle: formData.jobTitle,
        commentLetter: formData.commentLetter,
      },
    });
  };

  const handleContact = (e) => {
    let number = e.target.value;
    number = number.replace(/[^\d.-]/g, "");
    if (number.length > 15) {
      number = number.slice(0, 15);
    }

    e.target.value = `+${number}`;
  };
  const formRef = useRef(null);
  return (
    <section>
      <div className="section_content">
        <div className="content_a">
          {isThankYou ? (
            <ThankYouMessage
              title={"All done, we received your information"}
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
                      {...register("firstName", {
                        required: "First Name is required.",
                      })}
                      id="f_name"
                      className="required"
                    />
                    <label for="f_name" className="full_bg flex">
                      First Name *
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
                    {errors?.firstName && (
                      <span style={{ color: "#fd3838" }}>
                        {errors.firstName.message}
                      </span>
                    )}
                  </pre>
                  <div className="input_set">
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last Name is required.",
                      })}
                      id="l_name"
                      className="required"
                    />
                    <label for="l_name" className="full_bg flex">
                      Last Name *
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
                    {errors?.lastName && (
                      <span style={{ color: "#fd3838" }}>
                        {errors.lastName.message}
                      </span>
                    )}
                  </pre>
                  <div className="input_set">
                    <input
                      type="text"
                      {...register("nameEntityInstitution")}
                      id="entity"
                    />
                    <label for="entity" className="full_bg flex">
                      Name of Entity/Institution
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
                  <div className="input_set">
                    <input
                      type="email"
                      {...register("emailAddress", {
                        required: "Email is required.",
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      })}
                      id="w_email"
                      className="required"
                    />
                    <label for="w_email" className="full_bg flex">
                      Email Address *
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
                  <div className="input_set">
                    <input
                      type="text"
                      {...register("contact", {
                        pattern: /[^\d.-]/g,
                      })}
                      id="number"
                      onChange={handleContact}
                    />
                    <label for="number" className="full_bg flex">
                      Phone Number
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
                  <div className="input_set">
                    <input type="text" {...register("jobTitle")} id="job" />
                    <label for="job" className="full_bg flex">
                      Your job title
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
                  <div className="input_set long">
                    <textarea
                      {...register("commentLetter", {
                        required: "Comment/Letter is required.",
                      })}
                      id="fb_message"
                      className="required"
                      maxLength="250"
                    ></textarea>
                    <label for="fb_message" className="full_bg flex">
                      Your comment/letter*
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
                    {errors?.commentLetter && (
                      <span style={{ color: "#fd3838" }}>
                        {errors.commentLetter.message}
                      </span>
                    )}
                  </pre>
                  <div
                    className="circle_btn_set mg submitThis flex"
                    data-dist="5"
                    onClick={(e) => {
                      e.preventDefault();
                      formRef.current.dispatchEvent(
                        new Event("submit", { cancelable: true, bubbles: true })
                      );
                    }}
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

export default CollaborateForm;
