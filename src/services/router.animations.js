"use strict";
var core_1 = require("@angular/core");
function moveIn() {
    return core_1.trigger('moveIn', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.transition(':enter', [
            core_1.style({ opacity: '0', transform: 'translateX(100px)' }),
            core_1.animate('.6s ease-in-out', core_1.style({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ opacity: '1', transform: 'translateX(0)' }),
            core_1.animate('.3s ease-in-out', core_1.style({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
exports.moveIn = moveIn;
function fallIn() {
    return core_1.trigger('fallIn', [
        core_1.transition(':enter', [
            core_1.style({ opacity: '0', transform: 'translateY(40px)' }),
            core_1.animate('.4s .2s ease-in-out', core_1.style({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ opacity: '1', transform: 'translateX(0)' }),
            core_1.animate('.3s ease-in-out', core_1.style({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
exports.fallIn = fallIn;
function moveInLeft() {
    return core_1.trigger('moveInLeft', [
        core_1.transition(':enter', [
            core_1.style({ opacity: '0', transform: 'translateX(-100px)' }),
            core_1.animate('.6s .2s ease-in-out', core_1.style({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
exports.moveInLeft = moveInLeft;
