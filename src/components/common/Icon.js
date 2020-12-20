import React from "react";
import T from "prop-types";

const Icon = ({
  IconSet,
  size = 16,
  iconName,
  enabled = true,
  color = "red",
  disabledColor = "yallow",
  iconStyle,
  onPress
}) => (
  <IconSet
    suppressHighlighting={false}
    onPress={onPress && onPress}
    style={[size && { fontSize: size }, iconStyle]}
    color={enabled ? color : disabledColor}
    name={iconName}
  />
);

Icon.propTypes = {
  iconName: T.string,
  iconStyle: T.any,
  size: T.number,
  IconSet: T.any,
  color: T.string,
  disabledColor: T.string,
  enabled: T.bool,
  onPress: T.func
};

export { Icon };
