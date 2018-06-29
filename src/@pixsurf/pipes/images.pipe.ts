import { Pipe, PipeTransform } from '@angular/core';
import { layoutPaths } from '@pixsurf/constants';

@Pipe({ name: 'images' })
export class ImagesPipe implements PipeTransform {
    transform(input: string, ext = 'png', root = ''): string {
        switch (root) {
            case 'home':
                return layoutPaths.images.home + input + '.' + ext;
            case 'theme':
                return layoutPaths.images.theme + input + '.' + ext;
            case 'photos':
                return layoutPaths.images.photos + input + '.' + ext;
            case 'caticon':
                return layoutPaths.images.caticon + input + '.' + ext;
            case 'flag':
                return layoutPaths.images.flag + input + '.' + ext;
            case 'previews':
                return layoutPaths.images.previews + input + '.' + ext;
            case 'megamenu':
                return layoutPaths.images.megamenu + input + '.' + ext;
            default:
                return layoutPaths.images.root + input + '.' + ext;
        }
    }
}
