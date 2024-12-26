"use client";
import Link from "next/link.js";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function SendRequest() {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const [recentRequest, setRecentRequest] = useState(false);

  const form = useRef();

  const today = new Date();

  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      setloading(true);
      console.log(inputs, form.current);
      emailjs
        .sendForm("service_njksxjt", "template_aql47ta", form.current, {
          publicKey: "rg1vk0lzJwpv6QkYa",
        })
        .then(
          () => {
            alert("SUCCESS!, You scheduled appointment");
            setloading(false);
            setRecentRequest(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setloading(false);
          }
        );
    } catch (error) {}
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 sm:px-3 lg:px-8">
      <h1 className="text-white text-4xl font-bold text-center">
        Get Dental Visit
      </h1>
      <h2 className="text-gray-200 text-2xl font-bold text-center">Today</h2>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
        {recentRequest ? (
          <div className="text-center">
            <h1 className="text-xl text-gray-300 font-bold">
              You allredy scheduled
            </h1>
            <h1 className="text-xl text-white font-bold">
              for more information call us{" "}
              <a href="tel:0942308965" className="text-black">
                0942308965
              </a>
            </h1>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={handlesubmit}
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-medium leading-6 text-lg"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={inputs.name}
                  onChange={(e) =>
                    setInputs({ ...inputs, name: e.target.value })
                  }
                  required
                  autoComplete="string"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block font-medium leading-6 text-lg"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  value={inputs.phone}
                  onChange={(e) =>
                    setInputs({ ...inputs, phone: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                />
              </div>
            </div>

            <div className="flex">
              <label
                htmlFor="date"
                className="block font-medium leading-6 text-lg"
              >
                Select Appointment Date
              </label>
              <div className="pl-3">
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={`${today.getFullYear()}-${
                    today.getMonth() + 1
                  }-${today.getDate()}`}
                  max={`${today.getFullYear() + 1}-${
                    today.getMonth() + 1
                  }-${today.getDate()}`}
                  value={inputs.date}
                  onChange={(e) =>
                    setInputs({ ...inputs, date: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-medium leading-6 text-lg"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Type any Message"
                rows={3}
                value={inputs.message}
                onChange={(e) =>
                  setInputs({ ...inputs, message: e.target.value })
                }
                className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6 line-clamp-3"
              />
            </div>
            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  loading && "cursor-not-allowed"
                }`}
              >
                {loading ? "Sending..." : "Make an Appointment"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SendRequest;
