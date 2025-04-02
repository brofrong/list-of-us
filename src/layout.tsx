import { ParentComponent } from "solid-js";

export const Layout: ParentComponent = (props) => {
  return (
    <>
      <header>Header</header>
      {props.children}
      <footer>Footer</footer>
    </>
  );
};
