import {getStandardTypes} from './base';
import getStandards from './task-3';

const api = () => {

	// обьединить массивы standards и standardsWithRegions
	// - получить обьект со свойствами standardType и region

	return getStandards()
		.then(({standards, standardsWithRegions}) => {
			console.log('standardsWithRegions', standardsWithRegions);
			console.log('standards', standards);

			return standardsWithRegions.map(r => {



				// const regions = standardsWithRegions
				// 	.filter(r => standard.id === r.standard)
				// 	.map(r => r.region);
				//
				// return {
				// 	id: standard.standardType,
				// 	regions
				// };
			});
		})
		.then(standardTypes => {
			console.log(standardTypes);

			return standardTypes;

		});



	// избавится от дублей регионов

	// сделать запрос в getStandardTypes с массивом standardType
};

export default api;
