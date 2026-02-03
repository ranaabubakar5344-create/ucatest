"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { ReactNode, SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Youtube,
  Search,
  Menu,
  X,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  display?: ReactNode;
};

type Programme = { label: string; href: string };
type SubCategory = { label: string; href: string; items: Programme[] };
type MegaSection = {
  label: string;
  href: string;
  image: string;
  columns: {
    title: string;
    lists: SubCategory[];
  }[];
};

const MEGA_MENUS: Record<string, MegaSection> = {
  "PROGRAMMES": {
    label: "PROGRAMMES",
    href: "/programmes",
    image: "/pro.webp",
    columns: [
      {
        title: "Programmes",
        lists: [
          {
            label: "UnderGraduate Programmes",
            href: "/programmes",
            items: [
              { label: "Bsc(Hons) Computer Science", href: "/programmes/computer-science" },
              { label: "Bsc (Hons) Games Development", href: "/programmes/game-development" },
              { label: "BA (Hons) Graphic Design", href: "/programmes/graphic-design" },

              { label: "BA (Hons) Buisness & Management", href: "/programmes/business-management" },
              { label: "BA (Hons) Visual Communication", href: "/programmes/vs" },
              { label: "BA (Hons) Digital Marketing & Social Media", href: "/programmes/dmsm" },

 
            ],
          },
          // {
          //   label: "Faculty of Performing Arts",
          //   href: "/faculty/performing",
          //   items: [
          //     { label: "School of Music", href: "/school/music" },
          //     { label: "School of Dance", href: "/school/dance" },
          //     { label: "School of Theatre", href: "/school/theatre" },
          //   ],
          // },
        ],
      },
      {
        title: "Programmes",
        lists: [
          {
            label: "POSTGRADUATE",
            href: "/programmes/diplomas",
            items: [
              { label: "Master of Buisness Administration", href: "/programmes/mba" },
              { label: "Msc Game Engineering", href: "/programmes/msc-game-engineering" },
            ],
          },
          {
            label: "ENTRY ROUTES",
            href: "/programmes/degrees",
            items: [
              { label: "Integrated Foundation Year", href: "/programmes/design-practice" },
              { label: "Integrated Pre-Masters", href: "/programmes/biophilic" },
            ],
          },
        ],
      },
    ],
  },

  EXPERIENCE: {
    label: "EXPERIENCE",
    href: "/experience",
    image: "/mega/experience.jpg",
    columns: [
      {
        title: "Campus",
        lists: [
          {
            label: "Life at Campus",
            href: "/experience/campus-life",
            items: [
              { label: "Facilities", href: "/experience/facilities" },
              { label: "Student Clubs", href: "/experience/clubs" },
              { label: "Gallery & Exhibitions", href: "/experience/exhibitions" },
            ],
          },
        ],
      },
      {
        title: "Events",
        lists: [
          {
            label: "What's On",
            href: "/experience/events",
            items: [
              { label: "Workshops", href: "/experience/events/workshops" },
              { label: "Open Day", href: "/experience/events/open-day" },
              { label: "Performances", href: "/experience/events/performances" },
            ],
          },
        ],
      },
    ],
  },

  ADMISSIONS: {
    label: "ADMISSIONS",
    href: "/admissions",
    image: "/mega/admissions.jpg",
    columns: [
      {
        title: "Apply",
        lists: [
          {
            label: "How to Apply",
            href: "/admissions/how-to-apply",
            items: [
              { label: "Entry Requirements", href: "/admissions/requirements" },
              { label: "Dates & Deadlines", href: "/admissions/dates" },
              { label: "Portfolio Guide", href: "/admissions/portfolio" },
            ],
          },
        ],
      },
      {
        title: "Fees & Support",
        lists: [
          {
            label: "Finance",
            href: "/admissions/fees",
            items: [
              { label: "Tuition Fees", href: "/admissions/fees" },
              { label: "Scholarships", href: "/admissions/scholarships" },
              { label: "Payment Plans", href: "/admissions/payment-plans" },
            ],
          },
        ],
      },
    ],
  },

  INDUSTRY: {
    label: "INDUSTRY",
    href: "/industry",
    image: "/mega/industry.jpg",
    columns: [
      {
        title: "Partners",
        lists: [
          {
            label: "Collaborations",
            href: "/industry/partnerships",
            items: [
              { label: "Industry Projects", href: "/industry/projects" },
              { label: "Internships", href: "/industry/internships" },
              { label: "Mentorship", href: "/industry/mentorship" },
            ],
          },
        ],
      },
      {
        title: "Careers",
        lists: [
          {
            label: "Opportunities",
            href: "/industry/careers",
            items: [
              { label: "Career Services", href: "/industry/career-services" },
              { label: "Alumni Network", href: "/alumni" },
              { label: "Hire Talent", href: "/industry/hire" },
            ],
          },
        ],
      },
    ],
  },

"ABOUT US": {
  label: "ABOUT US",
  href: "/about",
  image: "/mega/about.jpg",
  columns: [
    {
      title: "Who We Are",
      lists: [
        {
          label: "About",
          href: "/about",
          items: [
            { label: "About FEUC", href: "/about-feuc" },
            { label: "UCA UK", href: "/about-uca-uk" },
            { label: "Why Choose Us", href: "/about/why-us" },
          ],
        },
      ],
    },
    {
      title: "Our Team",
      lists: [
        {
          label: "People",
          href: "/about/team",
          items: [
            { label: "CEO Message", href: "/about/team/leadership" },
            { label: "Faculty Members", href: "/about/team/faculty" },
            // { label: "Support Staff", href: "/about/team/staff" },
          ],
        },
      ],
    },
  ],
},

};

const navItems: NavItem[] = [
  {
    label: "PROGRAMMES",
    href: "/programmes",
    display: (
      <>
        
        PROGRAMMES
      </>
    ),
  },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "ADMISSIONS", href: "/admissions" },
  { label: "INDUSTRY", href: "/industry" },
  {
    label: "ABOUT US",
    href: "/about",
    display: (
      <>
        ABOUT US
      </>
    ),
  },
];

// icons
function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.7 5.3c1 .9 2.2 1.4 3.5 1.5V10c-1.4 0-2.8-.4-4-1.2v6.4c0 3.2-2.6 5.8-5.8 5.8S4.6 18.4 4.6 15.2c0-3.2 2.6-5.8 5.8-5.8.3 0 .6 0 .9.1v3.3c-.3-.2-.6-.3-1-.3-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6 2.6-1.1 2.6-2.6V3.9h3.8c.1.5.4 1 .7 1.4z" />
    </svg>
  );
}

function WeChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.7 4.5C5.8 4.5 2.6 7 2.6 10.2c0 1.8 1 3.4 2.6 4.4l-.7 2.1 2.3-1.2c.8.2 1.5.3 2.3.3.2 0 .4 0 .6 0-.5-.7-.8-1.5-.8-2.4 0-2.9 2.8-5.2 6.2-5.2.3 0 .5 0 .8 0C15.6 6.1 12.9 4.5 9.7 4.5zm-2 4.2c.5 0 .9.3.9.8s-.4.8-.9.8-.9-.3-.9-.8.4-.8.9-.8zm4 0c.5 0 .9.3.9.8s-.4.8-.9.8-.9-.3-.9-.8.4-.8.9-.8z" />
      <path d="M15.2 8.9c-3 0-5.5 1.9-5.5 4.4s2.5 4.4 5.5 4.4c.6 0 1.2-.1 1.8-.2l2 1-.6-1.8c1.2-.8 2-2 2-3.4 0-2.5-2.5-4.4-5.2-4.4zM13.4 12c.4 0 .8.3.8.7s-.3.7-.8.7-.8-.3-.8-.7.3-.7.8-.7zm3.4 0c.4 0 .8.3.8.7s-.3.7-.8.7-.8-.3-.8-.7.3-.7.8-.7z" />
    </svg>
  );
}

function DesktopMegaNav({
  openKey,
  setOpenKey,
  cancelClose,
  scheduleClose,
}: {
  openKey: string | null;
  setOpenKey: (v: string | null) => void;
  cancelClose: () => void;
  scheduleClose: () => void;
}) {
  return (
    <nav className="hidden lg:flex items-center gap-6 whitespace-nowrap">
      {navItems.map((item) => {
        const isOpen = openKey === item.label;

        return (
          <div
            key={item.label}
            className="relative shrink-0"
            onMouseEnter={() => {
              cancelClose();
              setOpenKey(item.label);
            }}
            onMouseLeave={scheduleClose}
          >
            <Link
              href={item.href}
              className={`relative inline-flex items-center gap-2 whitespace-nowrap text-white hover:text-white
              text-[13px] xl:text-[15px] 2xl:text-base font-semibold uppercase tracking-wide leading-none`}
            >
              <span className="whitespace-nowrap">{item.label}</span>

              {/* plus always aligned because no wrap */}
              <span className="text-white leading-none -translate-y-[1px]">+</span>

              <span
                className={`absolute left-0 -bottom-2 h-[3px] w-full bg-yellow-300 transition-opacity ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);


  // mega state
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenKey(null), 130);
  };

  const mega = openKey ? MEGA_MENUS[openKey] : null;

  return (
    <>
      {/* TOP BAR (NOT STICKY) */}
      <div className="bg-[#560045]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-11 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-8 text-white text-sm">
              <Link href="/alumni" className="hover:text-white">
                Alumni <span className="ml-1">+</span>
              </Link>
              <Link href="/staff" className="hover:text-white">
                Staff <span className="ml-1">+</span>
              </Link>
              <Link href="/students" className="hover:text-white">
                Students <span className="ml-1">+</span>
              </Link>
            </div>

            {/*  small screens overflow fix + clean */}
            <div className="flex items-center gap-2 sm:gap-3 ml-auto">
              <Link
                href="#"
                aria-label="TikTok"
                className="hidden sm:inline-flex text-white hover:text-white transition"
              >
                <TikTokIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-whitehover:text-white transition"
              >
                <Instagram className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-white transition"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Telegram"
                className="hidden md:inline-flex text-white hover:text-white transition"
              >
                <Send className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className=" md:inline-flex text-white hover:text-white transition"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="hidden md:inline-flex text-white hover:text-white transition"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="WeChat"
                className="hidden lg:inline-flex text-white hover:text-white transition"
              >
                <WeChatIcon className="h-5 w-5" />
              </Link>

              <button
                aria-label="Search"
                className="ml-1 text-white hover:text-white transition"
              >
                <Search className="h-5 w-5" />
              </button>

              <Link
                href="/apply"
                className="ml-2 sm:ml-3 h-10 sm:h-11 px-4 sm:px-6 inline-flex items-center justify-center bg-[#940148] text-white font-semibold tracking-wide text-sm uppercase"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  ONLY THIS PART IS STICKY */}
      <div className="sticky top-0 z-50">
        <div className="bg-[#940148] relative">
          <div className="mx-auto max-w-7xl px-4">
            <div className="h-[96px] md:h-[110px] flex items-center gap-6">
              {/* Logo */}
<Link href="/" className="flex items-center shrink-0">
  <div className="relative w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] h-auto">
    <Image
      src="/logo1.png"
      alt="UCA Logo"
      width={600}
      height={220}
      priority
      className="
        w-full 
        h-auto
        object-contain
      "
    />
  </div>
</Link>


              {/* Desktop nav center */}
          
<div className="hidden lg:flex flex-1 items-center justify-start pl-6 min-w-0">
  <DesktopMegaNav
    openKey={openKey}
    setOpenKey={setOpenKey}
    cancelClose={cancelClose}
    scheduleClose={scheduleClose}
  />
</div>


              {/* Mobile menu button */}
              <button
                className="lg:hidden ml-auto text-white hover:text-white"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/*  MEGA MENU */}
          <AnimatePresence>
            {mega ? (
              <motion.div
                key={openKey}
                className="absolute left-0 right-0 top-full"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="bg-[#560045] border-t border-white/10 shadow-2xl">
                  {/*  responsive bar (no overflow on small widths) */}
                  <motion.div
                    className="h-1 bg-yellow-300 w-48 sm:w-72 md:w-96 mx-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    style={{ transformOrigin: "center" }}
                  />

                  <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-12 gap-0 py-8">
                      {/* Left image */}
                      <motion.div
                        className="col-span-3 pr-6"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.12, ease: "easeOut" }}
                      >
                        <div className="relative h-[320px] rounded-2xl overflow-hidden ring-1 ring-white/10">
                          <Image
                            src={mega.image}
                            alt={mega.label}
                            fill
                            className="object-cover"
                            sizes="320px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-white text-xs uppercase tracking-widest">
                              Explore
                            </div>
                            <div className="text-white font-bold text-lg leading-snug">
                              {mega.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Right columns */}
                      <div className="col-span-9 grid grid-cols-2">
                        <motion.div
                          className="p-8 border-l border-white/10"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.12, ease: "easeOut" }}
                        >
                          <div className="text-white text-xs uppercase tracking-widest mb-4">
                            {mega.columns[0]?.title}
                          </div>

                          <div className="space-y-5">
                            {mega.columns[0]?.lists?.map((list) => (
                              <div key={list.label}>
                                <Link
                                  href={list.href}
                                  className="text-yellow-300 text-sm font-semibold hover:text-yellow-200"
                                >
                                  {list.label}
                                </Link>

                                <div className="mt-2 space-y-1">
                                  {list.items.map((it) => (
                                    <Link
                                      key={it.href}
                                      href={it.href}
                                      className="block rounded-xl px-3 py-2 text-sm text-white hover:text-white hover:bg-white/10"
                                    >
                                      {it.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          className="p-8 border-l border-white/10"
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          transition={{ duration: 0.12, ease: "easeOut" }}
                        >
                          <div className="text-white text-xs uppercase tracking-widest mb-4">
                            {mega.columns[1]?.title}
                          </div>

                          <div className="space-y-5">
                            {mega.columns[1]?.lists?.map((list) => (
                              <div key={list.label}>
                                <Link
                                  href={list.href}
                                  className="text-yellow-300 text-sm font-semibold hover:text-yellow-200"
                                >
                                  {list.label}
                                </Link>

                                <div className="mt-2 space-y-1">
                                  {list.items.map((it) => (
                                    <Link
                                      key={it.href}
                                      href={it.href}
                                      className="block rounded-xl px-3 py-2 text-sm text-white hover:text-white hover:bg-white/10"
                                    >
                                      {it.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Mobile dropdown */}
         {open && (
  <div className="lg:hidden bg-[#940148]">
    <div className="mx-auto max-w-7xl px-4 pb-6">
      <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 overflow-hidden">

        {navItems.map((item) => {
          const mega = MEGA_MENUS[item.label];
          const isActive = mobileOpenKey === item.label;

          return (
            <div key={item.label} className="border-b border-white/10">
              
              {/* MAIN ITEM */}
              <button
                className="w-full flex items-center justify-between px-4 py-4 text-white font-semibold"
                onClick={() =>
                  setMobileOpenKey(isActive ? null : item.label)
                }
              >
                <span>{item.label}</span>
                <span className="text-lg">{isActive ? "−" : "+"}</span>
              </button>

              {/* EXPAND CONTENT */}
              {isActive && mega && (
                <div className="px-4 pb-4 space-y-6">

                  {mega.columns.map((col) => (
                    <div key={col.title}>
                      <div className="text-yellow-300 text-xs uppercase tracking-widest mb-2">
                        {col.title}
                      </div>

                      {col.lists.map((list) => (
                        <div key={list.label} className="mb-3">
                          <Link
                            href={list.href}
                            onClick={() => setOpen(false)}
                            className="block text-white font-semibold text-sm"
                          >
                            {list.label}
                          </Link>

                          <div className="mt-2 pl-3 space-y-1">
                            {list.items.map((it) => (
                              <Link
                                key={it.href}
                                href={it.href}
                                onClick={() => setOpen(false)}
                                className="block text-white/80 text-sm"
                              >
                                {it.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </>
  );
}
