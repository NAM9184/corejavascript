const kang = {
    name: '강동원',
    age: 44,
    work: {
        movie: '천박사의 퇴마연구소',
        drama: '매직',
    },
};

function cloneDeep(object) {
	return Object.fromEntries(
		Object.entries(object).map(([key,value]) => {
			let type = typeof value;
			if(value && type === 'object'){
				value = cloneDeep(value);
			}
			return [key, value];
		})
	);
}

const copiedKang = cloneDeep(kang);

console.log(Object.entries(kang).map(([key,value]) => [key, value]));