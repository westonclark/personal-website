/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YDWB0iULW5Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-background py-4 shadow-sm px-6 lg:px-36 sticky top-0 z-20">
        <div className="container flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CodeIcon className="h-6 w-6" />
            <span className="font-bold text-lg">Weston Clark</span>
          </Link>
          <nav className="hidden space-x-4 sm:flex">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MenuIcon className="h-6 w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen mt-4">
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    className="group flex items-center justify-center py-3 active w-full font-large text-xl"
                  >
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="#experience"
                    className="group flex items-center justify-center py-3 active w-full font-medium text-xl"
                  >
                    Experience
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="#projects"
                    className="group flex items-center justify-center py-3 active w-full font-medium text-xl"
                  >
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="#contact"
                    className="group flex items-center justify-center py-3 active w-full font-medium text-xl"
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="about"
          className="bg-background py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center"
        >
          <div className="container grid gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-16 px-6 lg:px-36">
            <div className="flex flex-col items-start justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Weston Clark
              </h1>
              <h2 className="text-xl font-medium text-muted-foreground sm:text-3xl">
                Software Engineer
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Hello, my name is Weston Clark and I&apos;m a Software Engineer
                and Audio Engineer based in Portland, OR.
              </p>
              <p className="text-muted-foreground md:text-lg">
                {" "}
                When I&apos;m not coding, you can catch me watching Survivor,
                playing Dungeons & Dragons, or buried deep in the latest fantasy
                novel.
              </p>
            </div>
            <Image
              src="/sushi-cat.jpg"
              alt="John Doe"
              className="hidden mx-auto rounded-full"
              width="400"
              height="400"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
              priority={true}
            />
          </div>
        </section>
        <section
          id="experience"
          className="bg-muted py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center"
        >
          <div className="container px-6 lg:px-36">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Work Experience
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Some of the cool companies I&apos;ve gotten to work with.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Link
                        href="https://www.madwire.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Madwire
                      </Link>
                    </CardTitle>
                    <CardDescription>Software Engineer II</CardDescription>
                    <CardDescription>May 2024 - Present</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Developed and maintained web servers, REST apis, and
                      shared infrastructure using Node.js, MySQL, Docker, and
                      Kubernetes. Collaborated with cross-functional teams to
                      deliver high-quality software solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Link
                        href="https://www.watch-dogs.io/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Watchdogs
                      </Link>
                    </CardTitle>
                    <CardDescription>Software Engineer</CardDescription>
                    <CardDescription>Feb 2023 - May 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Designed and built a REST API complete with a Redis cache.
                      Integrated Cloudwatch logs via the AWS SDK for real time
                      monitoring of Lambda metrics. Oversaw containerisation and
                      deployment on Heroku.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Link
                        href="https://www.octaneavl.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Octane AVL
                      </Link>
                    </CardTitle>
                    <CardDescription>Audio Engineer</CardDescription>
                    <CardDescription>Jan 2018 - Feb 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Designed and installed custom audio infrastructure for
                      live concert venues and recording studios. Collaborated
                      with clients and engineers to troubleshoot and optimize
                      audio systems.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="bg-background py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center"
        >
          <div className="container px-6 lg:px-36">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Projects
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Check out some projects that I&apos;ve created.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Digital Hippo</CardTitle>
                    <CardDescription>
                      E-Commerce Web Application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Full Stack digital marketplace built with Next.js, Paylaod
                      CMS, and MongoDB. Includes an admin dashboard, email
                      verification system, and payment system powered by Stripe.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://github.com/westonclark/digital-hippo/tree/main"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}
                      target="_blank"
                    >
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Fader Keys</CardTitle>
                    <CardDescription>
                      DAW MIDI Controller Application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A desktop application built with C++ and the JUCE
                      framework. The application allows users to control the
                      volume of mulitple faders in thier recording software
                      using the Qwerty keyboard.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://github.com/westonclark/fader-keys"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}
                      target="_blank"
                    >
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>iPhone Studio Mic</CardTitle>
                    <CardDescription>Mobile App</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A mobile app written in Swift. The app allows users to
                      easily integrate the iPhone microphone and its built in
                      compression effects into thier studio recording workflow
                      with near zero latency.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://github.com/westonclark/iPhone-Studio-Mic"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}
                      target="_blank"
                    >
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="bg-muted py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center"
        >
          <div className="container px-6 lg:px-36">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Feel free to reach out with any inquiries or collaboration
                  opportunities.
                </p>
                <p className="mt-2 text-muted-foreground md:text-lg">
                  <Link
                    href="mailto: westoclark@gmail.com"
                    className="text-primary hover:underline underline-offset-4"
                  >
                    westoclark@gmail.com
                  </Link>
                </p>
              </div>
              {/* <form className="mx-auto max-w-md space-y-4"> */}
              {/*   <Input */}
              {/*     id="name" */}
              {/*     type="text" */}
              {/*     placeholder="Name" */}
              {/*     className="w-full" */}
              {/*     autoComplete="name" */}
              {/*   /> */}
              {/*   <Input */}
              {/*     id="email" */}
              {/*     type="email" */}
              {/*     placeholder="Email" */}
              {/*     className="w-full" */}
              {/*     autoComplete="email" */}
              {/*   /> */}
              {/*   <Textarea */}
              {/*     id="message" */}
              {/*     placeholder="Message" */}
              {/*     className="w-full" */}
              {/*   /> */}
              {/*   <Button type="submit" className="w-full"> */}
              {/*     Submit */}
              {/*   </Button> */}
              {/* </form> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background px-6 py-6 shadow-sm sm:px-6 lg:px-36">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Weston Clark.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <PdfIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/westoclark/"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
              target="_blank"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/westonclark"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
              target="_blank"
            >
              <GithubIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 1C5.37 1 0 6.37 0 13a11.94 11.94 0 0 0 8 11.39c.6.11.82-.26.82-.58v-2.2C7.73 22.91 6.84 21.61 6.56 20.6c-.18-.45-.98-1.6-.06-1.63.9-.03 1.54.83 1.75 1.17 1.03 1.69 2.65 1.21 3.31.92.1-.74.4-1.22.73-1.5-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.52 11.52 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.47 5.95.41.35.78 1.05.78 2.13v3.16c0 .32.22.69.83.58A11.94 11.94 0 0 0 24 13c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function PdfIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}
