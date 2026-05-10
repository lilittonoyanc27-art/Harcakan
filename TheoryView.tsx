import React from 'react';
import { motion } from 'motion/react';
import { QUESTION_THEORY } from './data';
import { HelpCircle, Star, AlertCircle, Quote } from 'lucide-react';

export default function TheoryView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8 py-8 px-4"
    >
      <div className="bg-slate-950 p-8 rounded-[40px] shadow-2xl border-orange-500 border-2 relative overflow-hidden text-center">
        <HelpCircle className="w-24 h-24 text-orange-500/20 absolute -top-4 -right-4 rotate-12" />
        <h2 className="text-3xl sm:text-5xl font-black text-yellow-400 uppercase italic mb-4">Հարցական բառեր</h2>
        <p className="text-white text-lg opacity-80 max-w-2xl mx-auto italic">
          Սովորիր ճիշտ հարցեր տալ իսպաներենով՝ օգտագործելով շեշտադրված հարցական բառերը:
        </p>
      </div>

      <div className="grid gap-6">
        {QUESTION_THEORY.map((point, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[40px] shadow-xl border-2 border-slate-50 overflow-hidden"
          >
            <div className="bg-slate-900 px-8 py-4 flex items-center justify-between">
               <h3 className="text-xl font-black text-white uppercase italic">{point.title}</h3>
               {point.table && <Star className="text-yellow-400 w-5 h-5" />}
               {point.rules && <AlertCircle className="text-orange-500 w-5 h-5" />}
            </div>

            <div className="p-4 sm:p-8">
              {point.table && (
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-slate-100">
                          <th className="py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">🇦🇲 Հայերեն</th>
                          <th className="py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest px-4">🇪🇸 Español</th>
                          {point.table.some(row => row.example) && (
                            <th className="py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">📌 Օրինակ</th>
                          )}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {point.table.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 font-bold text-slate-800 text-sm sm:text-base break-words max-w-[100px] sm:max-w-none">{row.armenian}</td>
                            <td className="py-4 font-black text-rose-600 italic px-4 text-base sm:text-lg break-words">{row.spanish}</td>
                            {point.table.some(r => r.example) && (
                              <td className="py-4 font-medium text-slate-400 italic text-xs sm:text-sm break-words min-w-[120px]">{row.example}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {point.rules && (
                <div className="space-y-3 sm:space-y-4">
                  {point.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start sm:items-center gap-3 sm:gap-4 bg-slate-50 p-4 rounded-2xl border-l-4 border-rose-600">
                      <p className="text-slate-800 font-bold text-base sm:text-lg break-words">{rule}</p>
                    </div>
                  ))}
                </div>
              )}

              {point.simpleExamples && (
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {point.simpleExamples.map((ex, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl flex justify-between items-center group/ex">
                       <div className="space-y-1 w-full">
                          <p className="text-lg sm:text-xl font-black text-slate-800 italic group-hover/ex:text-rose-600 transition-colors break-words">{ex.q}</p>
                          <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest break-words">{ex.qArm}</p>
                       </div>
                    </div>
                  ))}
                </div>
              )}

              {point.fullExamples && (
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                  {point.fullExamples.map((ex, idx) => (
                    <div key={idx} className="bg-slate-900 p-6 rounded-[32px] text-white space-y-3 relative overflow-hidden">
                      <Quote className="w-8 h-8 text-orange-500 opacity-20 absolute top-4 right-4" />
                      <div className="pr-8">
                        <p className="text-xl sm:text-2xl font-black text-yellow-400 italic break-words">{ex.q}</p>
                        <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest break-words">{ex.qArm}</p>
                      </div>
                      <div className="pt-2 border-t border-white/10">
                        <p className="text-lg font-bold text-orange-500 italic break-words">{ex.a}</p>
                        <p className="text-[10px] font-medium text-white/40 italic break-words">{ex.aArm}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
