import { PixsurfConfig } from '@pixsurf/types';

export const pixsurfConfig: PixsurfConfig = {
    layout          : {
        style         : 'horizontal-layout-1',
        width         : 'boxed',
        navbar        : {
            hidden    : false,
            position  : 'top',
            folded    : false,
            background: 'mat-pixsurf-dark-700-bg'
        },
        toolbar       : {
            hidden    : false,
            position  : 'above',
            background: 'mat-white-500-bg'
        },
        footer        : {
            hidden    : true,
            position  : 'above-fixed',
            background: 'mat-pixsurf-dark-900-bg'
        }
    },
    customScrollbars: true
};
