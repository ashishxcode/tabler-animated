"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M12 11l0 .01"}],["path",{"d":"M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[12,12.53],"a":0.06},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,6],[6,18],[18,6],[18,18],[12,11.01]]}];

export const LiveViewIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LiveViewIcon.displayName = "LiveViewIcon";
