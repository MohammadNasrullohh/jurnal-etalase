'use client'

import React, { useEffect } from 'react'
import {
  BarChart,
  AreaChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LabelList,
} from 'recharts'

import { getCategoryColor, getCategoryLabel } from "@/shared/ui/colors"

interface StatsModalProps {
  isOpen: boolean
  onClose: () => void
  data?: any
  activeCard?: 'overview' | 'kategori' | 'mitra' | 'berita'
}

// Dummy data matching the EXACT Figma heights and values
const barData = [
  { date: '0', total: 25 },
  { date: '1', total: 38 },
  { date: '2', total: 2 },
  { date: '3', total: 40 },
  { date: '4', total: 4 },
  { date: '5', total: 25 },
  { date: '6', total: 28 },
  { date: '7', total: 30 },
  { date: '8', total: 95 },
  { date: '9', total: 63 },
  { date: '10', total: 72 },
  { date: '11', total: 64 },
  { date: '12', total: 76 },
  { date: '13', total: 48 },
  { date: '14', total: 0 },
  { date: '15', total: 74 },
]

// Dummy data for Berita modal
const beritaPieData = [
  { name: 'Pendidikan', value: 30, color: '#6366F1' },
  { name: 'Pemda', value: 45, color: '#F87171' },
  { name: 'Swasta', value: 20, color: '#FBBF24' },
  { name: 'Lainnya', value: 5, color: '#38BDF8' },
];

// Pie Chart data matching the exact Figma colors
const pieData = [
  { name: 'Sosialisasi', value: 400, color: '#706EE7' },
  { name: 'Rapat Rutin', value: 300, color: '#FF928A' },
  { name: 'MoU', value: 300, color: '#FFAE4C' },
  { name: 'Lainnya', value: 200, color: '#3CC3DF' },
]

const renderCustomBarLabel = (props: any) => {
  const { x, y, width, value, index } = props;
  // Figma mockup specific: show labels '2', '4', and '14'
  if (index === 2 || index === 4 || index === 14) {
    const labelValue = index === 14 ? 14 : value;
    // Adjust y so it floats slightly above the bar (or above the 0 line for index 14)
    const yPos = index === 14 ? y - 10 : y - 8;
    return (
      <text x={x + width / 2} y={yPos} fill="#000000" fontSize={11} textAnchor="middle" fontWeight="500">
        {labelValue}
      </text>
    );
  }
  return null;
}

export const StatsModal = ({ isOpen, onClose, data, activeCard = 'overview' }: StatsModalProps & { activeCard?: 'overview' | 'kategori' | 'mitra' | 'berita' }) => {
  // Use real data if available, otherwise fallback to dummy
  const actualBarData = data?.monthly_trend?.map((item: any) => ({
    date: item.month.toString(),
    total: item.total
  })) || barData;

  const actualPieData = data?.stats ? Object.entries(data.stats).map(([key, val]) => ({
    name: getCategoryLabel(key) || key,
    value: val as number,
    color: getCategoryColor(key)
  })).filter(x => x.value > 0) : pieData;


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm" style={{ fontFamily: 'Poppins' }}>
      <div 
        className="absolute inset-0"
        onClick={onClose}
      ></div>
      
      {/* Modal Container - EXACT FIGMA DIMENSIONS */}
      <div className="relative w-full max-w-[1277px] h-[660px] bg-[#F1F6FC] rounded-[52px] shadow-2xl flex flex-col p-10 md:p-12 overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-[#142B42]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row gap-6 mt-2 h-full">
          {activeCard === 'overview' && (
            <>
              {/* Left Panel: Bar Chart */}
              <div className="flex-[1.8] flex flex-col h-full">
                <div className="mb-4">
                  <h2 className="text-[#142B42] text-[20px] font-bold">Kegiatan</h2>
                  <p className="text-[#5D6A77] text-[13px]">Jumlah Kegiatan Per Tanggal</p>
                </div>
                <div className="bg-white rounded-[39px] border-[0.5px] border-black/20 p-8 flex-1 flex flex-col min-h-0">
                  <div className="w-full flex-1 min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={actualBarData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid stroke="#CCCCCC" strokeWidth={1} vertical={true} horizontal={true} />
                        <XAxis dataKey="date" axisLine={{ stroke: '#CCCCCC', strokeWidth: 1 }} tickLine={{ stroke: '#000000', strokeWidth: 1 }} tick={{ fill: '#000000', fontSize: 11 }} dy={8} />
                        <YAxis axisLine={{ stroke: '#CCCCCC', strokeWidth: 1 }} tickLine={{ stroke: '#000000', strokeWidth: 1 }} tick={{ fill: '#000000', fontSize: 11 }} ticks={[0, 25, 50, 75, 100]} dx={-4} />
                        <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                        <Bar dataKey="total" fill="#4EA7CC" radius={[0, 0, 0, 0]} barSize={32}>
                          <LabelList content={renderCustomBarLabel} />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Right Panel: Pie Chart */}
              <div className="flex-[1.2] flex flex-col h-full">
                <div className="mb-4 h-[44px] flex items-end">
                  <h3 className="text-[#142B42] text-[14px] font-bold mb-[2px]">Jenis Kegiatan</h3>
                </div>
                <div className="bg-white rounded-[39px] border-[0.5px] border-black/20 p-8 flex-1 flex flex-col items-center justify-center min-h-0">
                  <div className="w-full flex-1 flex flex-col items-center justify-center min-h-0">
                    <div className="w-full h-[65%] min-h-[320px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={actualPieData} cx="50%" cy="50%" innerRadius={0} outerRadius="95%" paddingAngle={0} dataKey="value" stroke="none">
                            {actualPieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-8">
                      {actualPieData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-[12px] text-[#64748B] font-medium">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeCard === 'kategori' && (
            <div className="flex-1 flex flex-col h-full w-full">
              <div className="mb-6">
                <h2 className="text-[#142B42] text-[24px] font-bold">Kategori Terbanyak</h2>
                <p className="text-[#5D6A77] text-[14px]">Distribusi kategori dan tren kegiatan</p>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
                {/* Left: Tren 7 hari */}
                <div className="flex-[1.2] flex flex-col rounded-[30px] border-[0.5px] border-black/20 p-6 relative bg-white">
                  <h3 className="text-[#142B42] text-[18px] font-semibold mb-4">Tren 7 hari</h3>
                  <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={[
                        { day: 'Sen', total: 215 },
                        { day: 'Sel', total: 185 },
                        { day: 'Rab', total: 205 },
                        { day: 'Kam', total: 225 },
                        { day: 'Jum', total: 205 },
                        { day: 'Sab', total: 245 },
                        { day: 'Min', total: 235 },
                      ]} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="day" axisLine={{ stroke: '#9CA3AF' }} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                        <Area type="monotone" dataKey="total" stroke="#F97316" strokeWidth={3} fill="#FFF7ED" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Right: Aktivitas per Kategori */}
                <div className="flex-[1] flex flex-col rounded-[30px] border-[0.5px] border-black/20 p-6 relative bg-white">
                  <h3 className="text-[#142B42] text-[18px] font-semibold mb-2">Aktivitas per Kategori</h3>
                  <div className="flex-1 w-full flex flex-col items-center justify-center min-h-0">
                    <div className="w-full flex-1 min-h-[150px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={actualPieData} cx="50%" cy="50%" innerRadius="45%" outerRadius="80%" paddingAngle={2} dataKey="value" stroke="none">
                            {actualPieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
                      {actualPieData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-[12px] text-[#6B7280] font-medium">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCard === 'mitra' && (
            <div className="flex-1 flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-[#E7F2FE] text-[#3B82F6] rounded-full flex items-center justify-center mb-8 shadow-inner">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h2 className="text-[#142B42] text-[36px] font-bold mb-4">Mitra Kolaborasi</h2>
              <div className="text-[#F7921C] text-[80px] font-black leading-none mb-6">
                {data?.kpi_summary?.total_mitra || 0}
              </div>
              <p className="text-[#5D6A77] text-[16px] max-w-md">
                Total instansi atau mitra terkait yang telah berpartisipasi dan berkolaborasi dalam berbagai kegiatan Bawaslu Kabupaten Kebumen.
              </p>
            </div>
          )}

          {activeCard === 'berita' && (
            <div className="flex-1 flex flex-col h-full w-full">
              <div className="mb-6">
                <h2 className="text-[#142B42] text-[24px] font-bold">Terekspos Berita</h2>
                <p className="text-[#5D6A77] text-[14px]">Publikasi berita</p>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
                {/* Left: Tren 7 hari */}
                <div className="flex-[1.2] flex flex-col rounded-[30px] border-[0.5px] border-black/20 p-6 relative bg-white">
                  <h3 className="text-[#142B42] text-[18px] font-semibold mb-4">Tren 7 hari</h3>
                  <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={[
                        { day: 'Sen', total: 130 },
                        { day: 'Sel', total: 135 },
                        { day: 'Rab', total: 135 },
                        { day: 'Kam', total: 148 },
                        { day: 'Jum', total: 152 },
                        { day: 'Sab', total: 145 },
                        { day: 'Min', total: 152 },
                      ]} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="day" axisLine={{ stroke: '#9CA3AF' }} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                        <Area type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={3} fill="#EFF6FF" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Right: Jenis Media */}
                <div className="flex-[1] flex flex-col rounded-[30px] border-[0.5px] border-black/20 p-6 relative bg-white">
                  <h3 className="text-[#142B42] text-[18px] font-semibold mb-2">Jenis Media</h3>
                  <div className="flex-1 w-full flex flex-col items-center justify-center min-h-0">
                    <div className="w-full flex-1 min-h-[150px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={beritaPieData} cx="50%" cy="50%" innerRadius="45%" outerRadius="80%" paddingAngle={2} dataKey="value" stroke="none">
                            {beritaPieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
                      {beritaPieData.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-[12px] text-[#6B7280] font-medium">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
