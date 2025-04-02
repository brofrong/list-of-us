import { A } from "@solidjs/router";
import { Component } from "solid-js";
import { Title } from "@solidjs/meta";

export const TestPage: Component = () => {
  return (
    <div>
      <Title>Test page</Title>
      <div>Test Page</div>
      <A href="/">go home!</A>
    </div>
  );
};
