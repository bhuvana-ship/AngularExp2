import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  year: Array<number> = [
    2100, 2099, 2098, 2097, 2096, 2095, 2094, 2093, 2092, 2091,
    2090, 2089, 2088, 2087, 2086, 2085, 2084, 2083, 2082, 2081,
    2080, 2079, 2078, 2077, 2076, 2075, 2074, 2073, 2072, 2071,
    2070, 2069, 2068, 2067, 2066, 2065, 2064, 2063, 2062, 2061,
    2060, 2059, 2058, 2057, 2056, 2055, 2054, 2053, 2052, 2051,
    2050, 2049, 2048, 2047, 2046, 2045, 2044, 2043, 2042, 2041,
    2040, 2039, 2038, 2037, 2036, 2035, 2034, 2033, 2032, 2031,
    2030, 2029, 2028, 2027, 2026, 2025, 2024, 2023, 2022, 2021,
    2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
    2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
    2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991,
    1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981,
    1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971,
    1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961,
    1960, 1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951,
    1950, 1949, 1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941,
    1940, 1939, 1938, 1937, 1936, 1935, 1934, 1933, 1932, 1931,
    1930, 1929, 1928, 1927, 1926, 1925, 1924, 1923, 1922, 1921,
    1920, 1919, 1918, 1917, 1916, 1915, 1914, 1913, 1912, 1911,
    1910, 1909, 1908, 1907, 1906, 1905, 1904, 1903, 1902, 1901,
  ];
  myDefaultValues: Array<string> = ["Year", "Month", "Date"];
  month: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  dayDate: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  signUpForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    comment:new FormControl(''),
    dob: new FormGroup({
      yearBind: new FormControl(''),
      monthBind: new FormControl(''),
      dateBind:new FormControl('')
    })
  });
  signupFormSubmit() {
    console.log(this.signUpForm.value);
  }
}
