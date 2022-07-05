import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Landscape = ({ slice }) => (
  <>
    <div className="landscape">
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </div>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </>
);

export default Landscape;
