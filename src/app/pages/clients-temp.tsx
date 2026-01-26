        {/* Client Growth Report Section - Compact White Tone */}
        <div className="mb-16 py-12 bg-white relative overflow-hidden border-y border-zinc-100">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Compact Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#fabf37] rounded-lg">
                  <TrendingUp className="size-4 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                  Growth Timeline
                </h3>
              </div>
              
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-zinc-400">+900% <span className="text-[#fabf37]">Total</span></span>
                <span className="text-zinc-400">96.2% <span className="text-black">Retention</span></span>
              </div>
            </div>

            {/* Horizontal Scrolling Compact Cards */}
            <div className="relative overflow-hidden -mx-4 px-4">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 35, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex items-center gap-4 w-max"
              >
                {[
                  { year: "2020", clients: "15", growth: "Start" },
                  { year: "2021", clients: "35", growth: "+133%" },
                  { year: "2022", clients: "62", growth: "+77%" },
                  { year: "2023", clients: "89", growth: "+44%" },
                  { year: "2024", clients: "115", growth: "+29%" },
                  { year: "2025", clients: "132", growth: "+15%" },
                  { year: "2026", clients: "150", growth: "+14%" },
                  { year: "2020", clients: "15", growth: "Start" },
                  { year: "2021", clients: "35", growth: "+133%" },
                  { year: "2022", clients: "62", growth: "+77%" },
                  { year: "2023", clients: "89", growth: "+44%" },
                  { year: "2024", clients: "115", growth: "+29%" },
                  { year: "2025", clients: "132", growth: "+15%" },
                  { year: "2026", clients: "150", growth: "+14%" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 min-w-[180px] shrink-0 hover:border-[#fabf37] hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Year */}
                    <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">
                      {item.year}
                    </div>

                    {/* Client Count */}
                    <div className="text-4xl font-black text-black leading-none mb-1">
                      {item.clients}
                    </div>
                    <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-wide mb-3">
                      Clients
                    </div>

                    {/* Growth Badge */}
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#fabf37]/10 rounded-full">
                      <ChevronRight className="size-3 text-[#fabf37]" />
                      <span className="text-[10px] font-black text-[#fabf37]">{item.growth}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Edge gradients */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>

          </div>
        </div>
