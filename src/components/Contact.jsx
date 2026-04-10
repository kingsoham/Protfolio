import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend, FiShield } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "18f04c72-9111-41ea-ab1f-fb80b908f1be", // IMPORTANT: Replace with your Web3Forms key
        name: data.name,
        email: data.email,
        message: data.message,
        subject: "New Transmission from Contact System",
        from_name: "Contact System"
      }),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.success) {
          toast.success("TRANSMISSION_COMPLETE 🚀");
          formRef.current.reset();
        } else {
          toast.error("CONNECTION_FAILURE (Need API Key) ❌");
          console.error("Web3Forms Error:", resData.message);
        }
        setIsSending(false);
      })
      .catch((err) => {
        toast.error("CONNECTION_FAILURE ❌");
        setIsSending(false);
      });
  };

  return (
    <div
      id="contactme"
      className="relative w-full min-h-screen bg-[#020202] flex flex-col items-center justify-center font-mono py-20 px-4"
    >
      <div className="z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            CONT<span className="text-cyan-500 block sm:inline">ACT</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 text-cyan-500/60 font-mono text-[10px] tracking-[0.4em] uppercase">
            <FiShield />
            <span>Protocol: Neural_Gate</span>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white/10 border border-white/20 p-8 md:p-12 space-y-8 rounded-2xl shadow-xl hover:border-cyan-500/30 transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-500/70 block ml-1">IDENT_SIGNATURE</label>
              <input
                name="name"
                type="text"
                placeholder="ENTER_NAME"
                required
                className="w-full bg-black/40 border-b border-white/20 py-4 px-5 text-white text-base outline-none focus:border-cyan-600 transition-all placeholder:text-white/20"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-500/70 block ml-1">COMM_PATH_ADDR</label>
              <input
                name="email"
                type="email"
                placeholder="ENTER_EMAIL"
                required
                className="w-full bg-black/40 border-b border-white/20 py-4 px-5 text-white text-base outline-none focus:border-cyan-600 transition-all placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-500/70 block ml-1">DATA_PAYLOAD</label>
            <textarea
              name="message"
              placeholder="INPUT_TRANSMISSION..."
              required
              className="w-full bg-black/40 border-b border-white/20 py-4 px-5 text-white text-base outline-none focus:border-cyan-600 transition-all min-h-[140px] resize-none placeholder:text-white/20"
            />
          </div>

          <div className="flex justify-center md:justify-end pt-4">
            <button
              type="submit"
              disabled={isSending}
              className={`group flex items-center space-x-4 text-black font-black text-sm uppercase tracking-[0.4em] px-16 py-5 rounded-sm transition-all shadow-lg ${isSending ? "bg-cyan-800 cursor-not-allowed" : "bg-cyan-600 hover:bg-cyan-500 hover:shadow-cyan-500/20"
                }`}
            >
              <span>{isSending ? "TRANSMITTING..." : "TRANSMIT"}</span>
              <FiSend className={`text-xl transition-transform ${isSending ? "animate-pulse" : "group-hover:translate-x-1"}`} />
            </button>
          </div>
        </form>
      </div>

      <ToastContainer
        position="bottom-right"
        toastClassName="bg-black border border-cyan-500/30 text-white font-mono text-[10px] rounded-none"
        progressClassName="bg-cyan-600"
      />
    </div>
  );
};

export default Contact;
