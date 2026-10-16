"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2"}],["path",{"d":"M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11"}],["path",{"d":"M12 8h-6v3h6l0 -3"}],["path",{"d":"M12 14v.01"}],["path",{"d":"M9 14v.01"}],["path",{"d":"M6 14v.01"}],["path",{"d":"M12 17v.01"}],["path",{"d":"M9 17v.01"}],["path",{"d":"M6 17v.01"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5,6,7,8],"o":[12,12],"a":-12}];

export const DeviceLandlinePhoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceLandlinePhoneIcon.displayName = "DeviceLandlinePhoneIcon";
