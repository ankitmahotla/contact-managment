import axios from 'axios';

const BASE_URL = 'https://disease.sh/v3/covid-19';

export interface WorldwideData {
  cases: number;
  deaths: number;
  recovered: number;
}

export interface CountryData extends WorldwideData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
}

export interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

export const fetchWorldwideData = async (): Promise<WorldwideData> => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};

export const fetchCountriesData = async (): Promise<CountryData[]> => {
  const response = await axios.get(`${BASE_URL}/countries`);
  return response.data;
};

export const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const response = await axios.get(`${BASE_URL}/historical/all?lastdays=all`);
  return response.data;
};