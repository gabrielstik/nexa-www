"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const H1 = ({ as: tag, className = "", children }) => {
  const Tag = tag || "h1";

  const ref = useRef(null);
  const observer = useRef(null);

  const [firstPart, setFirstPart] = useState(null);
  const [secondPart, setSecondPart] = useState(null);
  const [span, setSpan] = useState(null);
  const [isUnderlined, setIsUnderlined] = useState(false);

  useEffect(() => {
    if (children?.includes("<span>")) {
      // part before span
      setFirstPart(children.split("<span>")[0]);
      // part after span
      setSecondPart(children.split("</span>")[1]);
      // span
      setSpan(children.split("<span>")[1].split("</span>")[0]);

      observer.current = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            setIsUnderlined(true);
          } else {
            setIsUnderlined(false);
          }
        },
        { root: null, threshold: 1 }
      );

      if (observer?.current && ref.current) {
        observer.current.observe(ref.current);
      }
    }

    return () => {
      if (observer?.current && ref.current) {
        observer.current.unobserve(ref.current);
      }
    };
  }, []);

  if (span) {
    return (
      <Tag
        className={twMerge(
          "text-free font-[400] text-[30px] lg:text-[56px] leading-[30px] lg:leading-[63px] tracking-[-1.2px] lg:tracking-[-2.5px] text-light-50 text-center",
          className
        )}
      >
        <span dangerouslySetInnerHTML={{ __html: firstPart }} />
        <span ref={ref} className="relative inline-block">
          <span>{span}</span>
          <span
            className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[currentColor] origin-left transition-all delay-[0.5s] duration-[0.5s] block"
            style={{
              transitionTimingFunction: "cubic-bezier(0.0, 0.7, 0.95, 0.99)",
              transform: `scaleX(${isUnderlined ? "1" : "0"})`,
            }}
          />
        </span>
        <span dangerouslySetInnerHTML={{ __html: secondPart }} />
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={twMerge(
        "text-free font-[400] text-[30px] lg:text-[56px] leading-[30px] lg:leading-[63px] tracking-[-1.2px] lg:tracking-[-2.5px] text-light-50",
        className
      )}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

const H2 = ({ as: tag, className = "", children }) => {
  const Tag = tag || "h2";
  return (
    <Tag
      className={twMerge(
        "font-general font-light text-2xl lg:text-4xl leading-relaxed lg:relaxed tracking-tighter whitespace-pre-line",
        className
      )}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

const H3 = ({ as: tag, className = "", children }) => {
  const Tag = tag || "h3";
  return (
    <Tag
      className={twMerge(
        "font-general font-[400] text-[25px] lg:text-[30px] leading-[25px] lg:leading-[30px] text-noovo-black lg:tracking-[-1px] [&_span]:relative [&_span]:inline-block [&_span]:after:content-[' '] [&_span]:after:absolute [&_span]:after:bottom-[-1px] [&_span]:after:left-0 [&_span]:after:right-0 [&_span]:after:h-[2px] [&_span]:after:bg-[currentcolor]",
        className
      )}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

const H4 = ({ as: tag, className = "", style, children }) => {
  const Tag = tag || "h4";
  return (
    <Tag
      className={twMerge(
        "text-free font-[700] text-[14px] leading-[22px] uppercase text-dark-100 whitespace-pre-line",
        className
      )}
    >
      {typeof children === "string"
        ? children.split("<br/>").map((child, index) => (
            <Fragment key={index}>
              {child}
              <br />
            </Fragment>
          ))
        : children}
    </Tag>
  );
};

const P1 = ({ as: tag, className = "", children }) => {
  const Tag = tag || "p";
  return (
    <Tag
      className={twMerge(
        "text-free font-[400] text-[14px] leading-[20px] text-dark-100",
        className
      )}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

const P2 = ({ as: tag, className = "", children }) => {
  const Tag = tag || "p";
  return (
    <Tag
      className={twMerge(
        "font-general text-noovo-grey font-[400] text-[14px] lg:text-[14px] leading-[18px] lg:leading-[18px]",
        className
      )}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

const L1 = ({ as: tag, className = "", children }) => {
  const Tag = tag || "p";
  return (
    <Tag
      className={twMerge(
        "text-geist-mono font-medium text-[12px] leading-[16px] uppercase text-dark-100",
        className
      )}
    >
      {typeof children === "string"
        ? children.split("<br/>").map((child, index) => (
            <Fragment key={index}>
              {child}
              <br />
            </Fragment>
          ))
        : children}
    </Tag>
  );
};

const L2 = ({ as: tag, className = "", children }) => {
  const Tag = tag || "p";
  return (
    <Tag
      className={twMerge(
        "font-mono font-medium text-xs lg:text-base leading-7 lg:leading-7 tracking-tight text-brown-900",
        className
      )}
    >
      {typeof children === "string"
        ? children.split("<br/>").map((child, index) => (
            <Fragment key={index}>
              {child}
              <br />
            </Fragment>
          ))
        : children}
    </Tag>
  );
};

const CA = ({ as: tag, className = "", children }) => {
  const Tag = tag || "p";
  return (
    <Tag
      className={twMerge(
        "font-general font-medium text-xs leading-4 lg:leading-4 text-brown-900",
        className
      )}
    >
      {typeof children === "string"
        ? children.split("<br/>").map((child, index) => (
            <Fragment key={index}>
              {child}
              <br />
            </Fragment>
          ))
        : children}
    </Tag>
  );
};

export { CA, H1, H2, H3, H4, L1, L2, P1, P2 };
