    window.dashboard = {
        computeStudentsStats: (laboratoria) => {
            laboratoria = 'https://api.myjson.com/bins/13lpdy';
            fetch(laboratoria).then((data) => {
                    return data.json();
                })
                .then((data) => {
                    laboratoriaData(data);
                }).catch((err) => {
                    console.log('Error en laboratoriaData');
                })
        },
        computeGenerationStats: (laboratoria) => {
            laboratoria = 'https://api.myjson.com/bins/13lpdy';
            fetch(laboratoria).then((data) => {
                    return data.json();
                })
                .then((data) => {
                    generationData(data);
                })
                .catch((err) => {
                    console.log('Error en generationData');
                })
        }
    }