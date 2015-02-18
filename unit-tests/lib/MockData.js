var mockData = (function() {
    return {
        getMockCurrentWeather: getMockCurrentWeather,
        getMockForecast: getMockForecast
    };

    function getMockCurrentWeather () {
        return {"coord":{"lon":21.43,"lat":42},"sys":{"message":0.0229,"country":"MK","sunrise":1423805548,"sunset":1423843465},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"base":"cmc stations","main":{"temp":3.45,"temp_min":3.45,"temp_max":3.45,"pressure":962.87,"sea_level":1038.62,"grnd_level":962.87,"humidity":73},"wind":{"speed":0.28,"deg":354.004},"clouds":{"all":0},"dt":1423824479,"id":785842,"name":"Skopje","cod":200};
    }

    function getMockForecast() {
        return {"cod":"200","message":0.1697,"city":{"id":785842,"name":"Skopje","coord":{"lon":21.433331,"lat":42},"country":"MK","population":0,"sys":{"population":0}},"cnt":38,"list":[{"dt":1423818000,"main":{"temp":-1.13,"temp_min":-1.13,"temp_max":-1.13,"pressure":964.12,"sea_level":1041.14,"grnd_level":964.12,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.5,"deg":299.005},"sys":{"pod":"d"},"dt_txt":"2015-02-13 09:00:00"},{"dt":1423828800,"main":{"temp":3.45,"temp_min":3.45,"temp_max":3.45,"pressure":962.87,"sea_level":1038.62,"grnd_level":962.87,"humidity":73,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":0.28,"deg":354.004},"sys":{"pod":"d"},"dt_txt":"2015-02-13 12:00:00"},{"dt":1423839600,"main":{"temp":3.92,"temp_min":3.92,"temp_max":3.92,"pressure":961.7,"sea_level":1037.4,"grnd_level":961.7,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":0.5,"deg":249.001},"sys":{"pod":"d"},"dt_txt":"2015-02-13 15:00:00"},{"dt":1423850400,"main":{"temp":-2.92,"temp_min":-2.92,"temp_max":-2.92,"pressure":961.89,"sea_level":1037.93,"grnd_level":961.89,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.12,"deg":259.502},"sys":{"pod":"n"},"dt_txt":"2015-02-13 18:00:00"},{"dt":1423861200,"main":{"temp":-5.77,"temp_min":-5.77,"temp_max":-5.77,"pressure":961.5,"sea_level":1037.87,"grnd_level":961.5,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.22,"deg":303.001},"sys":{"pod":"n"},"dt_txt":"2015-02-13 21:00:00"},{"dt":1423872000,"main":{"temp":-7.1,"temp_min":-7.1,"temp_max":-7.1,"pressure":961.09,"sea_level":1037.7,"grnd_level":961.09,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.21,"deg":320.501},"sys":{"pod":"n"},"dt_txt":"2015-02-14 00:00:00"},{"dt":1423882800,"main":{"temp":-7.61,"temp_min":-7.61,"temp_max":-7.61,"pressure":960.35,"sea_level":1037.12,"grnd_level":960.35,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.47,"deg":295.006},"sys":{"pod":"n"},"dt_txt":"2015-02-14 03:00:00"},{"dt":1423893600,"main":{"temp":-8.12,"temp_min":-8.12,"temp_max":-8.12,"pressure":960.06,"sea_level":1037.11,"grnd_level":960.06,"humidity":79,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.21,"deg":303.501},"sys":{"pod":"d"},"dt_txt":"2015-02-14 06:00:00"},{"dt":1423904400,"main":{"temp":0.11,"temp_min":0.11,"temp_max":0.11,"pressure":959.71,"sea_level":1036.17,"grnd_level":959.71,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.2,"deg":334.001},"sys":{"pod":"d"},"dt_txt":"2015-02-14 09:00:00"},{"dt":1423915200,"main":{"temp":4.81,"temp_min":4.81,"temp_max":4.81,"pressure":958.15,"sea_level":1033.5,"grnd_level":958.15,"humidity":73,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.51,"deg":126.006},"sys":{"pod":"d"},"dt_txt":"2015-02-14 12:00:00"},{"dt":1423926000,"main":{"temp":4.43,"temp_min":4.43,"temp_max":4.43,"pressure":957.19,"sea_level":1032.46,"grnd_level":957.19,"humidity":68,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.21,"deg":139.502},"sys":{"pod":"d"},"dt_txt":"2015-02-14 15:00:00"},{"dt":1423936800,"main":{"temp":-2.99,"temp_min":-2.99,"temp_max":-2.99,"pressure":957.67,"sea_level":1033.26,"grnd_level":957.67,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.16,"deg":178.003},"sys":{"pod":"n"},"dt_txt":"2015-02-14 18:00:00"},{"dt":1423947600,"main":{"temp":-5.94,"temp_min":-5.94,"temp_max":-5.94,"pressure":957.86,"sea_level":1033.91,"grnd_level":957.86,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":0.36,"deg":155.002},"sys":{"pod":"n"},"dt_txt":"2015-02-14 21:00:00"},{"dt":1423958400,"main":{"temp":-7.34,"temp_min":-7.34,"temp_max":-7.34,"pressure":957.97,"sea_level":1034.33,"grnd_level":957.97,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":0.76,"deg":78.0032},"sys":{"pod":"n"},"dt_txt":"2015-02-15 00:00:00"},{"dt":1423969200,"main":{"temp":-8.43,"temp_min":-8.43,"temp_max":-8.43,"pressure":957.87,"sea_level":1034.36,"grnd_level":957.87,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.07,"deg":64.5016},"sys":{"pod":"n"},"dt_txt":"2015-02-15 03:00:00"},{"dt":1423980000,"main":{"temp":-8.71,"temp_min":-8.71,"temp_max":-8.71,"pressure":958.26,"sea_level":1035.11,"grnd_level":958.26,"humidity":82,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":0.56,"deg":88.5036},"sys":{"pod":"d"},"dt_txt":"2015-02-15 06:00:00"},{"dt":1423990800,"main":{"temp":-0.67,"temp_min":-0.67,"temp_max":-0.67,"pressure":959.06,"sea_level":1035.16,"grnd_level":959.06,"humidity":79,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":0.46,"deg":181.007},"sys":{"pod":"d"},"dt_txt":"2015-02-15 09:00:00"},{"dt":1424001600,"main":{"temp":3.63,"temp_min":3.63,"temp_max":3.63,"pressure":958.45,"sea_level":1033.48,"grnd_level":958.45,"humidity":75,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.32,"deg":167.503},"sys":{"pod":"d"},"dt_txt":"2015-02-15 12:00:00"},{"dt":1424012400,"main":{"temp":4.11,"temp_min":4.11,"temp_max":4.11,"pressure":958.18,"sea_level":1033.12,"grnd_level":958.18,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.57,"deg":165.503},"sys":{"pod":"d"},"dt_txt":"2015-02-15 15:00:00"},{"dt":1424023200,"main":{"temp":-2.69,"temp_min":-2.69,"temp_max":-2.69,"pressure":959.2,"sea_level":1034.78,"grnd_level":959.2,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.17,"deg":151},"sys":{"pod":"n"},"dt_txt":"2015-02-15 18:00:00"},{"dt":1424034000,"main":{"temp":-5.7,"temp_min":-5.7,"temp_max":-5.7,"pressure":960.14,"sea_level":1036.1,"grnd_level":960.14,"humidity":81},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":0.86,"deg":152.002},"sys":{"pod":"n"},"dt_txt":"2015-02-15 21:00:00"},{"dt":1424044800,"main":{"temp":-6.98,"temp_min":-6.98,"temp_max":-6.98,"pressure":960.59,"sea_level":1036.86,"grnd_level":960.59,"humidity":76},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":0.12,"deg":134.502},"sys":{"pod":"n"},"dt_txt":"2015-02-16 00:00:00"},{"dt":1424055600,"main":{"temp":-7.58,"temp_min":-7.58,"temp_max":-7.58,"pressure":961.15,"sea_level":1037.55,"grnd_level":961.15,"humidity":80},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":0.31,"deg":274.507},"sys":{"pod":"n"},"dt_txt":"2015-02-16 03:00:00"},{"dt":1424066400,"main":{"temp":-6.71,"temp_min":-6.71,"temp_max":-6.71,"pressure":962.36,"sea_level":1038.98,"grnd_level":962.36,"humidity":87},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":76},"wind":{"speed":0.86,"deg":302.002},"sys":{"pod":"d"},"dt_txt":"2015-02-16 06:00:00"},{"dt":1424077200,"main":{"temp":-1.25,"temp_min":-1.25,"temp_max":-1.25,"pressure":963.22,"sea_level":1039.47,"grnd_level":963.22,"humidity":83},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":1.06,"deg":301.503},"sys":{"pod":"d"},"dt_txt":"2015-02-16 09:00:00"},{"dt":1424088000,"main":{"temp":4.53,"temp_min":4.53,"temp_max":4.53,"pressure":962.58,"sea_level":1038.09,"grnd_level":962.58,"humidity":78},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":0.41,"deg":186.501},"sys":{"pod":"d"},"dt_txt":"2015-02-16 12:00:00"},{"dt":1424098800,"main":{"temp":4.58,"temp_min":4.58,"temp_max":4.58,"pressure":962.9,"sea_level":1038.33,"grnd_level":962.9,"humidity":71},"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.3,"deg":132.009},"sys":{"pod":"d"},"dt_txt":"2015-02-16 15:00:00"},{"dt":1424109600,"main":{"temp":-2.21,"temp_min":-2.21,"temp_max":-2.21,"pressure":964.33,"sea_level":1040.47,"grnd_level":964.33,"humidity":86},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":1.15,"deg":201.501},"sys":{"pod":"n"},"dt_txt":"2015-02-16 18:00:00"},{"dt":1424120400,"main":{"temp":-2.78,"temp_min":-2.78,"temp_max":-2.78,"pressure":965.62,"sea_level":1042.39,"grnd_level":965.62,"humidity":84},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":80},"wind":{"speed":0.56,"deg":321.504},"sys":{"pod":"n"},"dt_txt":"2015-02-16 21:00:00"},{"dt":1424131200,"main":{"temp":-2.78,"temp_min":-2.78,"temp_max":-2.78,"pressure":966.63,"sea_level":1043.85,"grnd_level":966.63,"humidity":90},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":92},"wind":{"speed":1.11,"deg":31.0018},"snow":{"3h":0.25},"sys":{"pod":"n"},"dt_txt":"2015-02-17 00:00:00"},{"dt":1424142000,"main":{"temp":-2.79,"temp_min":-2.79,"temp_max":-2.79,"pressure":967.6,"sea_level":1044.92,"grnd_level":967.6,"humidity":90},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":92},"wind":{"speed":1.07,"deg":24.5},"snow":{"3h":0.25},"sys":{"pod":"n"},"dt_txt":"2015-02-17 03:00:00"},{"dt":1424152800,"main":{"temp":-3.15,"temp_min":-3.15,"temp_max":-3.15,"pressure":968.9,"sea_level":1046.44,"grnd_level":968.9,"humidity":93},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":1.11,"deg":43.5055},"snow":{"3h":0},"sys":{"pod":"d"},"dt_txt":"2015-02-17 06:00:00"},{"dt":1424163600,"main":{"temp":-0.23,"temp_min":-0.23,"temp_max":-0.23,"pressure":969.87,"sea_level":1047.2,"grnd_level":969.87,"humidity":83},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":1.5,"deg":60.0014},"snow":{"3h":0},"sys":{"pod":"d"},"dt_txt":"2015-02-17 09:00:00"},{"dt":1424174400,"main":{"temp":2.09,"temp_min":2.09,"temp_max":2.09,"pressure":969.55,"sea_level":1046.2,"grnd_level":969.55,"humidity":76},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":48},"wind":{"speed":1.6,"deg":97.0088},"snow":{"3h":0},"sys":{"pod":"d"},"dt_txt":"2015-02-17 12:00:00"},{"dt":1424185200,"main":{"temp":2.27,"temp_min":2.27,"temp_max":2.27,"pressure":969.64,"sea_level":1046.23,"grnd_level":969.64,"humidity":73},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":76},"wind":{"speed":1.42,"deg":113.002},"snow":{"3h":0},"sys":{"pod":"d"},"dt_txt":"2015-02-17 15:00:00"},{"dt":1424196000,"main":{"temp":-0.49,"temp_min":-0.49,"temp_max":-0.49,"pressure":970.64,"sea_level":1047.84,"grnd_level":970.64,"humidity":82},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":80},"wind":{"speed":1.05,"deg":133.505},"snow":{"3h":0},"sys":{"pod":"n"},"dt_txt":"2015-02-17 18:00:00"},{"dt":1424206800,"main":{"temp":-2.15,"temp_min":-2.15,"temp_max":-2.15,"pressure":971.32,"sea_level":1049.16,"grnd_level":971.32,"humidity":86},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":56},"wind":{"speed":0.27,"deg":113.002},"snow":{"3h":0},"sys":{"pod":"n"},"dt_txt":"2015-02-17 21:00:00"},{"dt":1424217600,"main":{"temp":-3.48,"temp_min":-3.48,"temp_max":-3.48,"pressure":971.77,"sea_level":1049.97,"grnd_level":971.77,"humidity":86},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":88},"wind":{"speed":0.17,"deg":331},"snow":{"3h":0},"sys":{"pod":"n"},"dt_txt":"2015-02-18 00:00:00"}]}
        ;
    }
})();