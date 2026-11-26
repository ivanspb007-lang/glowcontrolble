import {LightingState, DeviceInfo, EffectStep} from '../domain/types';
export interface LightingProtocol {
 readonly id:string; readonly label:string;
 matches(device:DeviceInfo):boolean;
 connect(device:DeviceInfo):Promise<void>;
 setColor(state:LightingState):Promise<void>;
 setEffect?(steps:EffectStep[],speed:number,brightness:number):Promise<void>;
 disconnect():Promise<void>;
}
