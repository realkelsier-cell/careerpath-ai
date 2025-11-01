import { careers } from '../data/career_data';

export function matchCareers(user) {
  return careers.map(c => {
    let score = 0;
    const skillMatch = c.requiredSkills.filter(s => user.skills.includes(s)).length;
    score += skillMatch * 40 / c.requiredSkills.length;
    if (c.suitableFor.includes(user.iq)) score += 15;
    if (c.bestCountries.includes(user.country)) score += 20;
    if (c.budgetTier.includes(user.budget)) score += 20;
    const reasoning = `Matches ${skillMatch} skills, your IQ, and budget/country.`;
    return { career: c, score, reasoning };
  }).sort((a,b) => b.score - a.score).slice(0,5);
}
