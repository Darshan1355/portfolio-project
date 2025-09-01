import { useState, useRef, useEffect } from "react";
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

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide");
            observer.unobserve(entry.target); // only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      await axios.post("https://portfolio-project-5fd6.onrender.com/send", formData);
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
        <section
          ref={sectionRef}
          className="w-full max-w-xl bg-[#1a1a1a] p-6 shadow-lg rounded-lg border border-yellow-300 opacity-0"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-400 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-400 rounded"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-400 rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-transparent text-yellow-400 px-4 py-2 rounded border-2 border-orange-400 w-full hover:bg-yellow-400 hover:border-orange-500 hover:text-white"
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
