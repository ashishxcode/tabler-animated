"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 7h-4v-4"}],["path",{"d":"M17 3h4v4h-4l0 -4"}],["path",{"d":"M10 6v-3h4v4h-3"}],["path",{"d":"M3 10h4v4h-4l0 -4"}],["path",{"d":"M17 13v-3h4v4h-3"}],["path",{"d":"M14 14h-4v-4"}],["path",{"d":"M10 17h4v4h-4l0 -4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,5],[19,5],[12,5],[5,12],[19,12],[12,12],[12,19]]}];

export const DialpadOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DialpadOffIcon.displayName = "DialpadOffIcon";
