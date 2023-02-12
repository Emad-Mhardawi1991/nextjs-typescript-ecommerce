type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <header>{/* here goes nav bav and all header elements */}</header>
      <main>{props.children}</main>

      <footer>{/* here goes footer bav and all header elements */}</footer>
    </div>
  );
};

export default Layout;
