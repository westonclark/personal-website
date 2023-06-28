import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col  lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Weston Clark</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Software Engineer</h2>
          <nav className="nav hidden lg:block">
            <ul className="mt-8 w-max">
              <li className="group flex items-center py-3 active">
                <a>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                </a>
              </li>
              <li className="group flex items-center py-3 active">
                <a>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                </a>
              </li>
              <li className="group flex items-center py-3 active">
                <a>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <p className="mb-4">
              This is the About Me section and this is where I write all about myself and the intresting things you want to know about me his is the About Me section and this is where I write all
              about myself and the intresting things you want to know about me his is the About Me section and this is where I write all about myself and the intresting things you
            </p>
            <p className="mb-4">
              This is the About Me section and this is where I write all about myself and the intresting things you want to know about me his is the About Me section and this is where I write all
              about myself and the
            </p>
          </section>
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <p className="mb-4">
              This is the Experience section and this is where I write all about myself and the intresting things you want to know about me his is the About Me section and this is where I write all
              about myself and the intresting things you want to know about me his is the About Me section and this is where I write all about myself and the intresting things you
            </p>
            <p className="mb-4">
              This is the About Me section and this is where I write all about myself and the intresting things you want to know about me his is the About Me section and this is where I write all
              about myself and the
            </p>
          </section>
          <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <p className="mb-4">
              This is the Projects section and this is where I write all about myself and the intresting things you want to know about me his is the About Me section and this is where I write all
              about myself and the intresting things you want to know about me his is the About Me section and this is where I write all about myself and the intresting things you
            </p>
            <p className="mb-4">
              This is the About Me section and this is where I write all about myself and the intresting things you want to know about me his is the About Me section and this is where I write all
              about myself and the
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
