System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Agent, AppComponent, AGENTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Error prompt when export class appears after @Component
            Agent = class Agent {
            };
            exports_1("Agent", Agent);
            AppComponent = class AppComponent {
                constructor() {
                    this.agents = AGENTS;
                }
                showAgent(item) {
                    this.currentAgent = item;
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    //`` for multiline value.
                    // template: `
                    //     <div class = "card search">
                    //     <h1 class="search-headline">Agents List</h1>
                    //     <label class="search-label">Search</label>
                    //     </div>
                    // `
                    templateUrl: 'app/html/app.html',
                    // styles: [".btn {background-color: green;}",
                    //     ".btn:hover {background-color: gray;}"
                    // ],
                    styleUrls: [
                        "./css/app.css"
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            AGENTS = [
                { "name": "Barot Bellingham",
                    "shortname": "Barot_Bellingham",
                    "school": "Californio University",
                    "bio": "Age 23, 4 years experience in real estate cases"
                },
                { "name": "Constance Smith",
                    "shortname": "Constance_Smith",
                    "school": "Masachusset Institute of University",
                    "bio": "Age 42, more than ten years experience in public relationship"
                },
                { "name": "Hassum Harrod",
                    "shortname": "Hassum_Harrod",
                    "school": "Harvard University",
                    "bio": "Age 25, newly graduate."
                },
                { "name": "Hillary Goldwynn",
                    "shortname": "Hillary_Goldwynn",
                    "school": "Hamburg University",
                    "bio": "Age 37, 7 years experience in patent cases"
                }
            ];
        }
    }
});
//# sourceMappingURL=component.app.js.map