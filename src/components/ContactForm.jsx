import React, { useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbqqgyo");

  const titleContent = (
    <span>
      <span className="underline decoration-secondary">Contact</span> Me
    </span>
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section id="contact" data-aos="fade-up">
      <Container>
        <div className="mt-10">
          <div className="grid w-[80%] sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md border-2 border-secondary">
            <div>
              <Title text={titleContent} />
              <p className="text-md text-slate-500 mt-4 leading-relaxed">
                Get in touch for job opportunities, collaborations, or even just
                a quick question.
              </p>

              <div className="mt-12">
                <DotLottieReact
                  src="https://lottie.host/3e16f699-1f0f-4029-86f9-870ef4391a5c/VmwJlU97pa.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} action="https://formspree.io/f/mrbqqgyo" method="POST">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full text-slate-900 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-secondary"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full text-slate-900 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-secondary"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full text-slate-900 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-secondary"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="6"
                className="w-full text-slate-900 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-secondary"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="text-white bg-secondary hover:bg-[#007575] rounded-md text-[15px] font-medium px-4 py-2 w-full !mt-6"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
