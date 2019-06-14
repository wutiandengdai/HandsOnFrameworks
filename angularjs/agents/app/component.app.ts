import { Component } from "@angular/core";

// Error prompt when export class appears after @Component
export class Agent {
    name: string;
    shortname: string;
    school: string;
    bio: string;
}

@Component({
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
})

export class AppComponent{
    agents = AGENTS;
    currentAgent: Agent;

    showAgent(item: Agent){
        this.currentAgent = item;
    }
    // name:string;
    // agents: any;

    // onClick(item, container){
    //     this.name = item.name;
    //     container.style.backgroundColor="#FECEDE";
    // }

    // addAgent(name:string, school:string){
    //     if(name != ''){
    //         this.agents.push({
    //             name: name,
    //             school: school
    //         });
    //     }
    // }
    // constructor(){
    //     this.name='Molly';
    //     this.agents=[
    //         {name:'Pealson', school:'Californio University'},
    //         {name:'Alita', school:'Masachusset Institute of University'},
    //         {name:'Morphis',school:'Harvard University'},
    //         {name:'Molly', school:'Hamburg University'}];
    // }
}

const AGENTS: Agent[] = [
    {"name": "Barot Bellingham",
    "shortname": "Barot_Bellingham",
    "school": "Californio University",
    "bio": "Age 23, 4 years experience in real estate cases"
    },
    {"name": "Constance Smith",
    "shortname": "Constance_Smith",
    "school": "Masachusset Institute of University",
    "bio": "Age 42, more than ten years experience in public relationship"
    },
    {"name": "Hassum Harrod",
    "shortname": "Hassum_Harrod",
    "school": "Harvard University",
    "bio": "Age 25, newly graduate."
    },
    {"name": "Hillary Goldwynn",
    "shortname": "Hillary_Goldwynn",
    "school": "Hamburg University",
    "bio": "Age 37, 7 years experience in patent cases"
    }
]
