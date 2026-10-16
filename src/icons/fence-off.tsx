"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 12h-8v4h12m4 0v-4h-4"}],["path",{"d":"M6 16v4h4v-4"}],["path",{"d":"M10 12v-2m0 -4l-2 -2m-2 2v6"}],["path",{"d":"M14 16v4h4v-2"}],["path",{"d":"M18 12v-6l-2 -2l-2 2v4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[16,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,14],[8,18],[8,8],[16,8]]}];

export const FenceOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FenceOffIcon.displayName = "FenceOffIcon";
