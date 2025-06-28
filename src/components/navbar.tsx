import * as React from "react";
import {
  Button,
  Collapse,
  IconButton,
  Navbar as MTNavbar,
  Typography,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  CodeBracketSquareIcon,
  HomeIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "GitHub Profile",
    icon: CodeBracketSquareIcon,
    href: "/github-profile",
  },
  {
    name: "External Projects",
    icon: CodeBracketSquareIcon,
    href: "https://github.com/mrrda1969?tab=repositories",
  },

  //   {
  //     name: "Account",
  //     icon: UserCircleIcon,
  //   },
];

interface NavbarProps {
  children: React.ReactNode;
  href?: string;
}

function NavbarItem({ children, href }: NavbarProps) {
  return (
    <li>
      <Typography
        placeholder=""
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50"
      placeholder=""
    >
      <div className="conatiner mx-auto flex items-center justify-between">
        {/* <Typography
            color="blue-gray"
            className="text-lg font-bold"
            placeholder=""
          >
            RDA dev
          </Typography> */}
        <img src="/logo.svg" alt="logo" className="w-16 h-16" />

        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavbarItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavbarItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text" placeholder="">
            Sign In
          </Button>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavbarItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavbarItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
