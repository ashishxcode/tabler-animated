"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707"}],["path",{"d":"M3 13h10m4 0h4"}],["path",{"d":"M8 21h8"}],["path",{"d":"M10 17l-.5 4"}],["path",{"d":"M14 17l.5 4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4],"o":[14.25,19],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,13],[12,21],[9.75,19]]}];

export const DeviceImacOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceImacOffIcon.displayName = "DeviceImacOffIcon";
