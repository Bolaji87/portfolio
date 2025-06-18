import Home from "@/app/_components/Home";
import About from "@/app/_components/About";
import Projects from "@/app/_components/Projects";

export default function Page() {
  return (
    <div className="pt-20">
      <section id="/">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* <section id="skills">
        <About />
      </section>
      <section id="contact-me">
        <About />
      </section> */}
    </div>
  );
}
