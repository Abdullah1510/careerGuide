import { useMemo, useState } from 'react';
import {
  admissionProcessGuide,
  centralUniversityHighlights,
  stateUniversityGuide,
  unionTerritoryUniversityGuide,
  universitySources,
} from '../data/universityGuide';

const allRegions = [...stateUniversityGuide, ...unionTerritoryUniversityGuide];

export default function UniversitiesPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [regionType, setRegionType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const selectedRegionData = allRegions.find((region) => region.state === selectedRegion);
  const filteredRegions = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return allRegions.filter((region) => {
      const isUnionTerritory = unionTerritoryUniversityGuide.some((item) => item.state === region.state);
      const matchesRegion = selectedRegion === 'All' || region.state === selectedRegion;
      const matchesType =
        regionType === 'all' ||
        (regionType === 'states' && !isUnionTerritory) ||
        (regionType === 'uts' && isUnionTerritory) ||
        (regionType === 'central' && region.centralUniversities.some((name) => !name.startsWith('No dedicated')));
      const searchableText = [
        region.state,
        region.bestFor,
        region.admissionNote,
        ...region.topUniversities,
        ...region.centralUniversities,
      ].join(' ').toLowerCase();

      return matchesRegion && matchesType && (!query || searchableText.includes(query));
    });
  }, [regionType, searchTerm, selectedRegion]);

  const featuredCentralUniversities = allRegions
    .flatMap((region) =>
      region.centralUniversities
        .filter((name) => !name.startsWith('No dedicated'))
        .map((name) => ({ name, state: region.state }))
    )
    .slice(0, 18);

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950 px-4 py-16 text-white">
        <div className="absolute inset-0 opacity-20 hero-scanline" />
        <div className="section-container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-cyan-100">
                University Finder India
              </span>
              <h1 className="mt-5 text-page-title text-white">Find top universities by state, course direction, and admission route</h1>
              <p className="mt-4 max-w-3xl text-body-lg text-white/75">
                Compare state-wise top universities, central university options, CUET routes, professional entrance exams, documents, counselling, and seat confirmation in one place.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { value: '36', label: 'States & UTs' },
                  { value: '100+', label: 'University options' },
                  { value: 'CUET+', label: 'Admission routes' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur">
              <div className="rounded-xl bg-white p-5 text-slate-900">
                <p className="text-xs font-bold uppercase tracking-wide text-violet-600">Quick Finder</p>
                <h2 className="mt-2 text-xl font-bold text-slate-950">Search universities faster</h2>
                <div className="mt-5 space-y-3">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Select state / UT</span>
                    <select
                      value={selectedRegion}
                      onChange={(event) => setSelectedRegion(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                    >
                      <option value="All">All India</option>
                      {allRegions.map((region) => (
                        <option key={region.state} value={region.state}>
                          {region.state}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Search by university or field</span>
                    <input
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder="Example: Delhi, Jadavpur, medical, CUET"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                    />
                  </label>
                </div>
                <div className="mt-5 rounded-xl bg-slate-950 p-4 text-white">
                  <p className="text-2xl font-bold">{filteredRegions.length}</p>
                  <p className="mt-1 text-sm text-slate-300">matching regions in the current filter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-section-title text-slate-900 mb-4">How university admission works</h2>
            <div className="space-y-3">
              {admissionProcessGuide.map((step) => (
                <div key={step.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <h3 className="font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
              <h2 className="text-section-title text-slate-900 mb-4">Central university rules students must know</h2>
              <div className="grid gap-3">
                {centralUniversityHighlights.map((point) => (
                  <div key={point} className="flex gap-3 rounded-xl bg-violet-50 p-4">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-500" />
                    <p className="text-sm leading-6 text-violet-900">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-section-title text-slate-900 mb-4">Common admission routes</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['General UG', 'CUET or Class 12 merit depending on university'],
                  ['Engineering', 'JEE Main, state CET, or institute exam'],
                  ['Medical', 'NEET UG for MBBS/BDS and many allied routes'],
                  ['Law', 'CLAT, AILET, CUET, or state/university law tests'],
                  ['Design', 'NIFT, NID, UCEED, CEED, or institute tests'],
                  ['Private universities', 'Own forms, interviews, scholarships, and entrance tests'],
                ].map(([route, detail]) => (
                  <div key={route} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <p className="font-bold text-slate-900">{route}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12">
        <div className="section-container">
          <div className="mb-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700">
                  State-wise University Directory
                </span>
                <h2 className="mt-4 text-section-title text-slate-900">Filter universities by state and admission route</h2>
                <p className="mt-3 max-w-3xl text-body text-slate-500">
                  Use this as a shortlist starter. For final choices, check course availability, fees, hostel, placement, entrance requirement, and official admission brochure.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedRegion('All');
                  setRegionType('all');
                  setSearchTerm('');
                }}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm hover:border-violet-300 hover:text-violet-700"
              >
                Reset filters
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="grid gap-3 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">State / UT</span>
                  <select
                    value={selectedRegion}
                    onChange={(event) => setSelectedRegion(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  >
                    <option value="All">All states and UTs</option>
                    {allRegions.map((region) => (
                      <option key={region.state} value={region.state}>
                        {region.state}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Search</span>
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search university, state, field, CUET..."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />
                </label>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Showing</span>
                  <div className="mt-2 rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white">
                    {filteredRegions.length} results
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  ['all', 'All'],
                  ['states', 'States'],
                  ['uts', 'Union Territories'],
                  ['central', 'Has Central University'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRegionType(value)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      regionType === value
                        ? 'border-violet-600 bg-violet-600 text-white'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {selectedRegionData && (
              <div className="mt-5 grid gap-4 rounded-2xl border border-violet-100 bg-violet-50 p-5 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-violet-600">Selected region</p>
                  <h3 className="mt-1 text-xl font-bold text-violet-950">{selectedRegionData.state}</h3>
                  <p className="mt-2 text-sm leading-6 text-violet-900">{selectedRegionData.bestFor}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Top options</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">{selectedRegionData.topUniversities.join(', ')}</p>
                  </div>
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Admission note</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{selectedRegionData.admissionNote}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredRegions.map((region) => (
              <article key={region.state} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      {unionTerritoryUniversityGuide.some((item) => item.state === region.state) ? 'Union Territory' : 'State'}
                    </p>
                    <h3 className="mt-1 text-card-title text-slate-900">{region.state}</h3>
                  </div>
                  <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-bold text-cyan-700">
                    {region.topUniversities.length} top picks
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Top universities</p>
                  <ul className="mt-2 space-y-2">
                    {region.topUniversities.map((university) => (
                      <li key={university} className="flex gap-2 text-sm leading-6 text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        {university}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Central university option</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {region.centralUniversities.map((university) => (
                      <span key={university} className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
                        {university}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Best for</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{region.bestFor}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-400">Admission note</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{region.admissionNote}</p>
                </div>
              </article>
            ))}
          </div>

          {filteredRegions.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <h3 className="text-card-title text-slate-900">No universities found</h3>
              <p className="mt-2 text-sm text-slate-500">Try another state, field, or reset the filters.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-container py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-section-title text-slate-900">Central universities quick list</h2>
              <p className="mt-2 text-body text-slate-500">A quick visible list from the state guide above. Always verify the latest admission brochure before applying.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCentralUniversities.map((university) => (
              <div key={`${university.name}-${university.state}`} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <p className="font-bold text-slate-900">{university.name}</p>
                <p className="mt-1 text-sm text-slate-500">{university.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-10 text-white">
        <div className="section-container">
          <h2 className="text-section-title text-white">Important source links</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
            Rankings and admission rules change. Use these official sources before filling any form.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {universitySources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/10 p-4 text-sm font-semibold text-cyan-100 hover:bg-white/15"
              >
                {source.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
