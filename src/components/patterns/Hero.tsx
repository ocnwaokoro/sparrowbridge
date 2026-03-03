import React from "react";
import { Container } from "../layout/Container";
import { Kicker } from "../typography/Kicker";
import { PageTitle } from "../typography/PageTitle";
import { BodyText } from "../typography/BodyText";

interface HeroProps {
  kicker?: React.ReactNode;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  rightSlot?: React.ReactNode;
  variant?: "light" | "dark";
  backgroundImage?: string;
  /** Optional mobile-optimized image for max-width 768px. When set, a <picture> is used. */
  mobileBackgroundImage?: string;
  /** Vertical alignment of the background image (object-position). Use to show more top or bottom of the photo. */
  backgroundImagePosition?: "top" | "center" | "bottom";
}

const objectPositionClass = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
} as const;

export const Hero: React.FC<HeroProps> = ({
  kicker,
  title,
  subtitle,
  actions,
  rightSlot,
  variant = "dark",
  backgroundImage,
  mobileBackgroundImage,
  backgroundImagePosition = "center",
}) => {
  const bgClasses = backgroundImage
    ? ""
    : variant === "dark"
      ? "bg-P"
      : "bg-white";
  const textVariant = variant === "dark" ? "light" : "dark";
  const positionClass = objectPositionClass[backgroundImagePosition];

  return (
    <section
      className={`relative ${bgClasses} py-16 lg:py-24 min-h-[320px] lg:min-h-[480px] lg:h-[620px] flex items-start overflow-hidden`}
    >
      {backgroundImage && (
        <>
          {/* TODO J-02: create mobile-optimized versions of hero/landscape images at ≤300KB and pass as mobileBackgroundImage */}
          {mobileBackgroundImage ? (
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={mobileBackgroundImage}
              />
              <img
                src={backgroundImage}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full object-cover ${positionClass}`}
                width={1440}
                height={620}
                loading="eager"
              />
            </picture>
          ) : (
            <img
              src={backgroundImage}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover ${positionClass}`}
              width={1440}
              height={620}
              loading="eager"
            />
          )}
          <div className="absolute inset-0 bg-P/75" aria-hidden="true" />
        </>
      )}
      <Container className="relative z-10 w-full flex flex-col lg:flex-row gap-12 items-center md:items-start lg:items-start">
        <div
          className={`flex flex-col gap-6 ${rightSlot ? "flex-1" : "w-full max-w-3xl"}`}
        >
          {kicker && <Kicker variant={textVariant}>{kicker}</Kicker>}
          <PageTitle variant={textVariant}>{title}</PageTitle>
          {subtitle && (
            <BodyText size="lg" variant={textVariant} className="max-w-[700px]">
              {subtitle}
            </BodyText>
          )}
          {actions && (
            <div className="flex flex-wrap gap-3 mt-2">{actions}</div>
          )}
        </div>

        {rightSlot && (
          <div className="w-full lg:w-[400px] flex-shrink-0">{rightSlot}</div>
        )}
      </Container>
    </section>
  );
};
