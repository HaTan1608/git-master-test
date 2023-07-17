import { Form, Input, message } from "antd";
import React, { useState } from "react";
import { API_URL } from "../../services/api/config";
import { api } from "../../services/api/api.index";
import { useNavigate } from "react-router-dom";
const Connect = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(1);

  const navigate = useNavigate();

  const handleFinishCheck = (e) => {
    setType(1);
    form.submit();
  };
  const handleFinishSave = (e) => {
    setType(2);
    form.submit();
  };
  const handleFinish = async (e) => {
    if (type === 1) {
      console.log(e);
      try {
        let { data } = await api.post(
          `${API_URL}core/v1/third-parties/save-exness`,
          {
            login: e.login,
            password: e.password,
          }
        );
        console.log(data);
      } catch (e) {
        navigate("/");
      }
    }
    if (type === 2) {
      console.log(e);

      try {
        let { data } = await api.post(
          `${API_URL}core/v1/third-parties/save-exness`,
          {
            login: e.login,
            password: e.password,
          }
        );
        console.log(data);
      } catch (e) {
        navigate("/");
      }
    }
  };
  return (
    <div className="connectPage">
      <div className="connectPage__content">
        <h4 className="connectPage__content__header">
          Thông tin đăng nhập Exness Partners
        </h4>
        <Form
          form={form}
          onFinish={handleFinish}
          className="connectPage__content__form"
        >
          <span>
            Email <span style={{ color: "red" }}>*</span>
          </span>
          <Form.Item className="" name="login">
            <Input placeholder="Nhập email" />
          </Form.Item>

          <span>
            Mật khẩu <span style={{ color: "red" }}>*</span>
          </span>
          <Form.Item className="" name="password">
            <Input type="password" placeholder="Nhập mật khẩu" />
          </Form.Item>
          <div
            className="connectPage__content__submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ width: "calc(50% - 8px)" }}
              onClick={() => handleFinishCheck()}
            >
              Kiểm tra
            </div>
            <div
              style={{ width: "calc(50% - 8px)" }}
              onClick={() => handleFinishSave()}
            >
              Lưu
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Connect;
