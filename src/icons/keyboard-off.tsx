"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418"}],["path",{"d":"M6 10l0 .01"}],["path",{"d":"M10 10l0 .01"}],["path",{"d":"M14 10l0 .01"}],["path",{"d":"M18 10l0 .01"}],["path",{"d":"M6 14l0 .01"}],["path",{"d":"M18 14l0 .01"}],["path",{"d":"M10 14l4 0"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[6],"o":[18,14.01],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,7],"a":0.22,"dl":0.1,"st":0.07,"os":[[6,10],[10,10],[14,10],[18,10],[6,14.01],[12,14]]}];

export const KeyboardOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
KeyboardOffIcon.displayName = "KeyboardOffIcon";
