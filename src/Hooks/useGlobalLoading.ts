import { useEffect } from "react"
import useEmitter, { EDeviceEmitter, emitter } from "./useEmitter";
import RNProgressHub from 'progress-hud';

export const onGlobalLoading = () => {
    emitter(EDeviceEmitter.GLOBAL_LOADING, true);
};
  
export const offGlobalLoading = () => {
    emitter(EDeviceEmitter.GLOBAL_LOADING, false);
};

export const useGlobalLoading = () => {
    useEmitter(EDeviceEmitter.GLOBAL_LOADING, (bool: boolean) => {
        if(bool) {
            RNProgressHub.show()
        } else {
            RNProgressHub.dismiss()
        }
    });
}