"use client";

import React from 'react';

/**
 * AdminHeader Component
 * 
 * A premium, dark-themed header for the VBUS Admin Dashboard.
 * Features:
 * - Search bar with glassmorphism effects
 * - Notification system with active indicator
 * - Dynamic user profile section
 * - Responsive layout with sleek dark aesthetics
 */
const AdminHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-[#0B1324] border-b border-white/5 backdrop-blur-md sticky top-0 z-40">
      {/* Search Section */}
      <div className="relative w-[400px]">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-gray-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm tuyến đường, giá vé..."
          className="block w-full pl-12 pr-4 py-2.5 bg-[#161F30]/80 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300 text-sm shadow-inner"
        />
      </div>

      {/* Action & Profile Section */}
      <div className="flex items-center space-x-8">
        {/* Utility Icons */}
        <div className="flex items-center space-x-5">
          <button className="group relative p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2.5 right-2.5 block h-2 w-2 rounded-full bg-rose-500 ring-2 ring-[#0B1324] group-hover:scale-110 transition-transform" />
          </button>
          
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        {/* Separator */}
        <div className="h-10 w-[1px] bg-white/10" />

        {/* User Identity */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-[#00E5FF] leading-tight">Administrator</p>
            <p className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase mt-0.5">MASTER CONTROL</p>
          </div>
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-sky-500/20">
              <div className="h-full w-full rounded-full bg-[#0B1324] flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.pravatar.cc/150?u=vbus-admin"
                  alt="Admin Profile"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-emerald-500 border-2 border-[#0B1324] rounded-full shadow-lg shadow-emerald-500/50" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
