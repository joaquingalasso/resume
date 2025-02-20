import { intro, work, education, projects, skills, languages, contact } from "@/lib/content";
import type { Intro } from "@/lib/content";
import { Copy } from "@/components/copy";
import Image from "next/image";
import Logo from "@/public/azul.png";
import Footer from "@/public/footer.png";
import { DownloadPDF } from "@/components/download";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-[1fr_auto] gap-8 max-w-6xl mx-auto text-sm p-8">
      
      {/* Sección Principal */}
      <main className="grid gap-8">
        <Intro intro={intro} />

        <Section title="Experiencia laboral" items={work} />
        <Section title="Trayectoria académica" items={education} />
        <Section title="Producciones" items={projects} />
        <Section title="Habilidades" items={skills} />
        <Section title="Idiomas" items={languages} />

        {/* Contacto para versión mobile/notebook (se oculta en desktop) */}
        <section className="grid gap-4 fade-in-up !delay-1100 lg:hidden">
          <h2></h2>
          <Item {...contact} />
        </section>

        <p className="text-muted-foreground text-xs fade-in-up !delay-1200">
          &copy; {new Date().getFullYear()} {intro.name}
        </p>

        <footer className="w-full mt-8">
          <Image 
            src={Footer} 
            alt="Footer" 
            layout="responsive" 
            width={1920} 
            height={400} 
            className="object-cover w-full h-auto fade-in-up" 
          />
        </footer>     
      </main>

      {/* Contacto fijo para versión de escritorio (se oculta en mobile) */}
      <aside className="hidden lg:block sticky top-8 self-start w-64 p-4 fade-in-up">
        <h2 className="text-lg font-bold mb-4 "></h2>
        <Item {...contact} />
      </aside>
    </div>
    
  );
}

interface IntroProps {
  intro: Intro;
}

function Intro({ intro }: IntroProps) {
  return (
    <section className="grid gap-4">
      <Image
        src={Logo}
        alt={intro.name}
        width={200}
        height={200}
        className="mb-8 fade-in-up"
      />

      <h1 className="fade-in-up !delay-100">{intro.name}</h1>

      <div className="dont-print flex gap-4 fade-in-up !delay-200">
        <a href={intro.href} target="_blank">Portfolio</a>
        <a href={intro.github} target="_blank">Github</a>
        <a href={intro.linkedin} target="_blank">LinkedIn</a>
        <Copy text={intro.email}>Email</Copy>
        <DownloadPDF
          pdfUrl="../resume.pdf"
          fileName={`${intro.name.toLowerCase().replace(/\s/g, "_")}_cv_2025.pdf`}
        />
      </div>

      <p className="text-muted-foreground max-w-prose fade-in-up !delay-300">
        {intro.about}
      </p>
    </section>
  );
}

function Section({ title, items }: { title: string; items: ItemProps[] }) {
  return (
    <section className="grid gap-4 fade-in-up">
      <h2>{title}</h2>
      <div className="grid divide-y">
        {items.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

type ItemProps = {
  title: string;
  date?: string;
  description: string[];
  href?: string;
  location?: string;
};

function Item({ title, date, description, href, location, isAside = false }: ItemProps) {
  return (
    <section
      className="grid py-3 sm:gap-2 px-3 -mx-3 hover:bg-muted/50 transition-all"
      style={isAside ? { gridTemplateColumns: "unset" } : {}}
    >
      {!isAside && (
        <div>
          <h3 className="font-medium mb-4 sm:mb-0">{title}</h3>
          {date && <p className="text-muted-foreground text-xs sm:text-sm">{date}</p>}
          {location && <p className="text-muted-foreground text-xs sm:text-sm">{location}</p>}
        </div>
      )}
      <div className="grid gap-1">
        {description.map((item, i) => (
          <p key={i} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </div>
    </section>
  );
}

