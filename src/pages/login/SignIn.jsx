import { Form, Input, message } from "antd";
import React, { useState } from "react";
import brandImg from "../../assets/images/brand.jpg";
import { API_URL } from "../../services/api/config";
import { api } from "../../services/api/api.index.js";
import axios from "axios";
const SignIn = () => {
  const [formStep1] = Form.useForm();
  const [formStep2] = Form.useForm();
  const [formStep3] = Form.useForm();

  const [step, setStep] = useState(1);
  const [verifyCode, setVerifyCode] = useState(1);

  const handleFinishStep1 = async (e) => {
    console.log(e);
    try {
      // let data = await axios.post(`${API_URL}core/v1/auth/login`, {
      //   email: e.email,
      //   password: e.password,
      // });
      // setStep(2);
      let data = await axios.post(
        `${API_URL}core/v1/auth/login`,
        {
          email: e.email,
          password: e.password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    // setStep(step + 1);
  };
  const handleFinishStep2 = async (e) => {
    console.log(e);

    try {
      let { data } = await api.post(`${API_URL}core/v1/auth/verify`, {
        verify_code: e.otp,
      });
      console.log(data);
      setStep(3);
    } catch (e) {
      console.log(e);
    }
  };
  const handleFinishStep3 = (e) => {};
  return (
    <div className="signin__mainBackground">
      <div className="signin__background">
        <img src={brandImg} alt="" />
      </div>
      <div className="signin">
        {step === 1 && (
          <Form
            form={formStep1}
            onFinish={handleFinishStep1}
            className="signin__form"
          >
            <div className="signin__form__info">
              <p className="signin__form__info__header">DNI MASTER</p>
            </div>
            <span>
              Tên đăng nhập <span style={{ color: "red" }}>*</span>
            </span>
            <Form.Item className="signin__form__item" name="email">
              <Input placeholder="Nhập tên đăng nhập" />
            </Form.Item>

            <span>
              Mật khẩu <span style={{ color: "red" }}>*</span>
            </span>
            <Form.Item className="signin__form__item" name="password">
              <Input type="password" placeholder="Nhập mật khẩu" />
            </Form.Item>

            <div className="signin__form__submit">
              <div style={{ width: "100%" }} onClick={() => formStep1.submit()}>
                Đăng nhập
              </div>
            </div>
          </Form>
        )}
        {step === 2 && (
          <Form
            form={formStep2}
            onFinish={handleFinishStep2}
            className="signin__form"
          >
            <div className="signin__form__info">
              <p className="signin__form__info__header">DNI MASTER</p>
              <p className="signin__form__info__subinfo">Nhập mã bảo mật</p>
              <p className="signin__form__info__subinfo__sub">
                Vui lòng kiểm tra email và nhập mã bảo mật nhận được xuống đây
              </p>
            </div>
            <Form.Item
              className="signin__form__item"
              name="otp"
              style={{ margin: "12px 0" }}
            >
              <Input placeholder="Nhập mã bảo mật" />
            </Form.Item>
            <div className="signin__form__submit">
              <div style={{ width: "100%" }} onClick={() => formStep2.submit()}>
                Đăng nhập
              </div>
            </div>
          </Form>
        )}
        {step === 3 && (
          <Form
            form={formStep3}
            onFinish={handleFinishStep3}
            className="signin__form"
          >
            <div className="signin__form__info">
              <p className="signin__form__info__header">DNI MASTER</p>
              <p className="signin__form__info__subinfo">
                Thông tin đăng nhập Express Partners
              </p>
            </div>

            <span>
              Email <span style={{ color: "red" }}>*</span>
            </span>
            <Form.Item className="signin__form__item" name="email">
              <Input placeholder="Nhập email" />
            </Form.Item>

            <span>
              Mật khẩu <span style={{ color: "red" }}>*</span>
            </span>
            <Form.Item className="signin__form__item" name="phone">
              <Input placeholder="Nhập mật khẩu" />
            </Form.Item>
            <div
              className="signin__form__submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ width: "calc(50% - 8px)" }}
                onClick={() => formStep3.submit()}
              >
                Kiểm tra
              </div>
              <div
                style={{ width: "calc(50% - 8px)" }}
                onClick={() => formStep3.submit()}
              >
                Lưu
              </div>
            </div>
          </Form>
        )}
        {step === 4 && (
          <div className="signin__form">
            <div className="signin__form__info">
              <p className="signin__form__info__header">DNI MASTER</p>
              <p className="signin__form__info__subinfo__sub">
                Lưu thông tin đăng nhập Express Partners thành công
              </p>
            </div>
            <div className="signin__form__submit">
              <div onClick={() => setStep(1)} style={{ width: "100%" }}>
                Trở về trang trước
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
