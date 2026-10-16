"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 13l0 4"}],["path",{"d":"M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,15],[18,7.5],[12,15]]}];

export const SmokingNoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SmokingNoIcon.displayName = "SmokingNoIcon";
