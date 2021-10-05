import ThankYouMessage from "./ThankYou";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import client from "../../lib/apollo";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { StripPTags } from "../../helpers/arrayHelper";
import { MUTATION_writeToUsForm } from "../../graphql/mutations/writeToUsForm";
import useTranslation from "next-translate/useTranslation";
import _ from "lodash";
import { useRouter } from "next/router";

const WriteToUsForm = (props) => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const { sectionData } = props;
  const [isThankYou, setThankYou] = useState(false);

  const [formCollaborateSubmit, { error, data }] = useMutation(
    MUTATION_writeToUsForm,
    {
      client: client,
      context: {
        headers: {
          language: locale,
        },
      },
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
      formRef.current.reset();
      $("input, textarea").blur();
    }
  }, [data]);

  let isFormError = !_.isEmpty(errors);
  useEffect(() => {
    if (isFormError) {
      window.dispatchEvent(new Event("resize"));
    }
  }, [isFormError]);

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
          <ThankYouMessage
            title={sectionData.thankYou.title}
            description={sectionData.thankYou.description}
            onClose={setThankYou}
            display={{ display: isThankYou ? "flex" : "none" }}
          />
          <div
            className="hero_text flex"
            style={{ display: isThankYou ? "none" : "flex" }}
          >
            {sectionData?.title && (
              <strong
                className="f_80 uppercase"
                dangerouslySetInnerHTML={{
                  __html: StripPTags(sectionData.title),
                }}
              />
            )}
            {sectionData?.description && (
              <div
                className="f_20 less_opacity"
                dangerouslySetInnerHTML={{ __html: sectionData.description }}
              />
            )}
          </div>
          <div
            className="form_set inner_form"
            style={{ display: isThankYou ? "none" : "block" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
              <div className="input_set">
                <input
                  type="text"
                  {...register("firstName", {
                    required: t("error_fields.first_name"),
                  })}
                  id="f_name"
                  className="required"
                />
                <label for="f_name" className="full_bg flex">
                  {t("write_to_us_form.first_name")}
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
                    required: t("error_fields.last_name"),
                  })}
                  id="l_name"
                  className="required"
                />
                <label for="l_name" className="full_bg flex">
                  {t("write_to_us_form.last_name")}
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
                  {t("write_to_us_form.name_entity")}
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
                    required: t("error_fields.email"),
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  })}
                  id="w_email"
                  className="required"
                />
                <label for="w_email" className="full_bg flex">
                  {t("write_to_us_form.email_address")}
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
                  {t("write_to_us_form.phone_number")}
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
                  {t("write_to_us_form.job_title")}
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
                    required: t("error_fields.comment_letter"),
                  })}
                  id="fb_message"
                  className="required"
                  maxLength="250"
                ></textarea>
                <label for="fb_message" className="full_bg flex">
                  {t("write_to_us_form.comment")}
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
                  <span>{t("write_to_us_form.submit")}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteToUsForm;
