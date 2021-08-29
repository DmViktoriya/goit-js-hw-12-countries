import fetchCountries from './js/fetchCountries';
import { refs } from './js/refs';
import  dataProcessing from './js/dataProcessing';
import markup from './template/markup.hbs';

refs.input.addEventListener('input', _.debounce(fetchCountries, 500));
