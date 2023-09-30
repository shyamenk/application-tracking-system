import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import { FormProvider } from "./components/context/FormContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <FormProvider>
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              colorPrimary: "#087B2F",
              colorPrimaryBgHover: "#087B2F",
            },
            Checkbox: {
              colorPrimary: "#087B2F",
              colorPrimaryBgHover: "#087B2F",
              colorPrimaryHover: "#087B2F",
            },
            Switch: {
              colorPrimary: "#087B2F",
              colorPrimaryBgHover: "#087B2F",
              colorPrimaryHover: "#087B2F",
            },
            Button: {
              colorLinkHover: "red",
              colorPrimaryHover: "#087B2F",
            },
          },
        }}
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ConfigProvider>
    </FormProvider>
    ;
  </>
);
