import { Pipe, PipeTransform } from '@angular/core';
import { Champion } from '../champion';
import { Tag } from '../tag.enum';

@Pipe({
  name: 'filterByTag'
})
export class FilterByTagPipe implements PipeTransform {

  transform(champions: Champion[], selectedTag: Tag | null): Champion[] {
    if (!selectedTag) {
      return champions;
    }
    return champions.filter(champion => champion.tags.includes(selectedTag));
  }

}
