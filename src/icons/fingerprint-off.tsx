"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"}],["path",{"d":"M8 11c0 -.848 .264 -1.634 .713 -2.28m2.4 -1.621a4 4 0 0 1 4.887 3.901l0 1"}],["path",{"d":"M12 12v1a14 14 0 0 0 2.5 8"}],["path",{"d":"M8 15a18 18 0 0 0 1.8 6"}],["path",{"d":"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 1.854 -5.143m2.176 -1.825a8 8 0 0 1 7.97 .018"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[13.25,16.5],"a":0.35,"dl":0.2},{"fx":"draw","n":[0,1,3,4],"o":[12.39,11.99],"st":0.07}];

export const FingerprintOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FingerprintOffIcon.displayName = "FingerprintOffIcon";
