import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

function Loading({ size = "large" }) {
  return (
    <Flex align="center" gap="middle">
      <Spin indicator={<LoadingOutlined spin />} size={size} />
    </Flex>
  );
}

export default Loading;
