import { useState } from 'react';
import { useRouter } from 'next/router';
import { countries } from '../data/country_data';

export default function Form() {
  const router = useRouter();
  const [form, setForm] = useState({
    age: '', education: '', iq: '', skills: [], interests: '', country: '', budget: '', timeCommit: '', workStyle: ''
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm(p => ({ ...p, skills: checked ? [...p.skills, value] : p.skills.filter(s => s !== value) }));
    } else {
      setForm(p => ({ ...p, [name]: value }));
    }
  };

  const submit = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userInput', JSON.stringify(form));
    router.push('/results');
  };

  return (
    <form onSubmit={submit} className="form-container">
      <h2>Tell Us About Yourself</h2>
      <label>Age: <input type="number" name="age" onChange={handleChange} required /></label>
      <label>Education:
        <select name="education" onChange={handleChange} required>
          <option value="">Select</option>
          <option>High School</option>
          <option>Bachelor's</option>
          <option>Master's</option>
          <option>PhD</option>
        </select>
      </label>
      <label>IQ Level:
        <select name="iq" onChange={handleChange} required>
          <option value="">Select</option>
          <option>Below Average</option>
          <option>Average</option>
          <option>Above Average</option>
          <option>Genius</option>
        </select>
      </label>
      <label>Skills:
        <div>
          <label><input type="checkbox" value="Programming" onChange={handleChange} /> Programming</label>
          <label><input type="checkbox" value="Creativity" onChange={handleChange} /> Creativity</label>
          <label><input type="checkbox" value="Leadership" onChange={handleChange} /> Leadership</label>
        </div>
      </label>
      <label>Interests: <textarea name="interests" onChange={handleChange} required /></label>
      <label>Country:
        <select name="country" onChange={handleChange} required>
          <option value="">Select</option>
          {countries.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
        </select>
      </label>
      <label>Budget:
        <select name="budget" onChange={handleChange} required>
          <option value="">Select</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>
      <button type="submit" className="button">Find My Career</button>
    </form>
  );
}
