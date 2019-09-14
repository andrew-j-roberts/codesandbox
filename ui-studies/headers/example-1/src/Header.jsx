/**
 * Header.jsx
 */

import React from "react";
import routes from "./routes";
import {
  Drawer,
  DrawerHeader,
  Flex,
  Icon,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Link,
  Stack,
  useColorMode,
  useTheme,
  PseudoBox
} from "@chakra-ui/core";
import ReactiveLayout from "./ReactiveLayout";

export default function Header() {
  const theme = useTheme();
  return (
    <ReactiveLayout
      breakpoint={theme.mobileBreakpoint}
      renderDesktop={function renderDesktop() {
        return DesktopHeader();
      }}
      renderMobile={function renderMobile() {
        return MobileHeader();
      }}
    />
  );
}

function DesktopHeader() {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const brandColorTheme = theme.colors.brand[colorMode];

  return (
    <header>
      <Stack
        fontFamily={"heading"}
        height={16}
        align="center"
        isInline
        spacing={4}
        marginX={4}
      >
        <Stack
          height={16}
          width={1 / 3}
          justify="center"
          align="center"
          isInline
          spacing={8}
        >
          {routes.map((route, key) => {
            return (
              <Link color={brandColorTheme.secondary} href="/" key={key}>
                {route.name}
              </Link>
            );
          })}
        </Stack>
        <Flex justify="center" width={1 / 3}>
          <Link href="/">
            <svg height="50" width="50">
              {/**
               * Brand logo goes here.
               * Dark mode POPS when you have the logo change colors too
               */}
              <circle
                cx="25"
                cy="25"
                r="22.5"
                stroke="black"
                strokeWidth="3"
                fill={brandColorTheme.primary}
              />
            </svg>
          </Link>
        </Flex>
        <Stack width={1 / 3} isInline spacing={4}>
          <InputGroup flexGrow={1}>
            <InputLeftElement
              children={
                <Icon name="search" color={brandColorTheme.secondary} />
              }
            />
            <Input
              minWidth="10px"
              flexGrow={1}
              aria-label="Search the website"
              color={brandColorTheme.primary}
              borderColor={brandColorTheme.secondary}
              transition="none"
              placeholder="Search"
              _placeholder={{ color: brandColorTheme.secondary }}
            />
          </InputGroup>
          <IconButton
            aria-label={
              colorMode === "light"
                ? "Activate Dark Mode"
                : "Activate Light Mode"
            }
            background={brandColorTheme.background}
            border="none"
            color={brandColorTheme.secondary}
            icon={colorMode === "light" ? "moon" : "sun"}
            onClick={toggleColorMode}
            transition="none"
          />
        </Stack>
      </Stack>
    </header>
  );
}

function MobileHeader() {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const brandColorTheme = theme.colors.brand[colorMode];
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const firstDrawerField = React.useRef();

  return (
    <header>
      <Stack height={16} align="center" isInline spacing={4} marginX={4}>
        <Link aria-label="link to home" href="/">
          <svg height="50" width="50">
            {/**
             * Brand logo goes here.
             * Dark mode POPS when you have the logo change colors too
             */}
            <circle
              cx="25"
              cy="25"
              r="22.5"
              stroke="black"
              stroke-width="3"
              fill={brandColorTheme.primary}
            />
          </svg>
        </Link>
        <InputGroup flex={1}>
          <InputLeftElement
            children={<Icon name="search" color={brandColorTheme.secondary} />}
          />
          <Input
            minWidth="10px"
            aria-label="Search the website"
            color={brandColorTheme.primary}
            borderColor={brandColorTheme.secondary}
            transition="none"
            placeholder="Search"
            _placeholder={{ color: brandColorTheme.secondary }}
          />
        </InputGroup>
        <IconButton
          aria-label={
            colorMode === "light" ? "Activate Dark Mode" : "Activate Light Mode"
          }
          background={brandColorTheme.background}
          border="none"
          color={brandColorTheme.secondary}
          icon={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
          transition="none"
        />
        <IconButton
          aria-label="Open navigation menu"
          background={brandColorTheme.background}
          border="none"
          fill={brandColorTheme.secondary}
          icon="menu"
          onClick={() => setDrawerIsOpen(!drawerIsOpen)}
          transition="none"
        />
      </Stack>

      {/* mobile navigation menu drawer */}
      <Drawer
        backgroundColor={brandColorTheme.background}
        zIndex={6}
        size={"full"}
        initialFocusRef={firstDrawerField}
        isOpen={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
      >
        <DrawerHeader
          height={16}
          align="center"
          isInline
          spacing={4}
          padding={0}
          marginX={4}
        >
          <Flex height={"100%"} justify="space-between" align="center">
            <Link href="/">
              <svg height="50" width="50">
                {/**
                 * Brand logo goes here.
                 * Dark mode POPS when you have the logo change colors too
                 */}
                <circle
                  cx="25"
                  cy="25"
                  r="22.5"
                  stroke="black"
                  strokeWidth="3"
                  fill={brandColorTheme.primary}
                />
              </svg>
            </Link>
            <Stack isInline space={4}>
              <IconButton
                aria-label={
                  colorMode === "light"
                    ? "Activate Dark Mode"
                    : "Activate Light Mode"
                }
                background={brandColorTheme.background}
                border="none"
                color={brandColorTheme.secondary}
                icon={colorMode === "light" ? "moon" : "sun"}
                onClick={toggleColorMode}
                transition="none"
              />
              <IconButton
                aria-label="Close navigation menu"
                background={brandColorTheme.background}
                border="none"
                color={brandColorTheme.secondary}
                icon="close"
                onClick={() => setDrawerIsOpen(false)}
                transition="none"
                ref={firstDrawerField}
              />
            </Stack>
          </Flex>
        </DrawerHeader>
        <Stack space={8} fontFamily={"heading"} >
          {routes.map((route, key) => {
            return (
              <PseudoBox
                fontSize="lg"
                _hover={{
                  color: brandColorTheme.primary,
                  backgroundColor: brandColorTheme.background20
                }}
              >
                <Flex
                  justify="center"
                  align="center"
                  height="3rem"
                  width="100%"
                >
                  <Link color={brandColorTheme.secondary} href="" key={key}>
                    {route.name}
                  </Link>
                </Flex>
              </PseudoBox>
            );
          })}
        </Stack>
      </Drawer>
    </header>
  );
}
