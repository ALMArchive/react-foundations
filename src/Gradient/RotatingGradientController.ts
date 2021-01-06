import {ColorProbability} from './gradient-types';

export class RotatingGradientController {
    rot = (() => {
        let degree = 0;
        return (fact = 1) => degree++ * fact;
    })();

    counts: number[] = [];
    colors: string[] = [];
    max: number;

    constructor(colors: ColorProbability[]) {
        const scale = 1000 / colors[colors.length - 1].probability;
        colors.forEach((e, i) => {
            const {
                probability,
                color
            } = e;
            this.counts.push(probability * scale);
            this.colors.push(color);
        });
        const a = 1000 - this.counts[this.counts.length - 2];
        const b = this.counts[1];
        this.max = 1000 + (a + b)/2;
    }

    _makeGrad(orderedColors: ColorProbability[], deg = 0) {
        let out = `linear-gradient(${deg}deg`;
        for (const tmpColor of orderedColors) {
            const {
                probability,
                color
            } = tmpColor;
            out += `, ${color} ${probability}%`;
        }
        out += ')';
        return out;
    }

    _findPos = (arr: number[]) => {
        let i = arr.length - 1;
        while (arr[i] > 0) i--;
        return i;
    }

    grad(deg = 0, direction = 0) {
        deg = Math.abs(deg) % this.max;
        const newCounts = this.counts.map(e => e - deg);
        const ind = this._findPos(newCounts);
        const orderedColors = [];
        orderedColors.push({
            color: this.colors[ind],
            probability: 0
        });
        for (let i = ind + 1; i < newCounts.length; i++) {
            const [color, count] = [this.colors[i], newCounts[i]];
            orderedColors.push({
                color,
                probability: count / 10
            });
        }

        for (let i = 0; i < ind; i++) {
            const [color, count] = [this.colors[i], newCounts[i + 1]];
            orderedColors.push({
                color,
                probability: (1000 + count) / 10
            });
        }

        orderedColors.push({
            color: this.colors[ind],
            probability: 100
        });
        return this._makeGrad(orderedColors, direction);
    }
}
