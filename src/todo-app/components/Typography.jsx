/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} props.fontSize
 * @param {boolean} props.bold
 * @param {number} props.marginTop
 * @param {number} props.marginBottom
 */

function Typography({ children, fontSize, bold, marginTop, marginBottom }) {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold ? "700" : "400",
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    >
      {children}
    </div>
  );
}

export default Typography;
