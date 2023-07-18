import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../services/api/config";
import { api } from "../../services/api/api.index.js";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../../components/notification";
const Connect = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      let { data } = await api.get(`${API_URL}core/v1/third-parties/exness`);
      if (data.status === "SUCCESS") {
        setStatus(true);
      }
      if (data.status === "FAIL") {
        setStatus(false);
      }
    } catch (e) {
      if (e.statusCode === 400) {
        notifyError(e.message || "Tài khoản hoặc mật khẩu không đúng");
      } else {
        navigate("/");
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
      try {
        setLoading(true);
        await api.post(`${API_URL}core/v1/third-parties/login-exness`, {
          login: e.login,
          password: e.password,
        });
        notifySuccess("Kiểm tra tài khoản thành công");
        setLoading(false);
      } catch (e) {
        setLoading(false);
        if (e.statusCode === 400) {
          notifyError(e.message || "Tài khoản hoặc mật khẩu không đúng");
        } else {
          navigate("/");
        }
      }
    }
    if (type === 2) {
      try {
        setLoading(true);
        await api.post(`${API_URL}core/v1/third-parties/login-exness`, {
          login: e.login,
          password: e.password,
        });
        try {
          await api.post(`${API_URL}core/v1/third-parties/save-exness`, {
            login: e.login,
            password: e.password,
          });
          notifySuccess("Lưu tài khoản thành công");
          setLoading(false);
          getData();
        } catch (e) {
          setLoading(false);
          if (e.statusCode === 400) {
            notifyError(e.message || "Tài khoản hoặc mật khẩu không đúng");
          } else {
            navigate("/");
          }
        }
      } catch (e) {
        setLoading(false);
        if (e.statusCode === 400) {
          notifyError(e.message || "Tài khoản hoặc mật khẩu không đúng");
        } else {
          navigate("/");
        }
      }
    }
  };
  return (
    <div className="connectPage">
      <div className="connectPage__content">
        <h4 className="connectPage__content__header">
          Thông tin đăng nhập Exness Partners{" "}
          {status ? (
            <span style={{ color: "rgb(66, 255, 66)" }}>( Đã kết nối )</span>
          ) : (
            <span style={{ color: "rgb(255, 66, 66)" }}>( Chưa kết nối )</span>
          )}
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
            <Button
              loading={loading}
              style={{ width: "calc(50% - 8px)" }}
              onClick={() => handleFinishCheck()}
            >
              Kiểm tra
            </Button>
            <Button
              loading={loading}
              style={{ width: "calc(50% - 8px)" }}
              onClick={() => handleFinishSave()}
            >
              Lưu
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Connect;
