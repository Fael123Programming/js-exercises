fetch('https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json')
    .then(response => response.json())
    .then(json => {
        let brag1 = '1200575', brag2 = '1200576';
        let keys = Object.keys(json);
        let sorted_keys = keys.sort((v1, v2) => new Date(v1).getTime() - new Date(v2).getTime());
        let new_data = {};
        for (k of sorted_keys) {
            let filter_data = {};
            if (brag1 in json[k]) {
                filter_data[brag1] = json[k][brag1];
            }
            if (brag2 in json[k]) {
                filter_data[brag2] = json[k][brag2];
            }
            if (Object.keys(filter_data).length > 0) {
                new_data[k] = filter_data;
            }
        }
        console.log(new_data);
    });
