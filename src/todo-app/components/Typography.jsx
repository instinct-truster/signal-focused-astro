function Typography({ children, fontSize, bold, marginTop, marginBottom }) {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold ? "700" : "400",
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}>
      {children}
    </div>
  );
}

export default Typography;
