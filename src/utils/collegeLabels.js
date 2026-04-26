const labelRules = [
  {
    match: (value) =>
      value.includes('open path') || value.includes('any graduation') || value.includes('coaching'),
    label: 'Open Path',
    className: 'bg-slate-100 text-slate-700',
  },
  {
    match: (value) =>
      value.includes('aiims') || value.includes('jipmer') || value.includes('maulana azad') ||
      value.includes('grant medical') || value.includes('cmc') || value.includes('kmc') ||
      value.includes('afmc') || value.includes('st. john') || value.includes('medical'),
    label: 'Medical',
    className: 'bg-rose-100 text-rose-700',
  },
  {
    match: (value) => value.includes('iim'),
    label: 'IIM',
    className: 'bg-indigo-100 text-indigo-700',
  },
  {
    match: (value) => value.includes('iiit'),
    label: 'IIIT',
    className: 'bg-cyan-100 text-cyan-700',
  },
  {
    match: (value) => value.includes('iit'),
    label: 'IIT',
    className: 'bg-violet-100 text-violet-700',
  },
  {
    match: (value) => value.includes('nit'),
    label: 'NIT',
    className: 'bg-blue-100 text-blue-700',
  },
  {
    match: (value) => value.includes('bits'),
    label: 'BITS',
    className: 'bg-amber-100 text-amber-700',
  },
  {
    match: (value) =>
      value.includes('nlu') || value.includes('nlsiu') || value.includes('nalsar') ||
      value.includes('nujs') || value.includes('jgls') || value.includes('ailet') ||
      value.includes('law school'),
    label: 'NLU',
    className: 'bg-emerald-100 text-emerald-700',
  },
  {
    match: (value) =>
      value.includes('nift') || value.includes('nid') || value.includes('pearl academy') ||
      value.includes('idc') || value.includes('design'),
    label: 'Design',
    className: 'bg-pink-100 text-pink-700',
  },
  {
    match: (value) =>
      value.includes('isi') || value.includes('cmi') || value.includes('iisc') ||
      value.includes('iiser') || value.includes('research'),
    label: 'Research',
    className: 'bg-slate-100 text-slate-700',
  },
  {
    match: (value) =>
      value.includes('government') || value.includes('govt') || value.includes('state') ||
      value.includes('dtu') || value.includes('coep') || value.includes('pec') ||
      value.includes('spa') || value.includes('bhu') || value.includes('jamia') ||
      value.includes('delhi university') || value.includes('university'),
    label: 'Govt/State',
    className: 'bg-green-100 text-green-700',
  },
  {
    match: (value) =>
      value.includes('vit') || value.includes('srm') || value.includes('manipal') ||
      value.includes('amity') || value.includes('symbiosis') || value.includes('nmims') ||
      value.includes('rvce') || value.includes('pes') || value.includes('private'),
    label: 'Private',
    className: 'bg-orange-100 text-orange-700',
  },
];

export function getCollegeLabel(college = '') {
  const value = String(college).toLowerCase();
  const rule = labelRules.find((entry) => entry.match(value));

  if (rule) {
    return { label: rule.label, className: rule.className };
  }

  return {
    label: 'College',
    className: 'bg-slate-100 text-slate-600',
  };
}
