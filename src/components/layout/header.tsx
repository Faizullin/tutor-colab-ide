"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Code, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { useLanguage } from "@/store/language-context";

export default function Header() {
  // Mock user state since Clerk isn't available in this environment
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const { currentLanguage, changeLanguage, languages } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-emerald-400" />
              <span className="text-2xl font-bold">
                <span className="">Tutor</span>
                <span className="text-emerald-400">IDE</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link href="/" className="px-3 py-2 transition-colors">
                Home
              </Link>
              <Link href="/posts" className="px-3 py-2 transition-colors">
                Posts
              </Link>
            </div>
          </div>

          {/* Action Buttons, Language Switcher & User Menu */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <select
              value={currentLanguage}
              onChange={(e) => changeLanguage(e.target.value as any)}
              className="border rounded px-2 py-1 text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              style={{ minWidth: 70 }}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.label}
                </option>
              ))}
            </select>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="relative rounded-md  border border-gray-700 transition-all"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="flex items-center gap-x-2">
                      <span className="text-sm">
                        {user?.username || "User"}
                      </span>
                      <div className="h-6 w-6 rounded-full">
                        <User className="h-4 w-4" />
                      </div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem
                    onClick={() => router.push("/dashboard/settings/account")}
                    className=" cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem className="text-red-400 cursor-pointer">
                    <SignOutButton />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="default"
                size="default"
                className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                onClick={() => router.push("/auth/login")}
              >
                Try
              </Button>
            )}

            {/* Mobile Menu Button */}
            <div className="ml-4 md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#252525] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-500"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[250px] bg-[#1e1e1e] text-white p-0 border-l border-gray-800"
                >
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="px-4 py-6 space-y-4">
                    <div className="flex items-center mb-6">
                      <Code className="h-6 w-6 text-emerald-400 mr-2" />
                      <span className="text-xl font-bold">
                        <span className="text-white">Code</span>
                        <span className="text-emerald-400">X</span>
                      </span>
                    </div>
                    <Link
                      href="/"
                      className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-[#252525] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/editor"
                      className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-[#252525] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Editor
                    </Link>
                    <Link
                      href="/feedback-form"
                      className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-[#252525] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Feedback
                    </Link>
                    {user && (
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-[#252525] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Admin Details
                      </Link>
                    )}
                    {!user ? (
                      <Button
                        variant="default"
                        size="default"
                        className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={() => {
                          router.push("/auth/login");
                          setIsMenuOpen(false);
                        }}
                      >
                        Try CodeX
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="default"
                        className="w-full mt-6 border-gray-700 text-red-400 hover:bg-[#252525] hover:text-white"
                      >
                        <SignOutButton />
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
