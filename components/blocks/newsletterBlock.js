import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { NewsLetterNav } from "../../constants/nav_constants";
import { MUTATION_NewsLetterForm } from "../../graphql/mutations/newsLetterForm";
import client from "../../lib/apollo";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import ThankYouMessageHomepage from "../forms/ThankYouHomepage";
import { useRouter } from "next/router";
import { StripPTags } from "../../helpers/arrayHelper";
import { useRef } from "react";
import _ from "lodash";
const NewsLetterBlock = ({ sectionData }) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");
  const { title, description } = sectionData;
  const [isThankYou, setThankYou] = useState(false);
  const [formSubmit, { error, data }] = useMutation(MUTATION_NewsLetterForm, {
    client: client,
    context: {
      headers: {
        language: locale,
      },
    },
  });
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
  return (
    <section id="newsletter" style={{ visibility: "hidden" }}>
      <div className="section_content flex full_bg">
        <div className="content_set no-padding">
          <ThankYouMessageHomepage
            title={"ALL DONE, You subscribed to our Newsletter"}
            description={`Thank you for subscribing.`}
            onClose={setThankYou}
            display={isThankYou}
          />
          {title && (
            <h3
              className="_inOut"
              dangerouslySetInnerHTML={{ __html: StripPTags(title) }}
              style={{ display: isThankYou ? "none" : "block" }}
            />
          )}
          {description && (
            <h6
              className="_inOut"
              dangerouslySetInnerHTML={{ __html: StripPTags(description) }}
              style={{ display: isThankYou ? "none" : "block" }}
            />
          )}

          <div
            className="form_set"
            style={{ display: isThankYou ? "none" : "block" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
              <div className="input_set buildup">
                <input
                  type="email"
                  {...register("email", {
                    required: t("error_fields.email"),
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  })}
                  id="newsletter_email"
                />
                <label for="newsletter_email" className="full_bg flex">
                  {t("news_letter_form.email_address")}
                </label>
                <div
                  className="inline_submit flex _curTL2"
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
                      strokeMiterlimit="10"
                      x1="0"
                      y1="100%"
                      x2="0"
                      y2="0"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="100%"
                      y1="0"
                      x2="100%"
                      y2="100%"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
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
                <span style={{ color: "#fd3838" }}>{errors.email.message}</span>
              )}
            </pre>
          </div>
          <div className="sub_footer">
            <ul className="flex">
              {NewsLetterNav(router.locale).map((link, key) => {
                return link.target ? (
                  <li key={`link_nlf-${key}`}>
                    <a
                      href={link.href}
                      className="_inOut"
                      target={link.target}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
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
        <p className="copyrights _inOut">{`?? ${new Date().getFullYear()} ${t(
          "copyrights"
        )}`}</p>
      </div>
    </section>
  );
};

export default NewsLetterBlock;
