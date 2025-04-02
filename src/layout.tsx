const Layout = (props: { children: any; }) => {
  return (
    <>
      <header>Header</header>
      {props.children}
      <footer>Footer</footer>
    </>
  );
};