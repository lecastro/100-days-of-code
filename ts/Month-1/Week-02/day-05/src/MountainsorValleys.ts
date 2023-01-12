export default class MountainsorValleys
{
    private _value: any[];

    constructor(value: any[])
    {
        this._value = value;
    }

    public detectTerrainType()
    {
        //detect peak
        let peak = this._value[0];
        let canBeMontain: boolean = false;
        let peakIndex: number = 0;

        for (let i = 0; i < this._value.length -1; i++) {
            if (this._value[i] > peak) {
                peak = this._value[i];
                canBeMontain = true;
                peakIndex = i;
            } else {
                if (this._value[i] == peak) {
                    canBeMontain = false;
                }            
            }
        }

        let refValue: number = peak;

        if (canBeMontain) {
            for (let i = peakIndex + 1; i < this._value.length; i++) {
                if (this._value[i] <= refValue) {
                    refValue = this._value[i];
                } else {
                    canBeMontain = false;
                    break;
                }
            }
        }
        if (canBeMontain) {
            refValue = peak;            
            for (let i = peakIndex -1; i >= 0; i--) {
                if (this._value[i] <= refValue) {
                    refValue = this._value[i];
                } else {
                    canBeMontain = false;
                    break;
                }
            }   
        }

        if (canBeMontain) {
            return "montain";
        } else {
            //detect trough
            let trough = this._value[0];
            let canBeValley = false;
            let troughIndex = 0;
            for (let i = 1; i < this._value.length -1; i++) {
                if (this._value[i] < trough) {
                    trough = this._value[i];
                    canBeValley = true;
                    troughIndex = i;
                } else {
                    if (this._value[i] == trough) {
                        canBeValley = false;
                    }            
                }
            }
            
            let refValue = trough;

            if (canBeValley) {
                for (let i = troughIndex + 1; i < this._value.length; i++) {
                    if (this._value[i] >= refValue) {
                        refValue = this._value[i];
                    } else {
                        canBeValley = false;                    
                        break;
                    }
                }
                
                if (canBeValley) {
                    refValue = trough;
                    for (let i = troughIndex -1; i >= 0; i--) {
                        if (this._value[i] >= refValue) {
                            refValue = this._value[i];
                        } else {
                            canBeValley = false;                        
                            break;
                        }
                    }   
                }
            }
    
            if (canBeValley) {
                return "valley";
            }        
        }

        return 'neither';
    }
}