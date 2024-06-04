"use client";

import { useTheme } from "@/components/theme-provider";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ClientRoutePage() {
  // console.log("Client route rendered");

  const theme = useTheme();

  const settings = {
    dots: true,
  };
  return (
    //
    <>
      <h1 style={{ color: theme.colors.primary }}>Client route</h1>;
    </>
  );
}
