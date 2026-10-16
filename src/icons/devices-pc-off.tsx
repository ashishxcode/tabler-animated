"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 9v10h-6v-14h2"}],["path",{"d":"M13 9h9v7h-2m-4 0h-4v-4"}],["path",{"d":"M14 19h5"}],["path",{"d":"M17 17v2"}],["path",{"d":"M6 13v.01"}],["path",{"d":"M6 16v.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2,3],"o":[16.5,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12],[17,12.5],[6,13.01],[6,16.01]]}];

export const DevicesPcOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DevicesPcOffIcon.displayName = "DevicesPcOffIcon";
