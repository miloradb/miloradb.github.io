					var mymap = L.map('mapid');
					
					mymap.setView([43.933905, 14.714398], 6);
						
					var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
						
					var osmAttrib='Map data <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
						
					var osm = new L.tileLayer(osmUrl, {minZoom: 4, attribution: osmAttrib});
						
					mymap.addLayer (osm);
					
						//Dodavanje lanlng svih parkova
						
						//padajuci meni
						
						//Slovenija
						
					var triglav = L.marker([46.366667, 13.816667]);
					triglav.addTo(mymap);
						
						//Hrvatska
						
					var brijuni = L.marker([44.912778, 13.763889]);
						brijuni.addTo(mymap);

					var kornati = L.marker([43.796667, 15.332222]);
						kornati.addTo(mymap);

					var krka = L.marker([43.858889, 15.976111]);
						krka.addTo(mymap);
						
					var mljet = L.marker([42.766667, 17.45]);
						mljet.addTo(mymap);
						
					var paklenica = L.marker([44.366667, 15.433333]);
						paklenica.addTo(mymap);
						
					var plitvice = L.marker([44.871667, 15.599722]);
						plitvice.addTo(mymap);
						
					var risnjak = L.marker([45.428333, 14.745]);
						risnjak.addTo(mymap);
						
					var sjev_velebit = L.marker([44.693056, 15.006944]);
						sjev_velebit.addTo(mymap);
						
						//Bosna i Hercegovina
						
					var kozara = L.marker([45.008333, 16.891667]);
						kozara.addTo(mymap);
						
					var tjentiste = L.marker([43.346806, 18.690889]);
						tjentiste.addTo(mymap);
						
					var una = L.marker([44.496944, 16.158056]);
						una.addTo(mymap);

						//Srbija
						
					var fruska_gora = L.marker([45.166667, 19.666667]);
						fruska_gora.addTo(mymap);				

					var djerdap = L.marker([44.528944, 21.975861]);
						djerdap.addTo(mymap);
					
					var tara = L.marker([43.847778, 19.465833]);
						tara.addTo(mymap);

					var kopaonik = L.marker([43.316667, 20.833333]);
						kopaonik.addTo(mymap);
						
					var sar_planina = L.marker([42.193963, 20.947995]);
						sar_planina.addTo(mymap);				

						//Crna Gora
						
					var durmitor = L.marker([43.15, 19.033333]);
						durmitor.addTo(mymap);
						
					var biogradska_gora = L.marker([42.883797, 19.628833]);
						biogradska_gora.addTo(mymap);

					var lovcen = L.marker([42.3991, 18.8184]);
						lovcen.addTo(mymap);
						
					var skadarsko_jezero = L.marker([42.257458, 19.213543]);
						skadarsko_jezero.addTo(mymap);
						
					var prokletije = L.marker([42.531240, 19.914220]);
						prokletije.addTo(mymap);

						//Makedonija
						
					var pelister = L.marker([40.981, 21.191]);
						pelister.addTo(mymap);

					var galicica = L.marker([40.9167, 20.8333]);
						galicica.addTo(mymap);		

					var mavrovo = L.marker([41.683333, 20.7]);
						mavrovo.addTo(mymap);						
						
						//Dodavanje pop-up elemenata
						
						
					
					triglav.bindPopup ('Nacionalni park Triglav (SLO)<br><a href="https://www.tnp.si" target="_blank">Zvanična stranica</a> <br><img src="slike/triglav.jpg" class="triglav">');
					brijuni.bindPopup ('Nacionalni park Brijuni (CRO)<br><a href="https://www.np-brijuni.hr/" target="_blank">Zvanična stranica</a>');
					kornati.bindPopup ('Nacionalni park Kornati (CRO) <br><a href="http://www.np-kornati.hr/hr/" target="_blank">Zvanična stranica</a>');
					krka.bindPopup ('Nacionalni park Krka (CRO) <br><a href="http://www.npkrka.hr/" target="_blank">Zvanična stranica</a>');
					mljet.bindPopup ('Nacionalni park Mljet (CRO) <br><a href="http://np-mljet.hr/" target="_blank">Zvanična stranica</a>');
					paklenica.bindPopup ('Nacionalni park Paklenica (CRO) <br><a href="http://www.np-paklenica.hr/" target="_blank">Zvanična stranica</a>');
					plitvice.bindPopup ('Nacionalni park Plitvička jezera (CRO) <br><a href="https://np-plitvicka-jezera.hr/" target="_blank">Zvanična stranica</a>');
					risnjak.bindPopup ('Nacionalni park Risnjak (CRO) <br><a href="http://np-risnjak.hr/" target="_blank">Zvanična stranica</a>');
					sjev_velebit.bindPopup ('Nacionalni park Sjeverni Velebit (CRO) <br><a href="http://www.np-sjeverni-velebit.hr/" target="_blank">Zvanična stranica</a>');
					kozara.bindPopup ('Nacionalni park Kozara (BiH) <br><a href="http://www.npkozara.com/v1/index.php/sr-yu/" target="_blank">Zvanična stranica</a>');
					tjentiste.bindPopup ('Nacionalni park Tjentište (BiH) <br><a href="http://npsutjeska.info/sr/home-1/" target="_blank">Zvanična stranica</a>');
					una.bindPopup ('Nacionalni park Una (BiH) <br><a href="http://nationalpark-una.ba/bs/" target="_blank">Zvanična stranica</a>');
					fruska_gora.bindPopup ('Nacionalni park Fruška gora (SER) <br><a href="http://www.npfruskagora.co.rs/" target="_blank">Zvanična stranica</a>');
					djerdap.bindPopup ('Nacionalni park Đerdap (SER) <br><a href="http://www.npdjerdap.org/novi/" target="_blank">Zvanična stranica</a>');
					tara.bindPopup ('Nacionalni park Tara (SER) <br><a href="http://www.nptara.rs/" target="_blank">Zvanična stranica</a>');
					kopaonik.bindPopup ('Nacionalni park Kopaonik (SER) <br><a href="http://npkopaonik.com/" target="_blank">Zvanična stranica</a>');
					sar_planina.bindPopup ('Nacionalni park Šar planina (SER) <br><a href="http://www.ammk-rks.net/?page=3,88" target="_blank">Zvanična stranica</a>');
					durmitor.bindPopup ('Nacionalni park Durmitor (MNE) <br><a href="http://www.nparkovi.me/sajt/np-durmitor" target="_blank">Zvanična stranica</a>');
					biogradska_gora.bindPopup ('Nacionalni park Biogradska gora (MNE) <br><a href="http://www.nparkovi.me/sajt/np-biogradska-gora" target="_blank">Zvanična stranica</a>');
					lovcen.bindPopup ('Nacionalni park Lovćen (MNE) <br><a href="http://www.nparkovi.me/sajt/np-lovcen" target="_blank">Zvanična stranica</a>');
					skadarsko_jezero.bindPopup ('Nacionalni park Skadarsko jezero (MNE) <br><a href="http://www.nparkovi.me/sajt/np-skadarsko-jezero" target="_blank">Zvanična stranica</a>');
					prokletije.bindPopup ('Nacionalni park Prokletije (MNE) <br><a href="http://www.nparkovi.me/sajt/np-prokletije" target="_blank">Zvanična stranica</a>');
					pelister.bindPopup ('Nacionalni park Pelister (MKD) <br><a href="http://park-pelister.com/en/" target="_blank">Zvanična stranica</a>');
					galicica.bindPopup ('Nacionalni park Galičica (MKD) <br><a href="http://www.galicica.org.mk/" target="_blank">Zvanična stranica</a>');
					mavrovo.bindPopup ('Nacionalni park Mavrovo (MKD) <br><a href="http://npmavrovo.org.mk/" target="_blank">Zvanična stranica</a>');