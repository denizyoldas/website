import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./nav-item";

const MENU = {
  "/": "Ana Sayfa",
  "/about": "Hakkımda",
  "/bookmarks": "Yer İmleri",
  "/blog": "Blog",
};

function Header() {
  const [placeholder, setPlaceholder] = useState<string>("theme dark");
  let theme;

  const COMMANDS = {
    theme: {
      help: () => "Change the theme. `light` or `dark`",
      func: (event: any, value: string) => {
        if (!value) {
          setPlaceholder("Missing theme");
          return;
        }
        console.log("theme", value);
        if (["light", "dark"].includes(value)) {
          localStorage.setItem("theme", value);
          theme = value;
          if (value === "dark") document.documentElement.classList.add("dark");
          else document.documentElement.classList.remove("dark");
        } else {
          setPlaceholder(`${value} is not a valid theme`);
        }
      },
    },
  };

  const CommandInputKeypress = (e) => {
    if (e.key === "Enter") {
      const { value } = e.target;
      if (!value) return;
      const [command, ...args] = value.split(" ");

      if (COMMANDS[command]) {
        COMMANDS[command].func(e, args.join(" "));
      } else {
        setPlaceholder(`${command} not found`);
      }
      e.target.value = "";
    }
  };

  return (
    <header className="prose dark:prose-invert container mx-auto p-4 pb-5 flex flex-col">
      <div className="flex flex-row">
        <Link href="/" passHref>
          <code className="text-base md:text-2xl font-bold text-black dark:text-white">
            deniz@aksu:$
          </code>
        </Link>
        <input
          className=" w-full ml-2 text-base md:text-2xl focus-visible:outline-none font-mono bg-light dark:bg-dark"
          type="text"
          placeholder={placeholder}
          onKeyPress={CommandInputKeypress}
        />
      </div>

      <nav className="mt-2">
        <ul className="flex flex-row flex-wrap items-center">
          {Object.keys(MENU).map((path) => (
            <NavItem key={path} href={path}>
              {MENU[path]}
            </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
