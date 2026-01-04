"use client";

import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import themeColors from "../themeColors/themeColor";

const HomeContactSection = () => {
  const theme = themeColors.dark;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toast, setToast] = useState({ visible: false, message: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};  


  const showToast = (message: string, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ visible: false, message: "", type: "" });
    }, 3000);
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name.trim()) return "Please enter your name.";
    if (/\d/.test(name)) return "Name cannot contain numbers.";
    if (!email.trim()) return "Please enter your email.";
    if (!email.includes("@gmail.com")) return "Email must be a valid Gmail address.";
    if (!message.trim()) return "Please enter your message.";

    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      showToast(error, "error");
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showToast("Message sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        showToast("Failed to send message. Try again.", "error");
      }
    } catch (err) {
      showToast("Something went wrong. Try again.", "error");
    }

    setIsSending(false);
  };

  return (
    <section style={{ background: theme.background, color: theme.text }} className="py-28 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 ">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6">
            Let’s Talk
            <span className="block">with HoodAnix Team</span>
          </h2>
          <p className="text-lg mb-10">
            Have questions about your hoodie order, size guide, or custom design? We’re here to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FiPhone className="text-2xl" />
              <div>
                <h4 className="text-1xl font-semibold">Phone</h4>
                <p>+92 370 2675457</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiMail className="text-2xl" />
              <div>
                <h4 className="text-1xl font-semibold">Email</h4>
                <p>bilalusman1291@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl" />
              <div>
                <h4 className="text-1xl font-semibold">Address</h4>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border p-10 rounded-3xl relative" style={{ background: theme.background, color: theme.text }}>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl outline-none"
              ></textarea>
            </div>

            <button
              style={{ background: theme.text, color: theme.background }}
              className="w-full font-semibold py-3 rounded-xl cursor-pointer"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {toast.visible && (
            <div
              className={`absolute top-4 right-4 px-6 py-3 rounded shadow-lg text-white font-semibold ${
                toast.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {toast.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;
