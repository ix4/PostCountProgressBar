//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2017 Mrcomputer1
// MIT License
//

import {ProgressBarGenerator} from '../Extensions';

// 100, 20
export class CanvasBackgroundPercentGenerator extends ProgressBarGenerator{
    constructor(canvas){
        super()
        this.canvas = canvas;
    }
    run(progressBar){
        var ctx = document.querySelector(this.canvas).getContext("2d");
        // Background
        ctx.fillStyle = progressBar._theme.incomplete;
        ctx.fillRect(0, 0, 100, 20);
        // Green Lines
        ctx.fillStyle = progressBar._theme.complete;
        ctx.beginPath();
        for(var i = 0; i != progressBar.percent + 1; i++){
            ctx.fillRect(i*1, 0, 1, 20);
        }
        // Text
        ctx.fillStyle = progressBar._theme.text;
        ctx.font = "1em sans-serif";
        ctx.fillText(progressBar.percent + "%", 5, 16);
    }
    getSize(){
        return [100, 20];
    }
}