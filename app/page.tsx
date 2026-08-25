"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Flower2,
  Search,
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { PATHWAYS, PathwayMeta } from "./data/pathways";

export default function MasterHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPathways = useMemo(() => {
    return PATHWAYS.filter((pathway) => {
      const matchesCategory =
        selectedCategory === "all" || pathway.categoryId === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        pathway.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pathway.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pathway.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pathway.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        `pathway ${pathway.id}`.includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Brand Navigation */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Mantra Wellbeing
              </span>
              <h1 className="text-base font-bold text-slate-900 leading-tight">
                Pathways Portal
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              13 Interactive Pathways
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-800 border border-emerald-300/40 mb-4 animate-fade-in">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Curated by Wellness Experts & Clinical Psychologists</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Explore Your Journey to{" "}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Holistic Wellbeing
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Choose any pathway block below to start your guided session—featuring yoga flows, dietary blueprints, therapeutic routines, and custom recovery plans.
        </p>

        {/* Search Bar & Quick Stats */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative flex items-center shadow-sm">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pathways (e.g., Morning Yoga, Diet, Flexibility, Anxiety)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-2xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 text-xs text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Pathway selector */}
      <section className="sticky top-16 z-30 border-b border-slate-200/80 bg-slate-50/95 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 sm:text-sm">
            <Flower2 className="h-4 w-4" />
            <span>Pathways</span>
            <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[11px]">13</span>
          </div>

          <label className="flex items-center gap-2 text-xs font-semibold text-slate-600" htmlFor="pathway-category">
            <span>Show</span>
            <select
              id="pathway-category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-xs outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="all">All Pathways (13)</option>
              <option value="yoga">Yoga Pathways (13)</option>
            </select>
          </label>
        </div>
      </section>

      {/* Pathways Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {filteredPathways.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 shadow-xs max-w-md mx-auto my-12">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No pathways found</h3>
            <p className="text-xs text-slate-500 mt-1">
              No results for &ldquo;{searchQuery}&rdquo;. Try another keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPathways.map((pathway) => (
              <PathwayCard key={pathway.id} pathway={pathway} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-700">Mantra Wellbeing Portal</span>
            <span>&bull; All 13 Dedicated Pathways</span>
          </div>
          <div>
            <span>Empowering health, mindfulness, and nutrition every day.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PathwayCard({ pathway }: { pathway: PathwayMeta }) {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Top Banner / Image Preview */}
      <div className="relative h-44 w-full bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center border-b border-slate-100">
        {pathway.image ? (
          <div className="relative w-full h-full">
            <Image
              src={pathway.image}
              alt={pathway.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-8 h-8" />
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wide bg-white/95 text-slate-900 shadow-xs backdrop-blur-xs">
            Pathway {pathway.id.toString().padStart(2, "0")}
          </span>

          {pathway.badge && (
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-600 text-white shadow-xs">
              {pathway.badge}
            </span>
          )}
        </div>

        {/* Overlay Category on Bottom of Thumbnail */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="font-semibold drop-shadow-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            {pathway.category}
          </span>
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-medium">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>{pathway.duration}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
            {pathway.title}
          </h3>
          <p className="text-xs font-semibold text-emerald-700 mt-0.5">
            {pathway.subtitle}
          </p>
          <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
            {pathway.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {pathway.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200/50"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[11px] font-semibold text-slate-500">
            Level: <span className="text-slate-800">{pathway.difficulty}</span>
          </div>

          <Link
            href={pathway.route}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md hover:shadow-emerald-600/20 active:scale-98 transition-all"
          >
            <span>Start Pathway</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
