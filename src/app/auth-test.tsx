import { OTPResponse } from "pocketbase";
import { Component, createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import pb from "~/pocketbase/pg";

export const AuthTest: Component = () => {
  const [value, setValue] = createSignal("");
  const [result, setResult] = createSignal<OTPResponse>();
  async function sendEmail() {
    const result = await pb
      .collection("users")
      .requestOTP("dima737.99@mail.ru");
    setResult(result);
  }

  async function sendORP() {
    const _result = result();
    if (_result) {
      const authData = await pb
        .collection("users")
        .authWithOTP(_result.otpId, value());
    }
  }

  async function logOut() {
    await pb.authStore.clear();
  }

  return (
    <div>
      <Button onClick={sendEmail}>Send Email</Button>
      <input value={value()} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={sendORP}>Send Email</Button>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
};
