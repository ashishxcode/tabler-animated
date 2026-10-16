"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 6v3"}],["path",{"d":"M14 6v3"}],["path",{"d":"M5 11a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -8"}],["path",{"d":"M10 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M9 3h6v3h-6l0 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,15],"a":0.06},{"fx":"pop","n":[0,1,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,7.5],[14,7.5],[12,15],[12,4.5]]}];

export const PerfumeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PerfumeIcon.displayName = "PerfumeIcon";
