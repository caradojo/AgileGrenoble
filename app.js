angular.module("app",["ui.router","pascalprecht.translate","duScroll","hc.marked","app.templates","app.pages","app.directives","app.services"]),angular.module("app.directives",[]),angular.module("app.pages",[]),angular.module("app.services",[]);var app;!function(e){"use strict";var s={korali:{endpoint:"https://api.kora.li/api/v1/",conference:{nickname:"AGILEGRENOBLE"},edition:{nickname:"AG2017"}}};angular.module("app").constant("config",s).config(["$urlRouterProvider","$translateProvider",function(e,s){e.otherwise("/home"),s.useStaticFilesLoader({prefix:"i18n/",suffix:".json"}),s.preferredLanguage("fr_FR"),s.useSanitizeValueStrategy("escape")}])}(app||(app={}));var app;!function(e){var s;!function(e){"use strict";var s=function(){function e(e,s){this.$scope=e,this.demoService=s}return e.$inject=["$scope","demoService"],e}();e.DemoCtrl=s,angular.module("app.pages").controller("demoCtrl",s).config(["$stateProvider",function(e){e.state("shell.demo",{url:"/demo",templateUrl:"app.pages/demo/demo.html",controller:s,controllerAs:"demoCtrlVM"})}])}(s=e.pages||(e.pages={}))}(app||(app={}));var app;!function(e){var s;!function(e){"use strict";var s=function(){function e(e,s,t){var i=this;this.$scope=e,this.$log=s,this.koraliService=t,t.test3().then(function(e){s.debug(e),i.text=JSON.stringify(e)})}return e.$inject=["$scope","$log","koraliService"],e}();angular.module("app.pages").config(["$stateProvider",function(e){e.state("shell.home",{url:"/home",templateUrl:"app.pages/home/home.html",controller:s,controllerAs:"vm"})}])}(s=e.pages||(e.pages={}))}(app||(app={}));var app;!function(e){var s;!function(e){"use strict";var s=function(){function e(){}return e}();angular.module("app.pages").config(["$stateProvider",function(e){e.state("shell.sponsors",{url:"/sponsors",templateUrl:"app.pages/sponsors/sponsors.html",controller:s,controllerAs:"vm"})}])}(s=e.pages||(e.pages={}))}(app||(app={}));var app;!function(e){var s;!function(e){"use strict";var s=function(){function e(){this.excited=!1}return e.prototype.toggleExcited=function(){this.excited=!this.excited},e.prototype.isExcited=function(){return this.excited},e}();e.DemoService=s,angular.module("app.services").service("demoService",s)}(s=e.services||(e.services={}))}(app||(app={}));var app;!function(e){var s;!function(e){"use strict";var s=function(){function e(e){this.$http=e}return e.$inject=["$http"],e.prototype.get=function(e,s){return this.$http.get(e,{params:s}).then(this.handleSuccess)},e.prototype.post=function(e,s,t){return this.$http.post(e,s,{params:t}).then(this.handleSuccess)},e.prototype.handleSuccess=function(e){return e.data},e}();e.HttpService=s,angular.module("app.services").service("httpService",s)}(s=e.services||(e.services={}))}(app||(app={}));var app;!function(e){var s;!function(e){"use strict";var s=function(){function e(e,s){this.httpService=e,this.config=s}return e.$inject=["httpService","config"],e.prototype.test1=function(){return this.httpService.get(this.config.korali.endpoint+"app/conferences/")},e.prototype.test2=function(){return this.httpService.get(this.config.korali.endpoint+"app/conferences/"+this.config.korali.conference.nickname)},e.prototype.test3=function(){return this.httpService.get(this.config.korali.endpoint+"app/conferences/"+this.config.korali.conference.nickname+"/editions/"+this.config.korali.edition.nickname)},e.prototype.test4=function(){return this.httpService.get(this.config.korali.endpoint+"public/conferences/"+this.config.korali.conference.nickname+"/editions/"+this.config.korali.edition.nickname+"/programe")},e}();e.KoraliService=s,angular.module("app.services").service("koraliService",s)}(s=e.services||(e.services={}))}(app||(app={}));var app;!function(e){"use strict";angular.module("app").config(["$stateProvider",function(e){e.state("shell",{"abstract":!0,templateUrl:"app/shell/shell.html"})}])}(app||(app={})),angular.module("app.templates",[]).run(["$templateCache",function(e){e.put("index.html",'<!DOCTYPE html> <html lang="en" ng-app="app"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"> <title>Agile Grenoble</title> <!-- build:css vendor.css --> <!-- bower:css --> <!-- endbower --> <!-- endbuild --> <!-- build:css app.css --> <!-- inject:css --> <!-- endinject --> <!-- endbuild --> <link href="https://fonts.googleapis.com/css?family=Palanquin:100" rel="stylesheet"> <!--[if lt IE 9]>\n\t\t<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>\n\t<![endif]--> </head> <body> <div ui-view></div> <!-- build:js vendor.js --> <!-- bower:js --> <!-- endbower --> <!-- endbuild --> <!-- build:js app.js --> <!-- inject:js --> <!-- endinject --> <!-- endbuild --> </body> </html> '),e.put("app.pages/home/home.html",'<section class="jumbotron jumbotron-fluid dark text-white text-center nav"> <div class="container"> <!-- Home page title --> <h1 class="display-3">Agile Grenoble 2017</h1> <p class="lead">du 22 au 24 novembre</p> <!-- Slider with the main new elements (more postit, more fun, 3 days, 2 nights...) --> <div class="os-phrases" id="os-phrases"> <h2 class="invisible" lettering="words">3 journées</h2> <h2 class="invisible" lettering="words">2 soirées</h2> <h2 class="invisible" lettering="words">+ de postit</h2> <h2 class="invisible" lettering="words">+ de conférences</h2> <h2 class="invisible" lettering="words">+ d\'agililité</h2> <h2 class="invisible" lettering="words">Une équipe motivée</h2> <h2 class="invisible" lettering="words">vous prépare</h2> <h2 lettering="words">La 10ème édition !</h2> </div> <!-- Main menu --> <div class="container main-menu"> <div class="row"> <a class="col" href="#cfp" du-smooth-scroll> <div class="lnr lnr-bullhorn lg"></div> <span class="hidden-xs-down" translate="sections.cfp.title"></span> </a> <a class="col" href="#program" du-smooth-scroll> <div class="lnr lnr-calendar-full lg"></div> <span class="hidden-xs-down" translate="sections.program.title"></span> </a> <a class="col" href="#place" du-smooth-scroll> <div class="lnr lnr-map-marker lg"></div> <span class="hidden-xs-down" translate="sections.place.title"></span> </a> <a class="col" href="#contact" du-smooth-scroll> <div class="lnr lnr-envelope lg"></div> <span class="hidden-xs-down" translate="sections.contact.title"></span> </a> <a class="col" href="#sponsors" du-smooth-scroll> <div class="lnr lnr-diamond lg"></div> <span class="hidden-xs-down" translate="sections.sponsors.title"></span> </a> </div> </div> </div> </section> <section id="cfp" class="jumbotron jumbotron-fluid text-center"> <div class="container"> <div class="lnr lnr-bullhorn lg"></div> <h1 class="display-4" translate="sections.cfp.title"></h1> <div class="container"> <div class="row"> <div class="col-md-9 col-xs-12 text-left"> <p marked="\'sections.cfp.presentation3\' | translate"></p> <p translate="sections.cfp.presentation4"></p> </div> <div class="col-md-3 col-xs-12 d-flex align-items-center justify-content-center"> <a href="https://interview.eloquant.cloud/m4/itw/answer/XBuW8eQNVtg-pV3_Y2sQSQ" target="_blank" role="button" class="btn btn-primary btn-lg" translate="sections.cfp.submit"></a> </div> </div> </div> </div> </section> <section id="program" class="jumbotron jumbotron-fluid dark text-center"> <div class="container"> <div class="lnr lnr-calendar-full lg text-white"></div> <h1 class="display-4 text-white" translate="sections.program.title"></h1> <!-- Morning --> <div class="card-deck"> <div class="card"> <div class="card-header" translate="wednesday"></div> <div class="card-block"> <div class="d-flex align-items-center morning"> <h4 class="col" translate="sections.program.conf"></h4> </div> <p class="card-text"><small class="text-muted">8h30 - 12h40</small></p> <hr class="my-2"> <div class="d-flex align-items-center morning"> <div class="col"> <h4>Conf</h4> </div> <div class="col"> <h4 translate="sections.program.lab"></h4> </div> </div> <p class="card-text"><small class="text-muted">14h - 18h</small></p> </div> </div> <div class="card"> <div class="card-header" translate="thursday"></div> <div class="card-block"> <div class="d-flex align-items-center morning"> <h4 class="col" translate="sections.program.conf"></h4> </div> <p class="card-text"><small class="text-muted">8h30 - 12h40</small></p> <hr class="my-2"> <div class="d-flex align-items-center morning"> <div class="col"> <h4>Conf</h4> </div> <div class="col"> <h4 translate="sections.program.lab"></h4> </div> </div> <p class="card-text"><small class="text-muted">14h - 18h</small></p> </div> </div> <div class="card"> <div class="card-header" translate="friday"></div> <div class="card-block"> <div class="d-flex align-items-center morning"> <h4 class="col" translate="sections.program.conf"></h4> </div> <p class="card-text"><small class="text-muted">8h30 - 12h40</small></p> <hr class="my-2"> <div class="d-flex align-items-center morning"> <div class="col"> <h4>Conf</h4> </div> <div class="col"> <h4 translate="sections.program.lab"></h4> </div> </div> <p class="card-text"><small class="text-muted">14h - 18h</small></p> </div> </div> <div class="card"> <div class="card-header" translate="saturday"></div> <div class="card-block"> <div class="d-flex align-items-center morning"> <h4 class="col" translate="sections.program.forKids"></h4> </div> <p class="card-text"><small class="text-muted">14h - 18h</small></p> </div> </div> </div> <!-- Night --> <div class="card-deck"> <div class="card"> <div class="card-block"> <h4 class="card-title" translate="sections.program.night"></h4> <p class="card-text"><small class="text-muted">19h - 23h59</small></p> </div> </div> <div class="card"> <div class="card-block"> <h4 class="card-title" translate="sections.program.night"></h4> <p class="card-text"><small class="text-muted">19h - 23h59</small></p> </div> </div> <div class="card empty"> <div class="card-block"> </div> </div> <div class="card empty"> <div class="card-block"> </div> </div> </div> <div class="mt-4"> <h5 class="text-white text-left"> <p translate="sections.program.registration1"></p> <p><span translate="sections.program.registration2"></span> <a href="https://docs.google.com/forms/d/e/1FAIpQLSegoRXuGwHak01pLEN8Ut6BGUlHR8pRIau8T9g2CpzxBFxt4Q/viewform" target="_blank"><span translate="sections.program.registration3"></span></a> <span translate="sections.program.registration4"></span></p> </h5> </div> </div> </section> <section id="place" class="jumbotron jumbotron-fluid text-center"> <div class="container"> <div class="lnr lnr-map-marker lg"></div> <h1 class="display-4" translate="sections.place.title"></h1> <div class="container"> <div class="row"> <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center"> <address> <div><strong>Centre de congrès du WTC</strong></div> <div>7 place Robert Schumann</div> <div>38000 Grenoble</div> </address> </div> <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"> <div class="hidden-lg-up"> <iframe class="container well well-small" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2811.803360182313!2d5.7137363!3d45.19107665000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af481a467bd11%3A0xd9070099953ccffb!2sCentre+de+Congr%C3%A8s+et+Seminaire+WTC+Grenoble!5e0!3m2!1sfr!2sfr!4v1395177516214 " style="width:100%; height: 300px" frameborder="0 "></iframe> </div> <div class="hidden-md-down"> <iframe class="container well well-small" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2811.803360182313!2d5.7137363!3d45.19107665000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af481a467bd11%3A0xd9070099953ccffb!2sCentre+de+Congr%C3%A8s+et+Seminaire+WTC+Grenoble!5e0!3m2!1sfr!2sfr!4v1395177516214 " style="width:100%; height: 180px" frameborder="0 "></iframe> </div> </div> </div> <div class="row"> <div class="col-12 pt-5"> <a href="https://www.grenoble-tourisme.com/fr/ou-dormir/" target="_blank" role="button" class="btn btn-primary btn-lg" translate="sections.place.accomodation"></a> </div> </div> </div> </div> </section> <section id="contact" class="jumbotron jumbotron-fluid dark text-white text-center"> <div class="container"> <div class="lnr lnr-envelope lg"></div> <h1 class="display-4" translate="sections.contact.title"></h1> <h2> <a class="text-white" href="http://www.clubagilerhonealpes.org/" translate="sections.contact.organizer"></a> </h2> <dl class="row"> <dt class="col-6 text-right" translate="sections.cfp.title"></dt> <dd class="col-6 text-left"><a class="text-white" href="mailto:orateur@agile-grenoble.org">orateur@agile-grenoble.org</a></dd> <dt class="col-6 text-right" translate="sections.sponsors.title"></dt> <dd class="col-6 text-left"><a class="text-white" href="mailto:sponsor@agile-grenoble.org">sponsor@agile-grenoble.org</a></dd> <dt class="col-6 text-right" translate="sections.contact.registrations"></dt> <dd class="col-6 text-left"><a class="text-white" href="mailto:inscription@agile-grenoble.org">inscription@agile-grenoble.org</a></dd> <dt class="col-6 text-right" translate="sections.contact.others"></dt> <dd class="col-6 text-left"><a class="text-white" href="mailto:contact@agile-grenoble.org">contact@agile-grenoble.org</a></dd> </dl> </div> </section> <section id="sponsors" class="jumbotron jumbotron-fluid text-center sponsors"> <div class="container"> <div><span class="lnr lnr-diamond lg"></span></div> <h1 class="display-4" translate="sections.sponsors.title"></h1> <div class="text-center"> <a href="https://drive.google.com/file/d/0Bx0pKe7Y5pE7emJhZl9neFZYZFU/view" target="_blank" role="button" class="btn btn-primary btn-lg" translate="sections.sponsors.commit"></a> </div> <div class="container images"> <div class="row align-items-center"> <div class="col-12 col-sm-3"> <a href="#!/sponsors#prestige"><img src="images/sponsors/AG17-prestige-star.png" data-toggle="tooltip" title="\'sections.sponsors.prestige\' | translate"></a> </div> <div class="col"> <a href="#!/sponsors#soprasteria"><img src="images/sponsors/SopraSteria-web.png"></a> </div> </div> <div class="row align-items-center"> <div class="col-12 col-sm-3"> <a href="#!/sponsors#premium"><img src="images/sponsors/AG17-premium-star.png" data-toggle="tooltip" title="\'sections.sponsors.premium\' | translate"></a> </div> <div class="col"> <a href="#!/sponsors#viseo"><img src="images/sponsors/Viseo-web.png"></a> </div> <div class="col"> <a href="#!/sponsors#kaizen"><img src="images/sponsors/Logo-Kaizen-couleurs.jpg"></a> </div> <div class="col"> <a href="#!/sponsors#econocom"><img src="images/sponsors/Econocom-web-500px.png"></a> </div> <div class="col"> <a href="#!/sponsors#fresenius"><img src="images/sponsors/Fresenius-web.png"></a> </div> </div> <div class="row align-items-center"> <div class="col-12 col-sm-3"> <a href="#!/sponsors#digital"><img src="images/sponsors/AG17-digital-star.png" data-toggle="tooltip" title="\'sections.sponsors.digital\' | translate"></a> </div> <div class="col"> <a href="#!/sponsors#araymond"><img src="images/sponsors/ARaymond-web.png"></a> </div> <div class="col"> <a href="#!/sponsors#norsys"><img src="images/sponsors/Norsys-web-250px.png"></a> </div> <div class="col"> <a href="#!/sponsors#persistent"><img src="images/sponsors/Persistent-web-250px.png"></a> </div> </div> </div> <h2 class="mt-5" translate="sections.sponsors.thx"></h2> </div> </section>'),e.put("app.pages/sponsors/sponsors.html",'<section class="jumbotron jumbotron-fluid dark text-white mb-0 text-center"> <div class="container"> <div class="lnr lnr-diamond lg"></div> <h1 class="display-4" translate="sections.sponsors.title"></h1> <h2 translate="sections.sponsors.thx2"></h2> </div> </section> <section id="prestige" class="text-center sponsors"> <div class="jumbotron jumbotron-fluid dark text-center text-sm-left"> <div class="container category"> <img src="images/sponsors/AG17-prestige-star-white.png" data-toggle="tooltip" title="\'sections.sponsors.prestige\' | translate"> </div> </div> <div class="container category"> <div id="soprasteria" class="row pt-5 pb-3"> <div class="col-12 col-sm-3 images"> <img src="images/sponsors/SopraSteria-web.png"> </div> <div class="col-12 col-sm-9"> <div class="text-left"> <div> <iframe width="100%" height="315" src="https://www.youtube.com/embed/pm-aMIgfU8g" frameborder="0" allowfullscreen></iframe><br><br> Sopra Steria, leader européen de la transformation numérique, apporte une réponse globale aux enjeux de développement et de compétitivité des grandes entreprises et organisations.. Combinant valeur ajoutée, innovation et performance des services délivrés, Sopra Steria accompagne ses clients dans leur transformation et les aide à faire le meilleur usage du numérique. Fort de 40 000 collaborateurs dans plus de 20 pays, Sopra Steria affiche un chiffre d’affaires de 3,7 milliards d’euros en 2016. <br><br> Nos équipes proposent les meilleurs usages des technologies digitales autour de la réalité augmentée, la <a href="https://www.soprasteria.com/fr/nos-offres/mobilit%C3%A9" target="_blank">mobilité</a>, les nouvelles interfaces, les objets connectés, l’intelligence artificielle, le <a href="https://www.soprasteria.com/fr/nos-offres/big-data" target="_blank">Big Data</a>, le <a href="https://www.soprasteria.com/fr/nos-offres/cloud" target="_blank">Cloud</a>, la <a href="https://www.soprasteria.com/fr/nos-offres/cybersecurite" target="_blank">Cyber Sécurité</a>, les Smart Cities, l’expérience utilisateur (UX) et les serious games ... Elles contribuent ainsi avec force et enthousiasme au développement et à la compétitivité des entreprises pour lesquelles elles s’engagent. <br><br> Sopra Steria a adopté la culture et les pratiques Agiles depuis 10 ans et en a fait une expertise reconnue par ses clients, eux-mêmes aujourd’hui conquis par les bénéfices de l’agilité. Notre méthodologie d’ingénierie intègre un delivery en mode itératif, une modélisation des processus pilotés par la valeur métier et un pilotage par la gestion des risques. Des cycles économiques de plus en plus courts, un contexte législatif en mutation permanente, des impératifs d’efficacité pour satisfaire les clients internes et externes, donnent toute la valeur de cette culture de l’agilité qui contribue à créer du lien entre des équipes pluridisciplinaires et en réconciliant la maîtrise d’ouvrage et ses maîtrises d’œuvre. <br><br> Sopra Steria propose le meilleur niveau de maturité de l’agilité en fonction de l’organisation de ses clients et à une expertise pour faire cohabiter des projets délivrés en mode agile avec des projets délivrés en cycle classique. Ceci est décliné via un modèle contractuel adapté. Aujourd’hui, la maturité des méthodes et des outils permet la mise en œuvre d’organisation projet, intégrant si nécessaire des équipes clients et de Sopra Steria sur des sites distants. <br><br> Véritables enjeux de motivation RH pour les collaborateurs, la satisfaction des utilisateurs est la ligne directrice de notre quotidien à tous les niveaux de l’entreprise. Sopra Steria est Sponsor Prestige de l’Agile Grenoble en 2017, confirmant ainsi son engagement à cet événement majeur, depuis 10 ans. </div> <br> <p> <span>Plus d\'infos sur SopraSteria</span> <a href="https://www.soprasteria.com" target="_blank">https://www.soprasteria.com</a> et contact <a href="mailto:richard.thibeaudeau@soprasteria.com">richard.thibeaudeau@soprasteria.com</a> </p> </div> </div> </div> </div> </section> <section id="premium" class="text-center sponsors"> <div class="jumbotron jumbotron-fluid dark text-center text-sm-left"> <div class="container category"> <img src="images/sponsors/AG17-premium-star-white.png" data-toggle="tooltip" title="\'sections.sponsors.premium\' | translate"> </div> </div> <div class="container category"> <div id="viseo" class="row pt-5 pb-3"> <div class="col-12 col-sm-3 images"> <img src="images/sponsors/Viseo-web.png"> </div> <div class="col-12 col-sm-9"> <div class="text-left"> <div> A venir... </div> <br> <p> <span>Plus d\'infos sur viseo</span> <a href="http://www.viseo.com" target="_blank">http://www.viseo.com</a> </p> </div> </div> </div> <div id="kaizen" class="row pt-5 pb-3"> <div class="col-12 col-sm-3 images"> <img src="images/sponsors/Logo-Kaizen-couleurs.jpg"> </div> <div class="col-12 col-sm-9"> <div class="text-left"> <div> <b>KAIZEN Solutions</b> est une jeune société créée en 2013 qui intervient sur les systèmes d’informations connectés de ses clients.<br><br> Notre équipe, composée de près de 80 collaborateurs, accompagne de grands groupes industriels et des start’up du bassin rhônalpin sur des projets innovants.<br><br> Chez KAIZEN Solutions, nous soutenons l’implication de tous et nous croyons que l’engagement et le bien-être de chacun font la force de notre société.<br><br> Notre démarche ? Assurer la réussite de la réalisation de nos projets à travers une vision globale. <br><br> Grâce à des formations, des conférences et des clients qui nous font confiance, notre équipe ne cesse d’accroitre ses valeurs agiles. <br><br> Vous souhaitez en savoir plus ? Notre vision du service est peut-être faite pour vous. <br> </div> <br> <p> <span>Plus d\'infos sur Kaizen</span> <a href="http://www.kaizen-solutions.net/" target="_blank">http://www.kaizen-solutions.net/</a> </p> </div> </div> </div> <div id="econocom" class="row pt-5 pb-3"> <div class="col-12 col-sm-3 images"> <img src="images/sponsors/Econocom-web-500px.png"> </div> <div class="col-12 col-sm-9"> <div class="text-left"> <div> <b>Econocom</b> conçoit, finance et accompagne la transformation digitale des entreprises. Avec plus de 9 000 collaborateurs présents dans 19 pays, et un chiffre d\'affaires supérieur à 2,3 milliards d\'euros, Econocom dispose de l’ensemble des capacités nécessaires à la réussite des grands projets digitaux : conseil, approvisionnement et gestion administrative des actifs numériques, services aux infrastructures, applicatifs et solutions métiers, financement des projets. <br><br> Econocom est doté d’une forte culture entrepreneuriale insufflée à tout le groupe par la personnalité de son fondateur, un entrepreneur passionné. Cette culture est dans les gènes de l’entreprise. <br><br> <b>Tous les jours</b>, cette culture entrepreneuriale est encouragée chez les collaborateurs, qui, plus que des consultants, sont des entrepreneurs. Force de proposition, esprit d’initiative, prise de décisions, innovation, agilité... autant de qualités indispensables chez Econocom au quotidien. </div> <br> <p> <span>Plus d\'infos sur Econocom</span> <a href="https://www.econocom.com" target="_blank">https://www.econocom.com</a> </p> </div> </div> </div> <div id="fresenius" class="row pt-5 pb-3"> <div class="col-12 col-sm-3 images"> <img src="images/sponsors/Fresenius-web.png"> </div> <div class="col-12 col-sm-9"> <div class="text-left"> <div> A venir... </div> <br> <p> <span>Plus d\'infos sur Fresenius</span> <a href="https://www.fresenius.com/" target="_blank">https://www.fresenius.com</a> </p> </div> </div> </div> </div> </section> <section id="digital" class="text-center sponsors"> <div class="jumbotron jumbotron-fluid dark text-center text-sm-left"> <div class="container category"> <img src="images/sponsors/AG17-digital-star-white.png" data-toggle="tooltip" title="\'sections.sponsors.digital\' | translate"> </div> </div> <div class="container category"> <div id="araymond" class="row pt-5 pb-3"> <div class="col-12 col-sm-3 images"> <img src="images/sponsors/ARaymond-web.png"> </div> <div class="col-12 col-sm-9"> <div class="text-left"> <div> Entreprise familiale forte de 150 ans d\'expérience, le Réseau ARaymond développe, fabrique et commercialise des solutions de fixation et d\'assemblage. Tout au long de notre histoire, nous avons accordé la priorité à l\'innovation et à l\'industrialisation. Nos valeurs sont la collaboration, l\'innovation, l\'esprit d\'entreprise et la création de valeur. Au cœur de notre entreprise, elles nous définissent et guident notre manière de travailler. <br><br> Filiale Informatique de l\'entreprise ARaymond, Raynet agit en tant que partenaire collaboratif pour inspirer, implémenter et délivrer des solutions IT et digitales innovantes centrées sur la création de valeur. </div> <br> <p> <span>Plus d\'info sur ARaymond</span> <a href="http://www.araymond.fr/" target="_blank">http://www.araymond.fr</a> </p> </div> </div> </div> <div id="norsys" class="row pt-5 pb-3"> <div class="col-12 col-sm-3 images"> <img src="images/sponsors/Norsys-web-250px.png"> </div> <div class="col-12 col-sm-9"> <div class="text-left"> <div> Norsys est une ESN spécialisée depuis plus de 20 ans dans le conseil en assistance à maîtrise d’ouvrage et l’ingénierie informatique sur les technologies Open source. Elle compte aujourd’hui 500 collaborateurs répartis sur Lille, Paris, Lyon, Grenoble, Nantes, Nice et Marrakech. <br><br> Norsys a misé sur trois composantes essentielles pour construire son développement : <ul> <li>son université d\'entreprise qui propose à tous les salariés de suivre des formations qualifiantes (école du développeur, du consultant, du pilote, du manager, etc…),</li> <li>son Pôle d’Innovation et de Recherche Appliquée à la Technique (les PIRATes)</li> <li>sa politique en responsabilité sociale très engagée (égalité homme/femme, CV anonyme, fondation d\'entreprise,...). </li> </ul> </div> <br> <p> <span>Plus d\'info sur Norsys</span> <a href="http://www.norsys.fr" target="_blank">http://www.norsys.fr</a> </p> </div> </div> </div> <div id="persistent" class="row pt-5 pb-3"> <div class="col-12 col-sm-3 images"> <img src="images/sponsors/Persistent-web-250px.png"> </div> <div class="col-12 col-sm-9"> <div class="text-left"> <div> Persistent Systems, entreprise globale spécialisée dans le développement logiciel et l’innovation technologique, aide depuis plus de vingt ans les plus importants acteurs technologiques mondiaux à innover.<br><br> La société compte 7000 employés et 350 clients principalement dans les secteurs de l’édition de logiciels, télécoms, sciences de la vie et santé, banque et assurance. Persistent Systems appuie principalement son développement sur 4 axes technologiques : Cloud Computing, Business Intelligence &amp; Analytics, Plate-formes de collaboration et plate-formes pour mobiles.<br><br> Persistent Systems France est un centre de R&amp;D qui développe des logiciels scientifiques depuis 1991. Quarante collaborateurs de profils divers mettent leur expertise technique et métier à votre service en toute agilité. </div> <br> <p> <span>Plus d\'info sur Persistent</span> <a href="http://www.persistentsas.com" target="_blank">http://www.persistentsas.com/</a> </p> </div> </div> </div> </div> </section>'),e.put("app.pages/demo/demo.html",'<div id="demo-css-inject"> <h2>Hello directive!</h2> <button ng-click="demoCtrlVM.demoService.toggleExcited()"> Go ahead, click me - I\'m wired up to ng ready to go! </button> <div ng-show="demoCtrlVM.demoService.isExcited()"> <h3>Yeeehaww!</h3> </div> </div> '),e.put("app/shell/shell.html",'<header> <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-faded"> <div class="container"> <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <a class="navbar-brand mr-auto" href="#"> <img src="images/logo_ag_white_64.png" height="24" class="d-inline-block align-top" alt=""> <span>Agile Grenoble</span> </a> <div id="navbarNavAltMarkup" class="collapse navbar-collapse"> <div class="navbar-nav"> <a class="nav-item nav-link" href="https://twitter.com/AgileGrenoble" target="_blank" data-toggle="tooltip" title="Twitter"><span class="fa fa-twitter"></span></a> <a class="nav-item nav-link" href="https://www.facebook.com/AgileGrenoble/" target="_blank" data-toggle="tooltip" title="Facebook"><span class="fa fa-facebook"></span></a> <a class="nav-item nav-link" href="https://www.youtube.com/channel/UCGVBfEuJjDyi5rOll6zIThQ" target="_blank" data-toggle="tooltip" title="Youtube"><span class="fa fa-youtube-play"></span></a> </div> </div> </div> </nav> </header> <section> <div ui-view></div> </section> <footer class="footer text-center"> <div class="container"> <p class="float-right"><a href="#">Back to top</a></p> <small class="text-muted">designed by Daniel Chipan</small> </div> </footer>')}]);
//# sourceMappingURL=app.js.map
