import { Agent } from './component.app';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    transform(agents: Agent[], filter: string) {
       return agents.filter((agent) => {
            return agent['name'].toLowerCase().includes(filter.toLowerCase())||
            agent['school'].toLowerCase().includes(filter.toLowerCase());
        });
    }

}