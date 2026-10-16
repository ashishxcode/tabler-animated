"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 5.5a6 2.5 0 1 0 12 0a6 2.5 0 1 0 -12 0"}],["path",{"d":"M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097 .108l-1.586 1.586v4c0 1.61 -2.54 2.925 -5.725 3l-.275 0c-3.314 0 -6 -1.343 -6 -3v-2l-1.586 -1.586a1.414 1.414 0 0 1 1.586 -2.287v-6.627"}],["path",{"d":"M10 12.5v1.5"}],["path",{"d":"M14 16v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,13.25],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5.5],[10,13.25],[14,16.5]]}];

export const WoodIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WoodIcon.displayName = "WoodIcon";
