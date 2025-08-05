import { useState } from "react";
import axios from "axios";
import PageWrapper from "./PageWrapper";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      await axios.post("http://localhost:5000/send", formData);
      setResponseMsg("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setResponseMsg("❌ Failed to send message.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
<PageWrapper>
  <div className="min-h-screen flex items-center justify-center px-4 py-10">
    <section className="w-full max-w-xl bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {responseMsg && (
          <p className="text-center text-sm mt-2">{responseMsg}</p>
        )}
      </form>
    </section>
  </div>
</PageWrapper>

  );
};

export default Contact;
