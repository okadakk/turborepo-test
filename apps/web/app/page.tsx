export const dynamic = "force-dynamic";

import { use } from "react";
import { Hello } from "shared";
import { Button, Header } from "ui";

async function getData(): Promise<Hello> {
  const res = await fetch("http://127.0.0.1:3001/1");
  if (res.status != 200) {
    console.error("error");
    return { message: "error" };
  }
  return res.json();
}

export default function Page() {
  const data: Hello = use(getData());

  return (
    <>
      <Header text="Web" />
      {data?.message}
      <Button />
    </>
  );
}
