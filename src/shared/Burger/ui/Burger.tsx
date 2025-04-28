import { memo } from "react";
import styled from "../style/burger.module.css";

export const Burger = memo(() => {
  return <button className={styled.burger}></button>;
});
