import { Modal as Modals } from "antd";
import React, { useState } from "react";
import Icons from "../../library/icon";

const ModalGroup = ({
  trigger,
  title = "",
  okType = "",
  okText = "",
  cancelText = "",
  content = "",
  withoutFooter = false,
  widths = 520,
  onOk = () => {},
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    onOk();
    setIsModalOpen(false);
  };

  return (
    <>
      <div type="primary" onClick={showModal} className="cursor-pointer">
        {trigger}
      </div>
      {withoutFooter ? (
        <Modals
          footer={null}
          title={title}
          open={isModalOpen}
          onCancel={handleCancel}
          closable={true}
          width={widths}
          closeIcon={
            <Icons type="CloseCircleOutlined" style={{ fontSize: 20.13 }} />
          }
          centered
        >
          <div style={{ margin: "20px 0" }}>
            <div>{content}</div>
          </div>
        </Modals>
      ) : (
        <Modals
          title={title}
          open={isModalOpen}
          onOk={handleSubmit}
          onCancel={handleCancel}
          okType={okType.toLowerCase()}
          okText={okText}
          cancelText={cancelText}
          closable={true}
          closeIcon={
            <Icons type="CloseCircleOutlined" style={{ fontSize: 20.13 }} />
          }
          width={widths}
          centered
        >
          <div style={{ margin: "30px 0" }}>
            <div>{content}</div>
          </div>
        </Modals>
      )}
    </>
  );
};

export default ModalGroup;
