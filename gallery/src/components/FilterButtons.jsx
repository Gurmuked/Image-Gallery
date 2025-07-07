import React from 'react';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Nature', value: 'nature' },
  { label: 'Animals', value: 'animals' },
  { label: 'Cities', value: 'cities' },
];

const FilterButtons = ({ active, onChange }) => (
  <div className="flex justify-center flex-wrap mb-8 gap-2">
    {categories.map((cat) => (
      <button
        key={cat.value}
        className={`px-5 py-2 rounded bg-blue-600 text-white transition hover:bg-blue-800 focus:outline-none ${active === cat.value ? 'bg-gray-800' : ''}`}
        onClick={() => onChange(cat.value)}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default FilterButtons;
