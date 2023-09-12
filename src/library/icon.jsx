import * as AntdIcons from "@ant-design/icons";

export default function Icons({ type = "", style = {}, onClick = () => {} }) {
  if (type) {
    const Icon = AntdIcons[type];
    return AntdIcons[type] ? <Icon style={style} onClick={onClick} /> : null;
  } else {
    return null;
  }
}
