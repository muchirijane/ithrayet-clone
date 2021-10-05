import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { NewsLetterNav } from "../constants/nav_constants";
import { MUTATION_NewsLetterForm } from "../graphql/mutations/newsLetterForm";
import { useMutation } from "@apollo/client";
import client from "../lib/apollo";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ThankYouMessage from "./forms/ThankYou";
import { useRouter } from "next/router";
import { StripPTags } from "../helpers/arrayHelper";
import { useRef } from "react";
import _ from "lodash";

const InnerFooter = (props) => {
  const router = useRouter();
  const { locale } = router;
  const { sectionData } = props;
  const [isThankYou, setThankYou] = useState(false);
  const [formSubmit, { loading, error, data }] = useMutation(
    MUTATION_NewsLetterForm,
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
    formSubmit({
      variables: {
        email: formData.email,
      },
    });
  };
  const formRef = useRef(null);
  const { t } = useTranslation("common");
  return (
    <section id="inner-footer">
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
              <div
                className="f_80 alt _ele"
                dangerouslySetInnerHTML={{
                  __html: StripPTags(sectionData.title),
                }}
              />
            )}
            {sectionData?.description && (
              <div
                className="f_20 less_opacity _ele"
                dangerouslySetInnerHTML={{
                  __html: StripPTags(sectionData.description),
                }}
              />
            )}

            <div className="form_set">
              <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <div className="input_set buildup">
                  <input
                    type="email"
                    id="newsletter_email"
                    {...register("email", {
                      required: t("error_fields.email"),
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    })}
                  />
                  <label for="newsletter_email" className="full_bg flex">
                    {t("news_letter_form.email_address")}
                  </label>
                  <div
                    className={`inline_submit flex _curTL2 submitThis ${
                      loading && "disabled"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      formRef.current.dispatchEvent(
                        new Event("submit", {
                          cancelable: true,
                          bubbles: true,
                        })
                      );
                    }}
                  >
                    <span>{t("news_letter_form.subscribe")}</span>
                    <i className="full_bg"></i>
                  </div>

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
              </form>
              <pre className="news-letter-error">
                {errors?.email && (
                  <span style={{ color: "#fd3838" }}>
                    {errors.email.message}
                  </span>
                )}
              </pre>
            </div>

            <div className="sub_footer">
              <ul className="flex">
                {NewsLetterNav(router.locale).map((link, key) => {
                  return link.target ? (
                    <li key={`link_nlf-${key}`}>
                      <Link href={link.href}>
                        <a
                          className="_inOut"
                          target={link.target}
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ) : (
                    <li key={`link_nlf-${key}`}>
                      <Link href={link.href}>
                        <a className="_inOut">{link.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerFooter;
