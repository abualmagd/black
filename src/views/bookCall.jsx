/* eslint-disable react/prop-types */
import { useState } from "react";
import { Layout } from "../components/layout";
import { myMail } from "../data/const";

export function BookCall() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });
  const [error, setError] = useState(null);

  const send = async (e) => {
    e.preventDefault();
    if (message.email.length > 0) {
      try {
        window.location.href = `mailto:${myMail}?subject=${encodeURIComponent(
          message.subject
        )}&body=${encodeURIComponent(
          "Im " + message.name + " \n " + message.content
        )}`;
      } catch (error) {
        setError(String(error));
      }
    }
  };

  const change = (e, target) => {
    switch (target) {
      case "name":
        setMessage({ ...message, name: e.target.value });
        break;
      case "email":
        setMessage({ ...message, email: e.target.value });
        break;
      case "subject":
        setMessage({ ...message, subject: e.target.value });
        break;
      case "content":
        setMessage({ ...message, content: e.target.value });
        break;

      default:
        break;
    }
  };
  return (
    <Layout>
      <form
        className=" w-80 flex flex-col mb-20 mt-10"
        onSubmit={(e) => send(e)}
      >
        <CallInput
          label={"name"}
          placeholder={"your name dear"}
          index={1}
          type={"text"}
          onChange={change}
          target={"name"}
        />
        <CallInput
          label={"email"}
          placeholder={"your email"}
          index={2}
          type={"email"}
          onChange={change}
          target={"email"}
        />
        <CallInput
          label={"Im intersted in"}
          placeholder={"subject"}
          index={3}
          type={"text"}
          onChange={change}
          target={"subject"}
        />
        <CallInput
          label={"message"}
          placeholder={"your comment"}
          index={4}
          type={"text"}
          onChange={change}
          target={"content"}
        />
        <div className="h-10"></div>
        <input
          type="submit"
          className=" btn btn-sm btn-outline ml-auto bg-primary"
          value={"Send"}
        />
        {error && <div className="error test-red-500 m-2">{error}</div>}
      </form>
      <div className=" h-36"></div>
    </Layout>
  );
}

// eslint-disable-next-line react/prop-types
export function CallInput({
  // eslint-disable-next-line react/prop-types
  label,
  index,
  placeholder,
  type,
  onChange,
  target,
}) {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <label htmlFor={"input" + index} className=" capitalize mt-6">
        {label}{" "}
      </label>
      <input
        type={type}
        id={"input" + index}
        onChange={(e) => onChange(e, target)}
        className="w-full  mt-2 outline-none border-gray-400 border-b-[1px] bg-transparent placeholder:text-xs placeholder:text-gray-500"
        placeholder={placeholder}
      />
    </div>
  );
}
