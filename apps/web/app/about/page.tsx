export const dynamic = "force-dynamic";

import { use } from "react";
import { CreateHello, CreateHelloObject, Hello } from "shared";

async function getData(): Promise<Hello> {
  const res = await fetch("http://127.0.0.1:3001");
  if (res.status != 200) {
    console.error("error");
    return { message: "error" };
  }
  return res.json();
}

export default function Page() {
  const data: Hello = use(getData());

  async function postData(url, data: CreateHello): Promise<string> {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    });

    return res.json();
  }

  return (
    <>
      <div
        onClick={() =>
          postData("http://127.0.0.1:3001", {
            last_name: "1",
            first_names: "b",
          })
        }
      >
        {data?.message}
      </div>
    </>
  );
}
