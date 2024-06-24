/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} props.fontSize
 * @param {boolean} props.bold
 * @param {number} props.marginTop
 * @param {number} props.marginBottom
 * @param {number} props.marginLeft
 */

function Typography({
  children,
  fontSize,
  bold,
  marginTop,
  marginBottom,
  marginLeft,
}) {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold ? "700" : "400",
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
      }}
    >
      {children}
    </div>
  );
}

export default Typography;
