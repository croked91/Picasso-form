export const API = {
  async getCompanies(query: string) {
    const res = await fetch(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`
    );
    return res.json();
  },
};
