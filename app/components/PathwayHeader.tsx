"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, LayoutGrid, Sparkles } from "lucide-react";
import { PATHWAYS } from "../data/pathways";

interface PathwayHeaderProps {
  currentId: number;
}

export default function PathwayHeader({ currentId }: PathwayHeaderProps) {
  const current = PATHWAYS.find((p) => p.id === currentId) || PATHWAYS[0];
  const prevPathway = PATHWAYS.find((p) => p.id === (currentId === 1 ? 13 : currentId - 1));
  const nextPathway = PATHWAYS.find((p) => p.id === (currentId === 13 ? 1 : currentId + 1));

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Left: Back to Hub Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
            title="Return to Pathways Hub"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to Hub</span>
            <span className="sm:hidden">Hub</span>
          </Link>

          <span className="h-4 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

          {/* Pathway Identity Tag */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300">
              <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              Pathway {current.id}
            </span>
            <h1 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate max-w-[200px] md:max-w-md">
              {current.title}
            </h1>
          </div>
        </div>

        {/* Right: Quick Previous / Next Navigation */}
        <div className="flex items-center gap-1 sm:gap-2">
          {prevPathway && (
            <Link
              href={prevPathway.route}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title={`Previous: Pathway ${prevPathway.id} - ${prevPathway.title}`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Prev ({prevPathway.id})</span>
            </Link>
          )}

          <Link
            href="/"
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Browse All 13 Pathways"
          >
            <LayoutGrid className="w-4 h-4" />
          </Link>

          {nextPathway && (
            <Link
              href={nextPathway.route}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition"
              title={`Next: Pathway ${nextPathway.id} - ${nextPathway.title}`}
            >
              <span className="hidden md:inline">Next ({nextPathway.id})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
