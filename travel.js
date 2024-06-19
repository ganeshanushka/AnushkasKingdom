function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.90511204823664, lng:  -79.04697777706666},
        zoom: 3,
        mapId: 'dd1d89214db3bbcc',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
        });

        const markers = [
            [
                "Lisbon, Portugal",
                38.72155394107434,
                -9.142230210878406,
                "images/mario_marker.svg",
                38,
                31,
                'lisbon.html'
            ],
            [
                "Granada, Spain",
                37.177246294762924, 
                -3.5967659017973355,
                "images/mario_marker.svg",
                38,
                31,
                'granada.html'
            ],
            [
                "Barcelona, Spain",
                41.38748717217527, 
                2.1525449849969647,
                "images/mario_marker.svg",
                38,
                31,
                'barcelona.html'
            ],
            [
                "Milan, Italy",
                45.4645417185651, 
                9.181151510977786,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Lake Como, Italy",
                46.00662048510942,
                9.241567752300284,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Venice, Italy",
                45.44443572226031,
                12.323297507016767,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Pisa, Italy",
                43.72136213151585, 
                10.40086770644716,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Cinque Terre, Italy",
                44.145906639009915,
                9.644307000302291,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Florence, Italy",
                43.77050837602785, 
                11.255040529092186,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Rome, Italy",
                41.908040215526476, 
                12.509417336126692,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Asheville, North Carolina, USA",
                35.592440866062574, 
                -82.54276224462487,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Boone, North Carolina, USA",
                36.21593687208071, 
                -81.67360927179762,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "Charlotte, North Carolina, USA",
                35.22548143299984, 
                -80.8302320725882,
                "images/mario_marker.svg",
                38,
                31
            ],
            [
                "New York, USA",
                40.71154252433449, 
                -73.99616049161992,
                "images/mario_marker.svg",
                38,
                31
            ],
        ];

        for(let i = 0;i<markers.length;i++) {
            const currmarker = markers[i];
            const marker = new google.maps.Marker({
                position: { lat: currmarker[1], lng: currmarker[2] },
                map,
                title: currmarker[0],
                icon: {
                    url: currmarker[3],
                    scaledSize: new google.maps.Size(currmarker[4], currmarker[5])
                },
                animation: google.maps.Animation.DROP
              });
    
              const infowindow = new google.maps.InfoWindow({
                content: currmarker[0],
              });
    
              marker.addListener("mouseover", () => {
                infowindow.open(map, marker);
            });

              marker.addListener("click", () => {
                window.open(currmarker[6], '_blank');
              });
            }
        }
        

