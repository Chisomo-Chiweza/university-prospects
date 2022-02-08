function LightPage(props) {
  return (
    <div className="flex h-screen w-screen flex-col bg-white">
      {props.children}
    </div>
  );
}

export default LightPage;
